import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/slices/sessionSlice';
import styles from '../../assets/navBar.module.css';

const NavBar = () => {
  const dispatch = useDispatch();
  return (

    <div className={styles.nav_cnt}>
      <h1>LOGO</h1>
      <nav className={styles.nav_list}>
        <Link to="/main" className={styles.nav_link}>PLANES</Link>
        <Link to="/add" className={styles.nav_link}>ADD PLANE</Link>
        <Link to="/" onClick={() => dispatch(logOut())} className={styles.nav_link}>SIGN OUT</Link>
        <Link to="/signUp" className={styles.nav_link}>SIGN UP</Link>
      </nav>
    </div>

  );
};

export default NavBar;
