/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import {
  selectAllPlanes, selectPlaneById, logIn, fetchPlanes,
  fetchReservations,
} from './redux/slices/planesSlice';
import './App.css';
import LogInForm from './component/myForm/LogInForm';
import SigUpForm from './component/myForm/SignUpForm';

function App() {
  const [name, setTitle] = useState('');
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.planes);
  const biscoitos = new Cookies();
  // useEffect(() => {
  //   dispatch(fetchPlanes());
  // }, [dispatch]);
  console.log(entities);
  const loginEvent = () => {
    console.log('log in event');
    dispatch(logIn());
  };

  return (
    <div className="App">
      <p>IHUL: </p>
      <LogInForm />
      <SigUpForm />
      {/* <p>{JSON.stringify(useSelector((state) => selectPlaneById(state, 1)))}</p> */}
      {/* <button type="button" onClick={() => dispatch(logIn())}>Login</button> */}
      <button type="button" onClick={() => console.log(biscoitos.get('MyToken'))}>Token Cookie</button>
      {/* <button type="button" onClick={() => dispatch(fetchPlanes())}>Fetch plane</button> */}
      {/* <button type="button" onClick={() => dispatch(fetchReservations())}>Fetch
       Reservations</button> */}
    </div>
  );
}

export default App;
