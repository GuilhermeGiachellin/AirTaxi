/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Routes, Route, Link, useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './assets/app.module.css';
import LogInForm from './component/myForm/LogInForm';
import SigUpForm from './component/myForm/SignUpForm';
import CreatePlaneForm from './component/myForm/CreatePlaneForm';
import Reservation from './component/ReservationManager';
import PlaneDetails from './component/plane/planeDetails';
import Login from './component/pages/Login';
import MainView from './component/pages/MainView';

function App() {
  const status = useSelector((state) => state.sessions.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'out') {
      navigate('/');
    }
  }, [status]);

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainView />} />
        <Route path="/add" element={<CreatePlaneForm />} />
        <Route path="main/reservations/:id" element={<Reservation />} />
        <Route path="main/plane/:id" element={<PlaneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
