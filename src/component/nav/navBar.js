import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import { logOut } from '../../redux/slices/sessionSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  return (
    <>
      <div>
        <nav>
          <button type="button" onClick={() => dispatch(logOut())}>LogOut</button>
          <Link to="/add">Add new plane</Link>
          <button type="button">Reservation</button>
          <Link to="/main">Main page</Link>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
