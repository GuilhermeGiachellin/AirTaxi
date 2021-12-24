import {
  AnimatePresence, motion, useCycle,
} from 'framer-motion';
import React from 'react';
import Media from 'react-media';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ImMenu3, ImMenu4 } from 'react-icons/im';
import { logOut } from '../../redux/slices/sessionSlice';
import styles from './navBar.module.scss';

const Links = () => {
  const dispatch = useDispatch();
  return (
    <nav className={styles.itemList}>
      <Link to="/main" className={styles.nav_link}>PLANES</Link>
      <Link to="/add" className={styles.nav_link}>ADD PLANE</Link>
      <Link to="/" onClick={() => dispatch(logOut())} className={styles.nav_link}>SIGN OUT</Link>
    </nav>
  );
};

const NavBar = () => {
  const [open, toggleOpen] = useCycle('close', 'open');

  return (
    <div className={styles.mainContainer}>
      <h1> AIR TAXI </h1>
      <Media queries={{ small: { maxWidth: 420 } }}>
        {(matches) => (matches.small ? (
          <>
            <button
              className={styles.menuBtn}
              type="button"
              onClick={toggleOpen}
            >
              {open === 'open' ? (<ImMenu4 style={{ fontSize: '2rem' }} />) : (<ImMenu3 style={{ fontSize: '2rem' }} />)}
            </button>
            <div style={{ display: 'flex', flexDirection: 'column ' }}>
              <AnimatePresence>
                {open === 'open' && (
                <motion.div
                  className={styles.menu}
                  initial={{ y: -200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ x: 200, opacity: 0 }}
                >
                  <Links />
                </motion.div>
                )}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <Links />
        ))}
      </Media>
    </div>

  );
};

export default NavBar;
