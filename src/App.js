/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  Routes, Route, useNavigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './assets/app.module.css';
import CreatePlaneForm from './component/myForm/CreatePlaneForm';
import Reservation from './component/managers/ReservationManager';
import PlaneDetails from './component/plane/planeDetails';
import Login from './pages/Login';
import MainView from './pages/MainView';

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
        <Route path="main/plane/:id/reservations/:id" element={<Reservation />} />
        <Route path="main/plane/:id" element={<PlaneDetails />} />
      </Routes>
    </div>
  );
}

export default App;
