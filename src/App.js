/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import {
  selectAllPlanes, selectPlaneById, logIn, fetchPlanes,
  fetchReservations,
} from './redux/slices/planesSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.planes);
  const biscoitos = new Cookies();
  // useEffect(() => {
  //   dispatch(fetchPlanes());
  // }, [dispatch]);
  console.log(entities);
  return (
    <div className="App">
      <p>IHUL: </p>
      {/* <p>{JSON.stringify(useSelector((state) => selectPlaneById(state, 1)))}</p> */}
      <button type="button" onClick={() => dispatch(logIn())}>Login</button>
      <button type="button" onClick={() => console.log(biscoitos.get('MyToken'))}>Token Cookie</button>
      <button type="button" onClick={() => dispatch(fetchPlanes())}>Fetch plane</button>
      <button type="button" onClick={() => dispatch(fetchReservations())}>Fetch Reservations</button>
    </div>
  );
}

export default App;
