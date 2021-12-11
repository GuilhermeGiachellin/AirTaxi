/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Routes, Route, Link, useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import {
  selectAllPlanes, selectPlaneById, fetchPlanes,
  fetchReservations,
} from './redux/slices/planesSlice';
import './App.css';
import LogInForm from './component/myForm/LogInForm';
import SigUpForm from './component/myForm/SignUpForm';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { entities } = useSelector((state) => state.planes);
  const biscoitos = new Cookies();
  // useEffect(() => {
  //   dispatch(fetchPlanes());
  // }, [dispatch]);
  console.log(entities);

  const testMethod = () => navigate('signUp');

  return (
    <div className="App">
      <p>IHUL: </p>
      <Routes>
        <Route path="/" element={<LogInForm />} />
        <Route path="/signUp" element={<SigUpForm />} />
      </Routes>
      <Link to="/signUp">SignUp</Link>
      {/* <p>{JSON.stringify(useSelector((state) => selectPlaneById(state, 1)))}</p> */}
      {/* <button type="button" onClick={() => dispatch(logIn())}>Login</button> */}
      <button type="button" onClick={() => testMethod()}> NAVIGATE TEST</button>
      <button type="button" onClick={() => console.log(biscoitos.get('MyToken'))}>Token Cookie</button>
      {/* <button type="button" onClick={() => dispatch(fetchPlanes())}>Fetch plane</button> */}
      {/* <button type="button" onClick={() => dispatch(fetchReservations())}>Fetch
       Reservations</button> */}
    </div>
  );
}

export default App;
