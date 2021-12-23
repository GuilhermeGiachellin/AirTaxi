import React, { useEffect } from 'react';
import {
  Routes, Route, useNavigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './assets/app.module.css';
import CreatePlaneForm from './component/myForm/CreatePlaneForm';
import Login from './pages/Login';
import MainView from './pages/MainView';
import Details from './pages/Details';
import Reservation from './pages/Reservation';

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
        <Route path="main/plane/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
