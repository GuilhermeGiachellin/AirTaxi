import React from 'react';
import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { createPlane } from '../../redux/slices/planesSlice';
import { logOut } from '../../redux/slices/sessionSlice';

const NavBar = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  return (
    <>
      <div>
        <nav>
          <button type="button" onClick={() => dispatch(logOut())}>LogOut</button>
          <button type="button" onClick={() => dispatch(createPlane())}>Create</button>
          <button type="button">Reservation</button>
          <button type="button">Somthing</button>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
