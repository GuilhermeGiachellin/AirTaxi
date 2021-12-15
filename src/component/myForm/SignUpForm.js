/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../redux/slices/sessionSlice';
import style from '../../assets/Forms.module.css';

const SigUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUp({
      name, email, password, password_confirmation,
    }));
    navigate('/');
  };

  return (
    <div className={style.cnt}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input
          type="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
          className={style.input}
        />
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
        <input
          type="password"
          value={password_confirmation}
          placeholder="Password Confirmation"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
          className={style.input}
        />
        <button type="submit" className={style.button}>SignUpe</button>
      </form>
    </div>
  );
};

export default SigUpForm;
