import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const LogInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e, email, password);
    const { headers: { authorization } } = await axios.post('https://air-taxi.herokuapp.com/users/sign_in', {
      user: {
        email,
        password,
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

        <button type="submit">LogIn</button>
      </form>
    </div>
  );
};

export default LogInForm;
