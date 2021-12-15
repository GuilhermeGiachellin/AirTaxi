/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/slices/sessionSlice';
import style from '../../assets/Forms.module.css';

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
    <div className={style.cnt}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
          className={style.input}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
          className={style.input}
        />
        <button type="submit" disabled={status === 'logged'} className={style.button}>LogIn</button>
      </form>
    </div>
  );
};

export default LogInForm;
