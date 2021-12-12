/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/slices/sessionSlice';

const LogInForm = () => {
  const status = useSelector((state) => state.sessions.status);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'logged') {
      navigate('main');
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={status === 'logged'}>LogIn</button>
      </form>
    </div>
  );
};

export default LogInForm;
