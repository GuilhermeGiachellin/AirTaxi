/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Routes, Route, Link, useNavigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import LogInForm from './component/myForm/LogInForm';
import SigUpForm from './component/myForm/SignUpForm';
import MainPage from './component/MainPage';
import { logOut } from './redux/slices/sessionSlice';
import { createPlane } from './redux/slices/planesSlice';

function App() {
  const status = useSelector((state) => state.sessions.status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'out') {
      navigate('/');
    }
  }, [status]);

  const obj = {
    model: 'F90',
  };

  return (
    <div className="App">
      <p>IHUL: </p>
      <Routes>
        <Route path="/" element={<LogInForm />} />
        <Route path="/signUp" element={<SigUpForm />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
      <Link to="/signUp">SignUp</Link>
      <button type="button" onClick={() => dispatch(logOut())}>LogOut</button>
      <button type="button" onClick={() => dispatch(createPlane())}>Create</button>
    </div>
  );
}

export default App;
