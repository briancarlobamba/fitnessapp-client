import React, { useState } from 'react';
import axios from 'axios';
import notyf from '../utils/notyf';  

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      console.log('Registering with:', { email, password });
      const response = await axios.post('https://fitnessapp-api-ln8u.onrender.com/users/register', {
        email, password
      });
      console.log('Registration response:', response.data);
      notyf.success('Registration successful! Please log in.');
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data : error.message);
      notyf.error('Registration failed');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
