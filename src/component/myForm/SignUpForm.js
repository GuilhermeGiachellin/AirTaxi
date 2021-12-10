/* eslint-disable camelcase */
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const SigUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { headers: { authorization } } = await axios.post('https://air-taxi.herokuapp.com/users', {
      user: {
        name,
        email,
        password,
        password_confirmation,
      },
    });
    console.log('LOGIN');
    const cookies = new Cookies();
    cookies.set('MyToken', authorization, { path: '/' });
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
