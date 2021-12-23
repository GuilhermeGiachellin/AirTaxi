import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/slices/sessionSlice';
import styles from './navBar.module.scss';

const NavBar = () => {
  const dispatch = useDispatch();
  return (

    <div className={styles.mainContainer}>
      <h1> AIR TAXI </h1>
      <nav className={styles.itemList}>
        <Link to="/main" className={styles.nav_link}>PLANES</Link>
        <Link to="/add" className={styles.nav_link}>ADD PLANE</Link>
        <Link to="/" onClick={() => dispatch(logOut())} className={styles.nav_link}>SIGN OUT</Link>
      </nav>
    </div>

  );
};

export default NavBar;
