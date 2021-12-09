/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlanes, selectAllPlanes, selectPlaneById } from './redux/slices/planesSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { entities } = useSelector((state) => state.planes);

  useEffect(() => {
    dispatch(fetchPlanes());
  }, [dispatch]);
  console.log(entities);
  return (
    <div className="App">
      <p>IHUL: </p>
      <p>{JSON.stringify(useSelector((state) => selectPlaneById(state, 1)))}</p>
    </div>
  );
}

export default App;
