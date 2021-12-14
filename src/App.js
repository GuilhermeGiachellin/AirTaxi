/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Routes, Route, Link, useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './assets/navBar.module.css';
import LogInForm from './component/myForm/LogInForm';
import SigUpForm from './component/myForm/SignUpForm';
import MainPage from './component/MainPage';
import NavBar from './component/nav/navBar';
import CreatePlaneForm from './component/myForm/CreatePlaneForm';
import Reservation from './component/Reservation';

function App() {
  const status = useSelector((state) => state.sessions.status);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'out') {
      navigate('/');
    }
  }, [status]);

  return (
    <div className={styles.App}>
      <NavBar />
      <Routes>
        <Route path="/" element={<LogInForm />} />
        <Route path="/signUp" element={<SigUpForm />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/add" element={<CreatePlaneForm />} />
        <Route path="main/reservations/:id" element={<Reservation />} />
      </Routes>
      <Link to="/signUp">SignUp</Link>
    </div>
  );
}

export default App;
