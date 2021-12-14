import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from '../../redux/slices/sessionSlice';
import styles from '../../assets/navBar.module.css';

const NavBar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.nav_cnt}>
        <nav>
          <Link to="/" onClick={() => dispatch(logOut())}>LogOut</Link>
          <Link to="/add">Add new plane</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/main">Planes page</Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
