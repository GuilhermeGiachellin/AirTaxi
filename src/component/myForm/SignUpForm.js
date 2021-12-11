/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/slices/sessionSlice';

const SigUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUp({
      name, email, password, password_confirmation,
    }));
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
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
        <input
          type="password"
          value={password_confirmation}
          placeholder="Password Confirmation"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          required
        />
        <button type="submit">SignUpe</button>
      </form>
    </div>
  );
};

export default SigUpForm;
