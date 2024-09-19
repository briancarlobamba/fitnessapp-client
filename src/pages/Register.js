import React, { useState } from 'react';
import axios from 'axios';
import notyf from '../utils/notyf';  

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await axios.post('https://fitnessapp-api-ln8u.onrender.com/users/register', {
        email, password
      });
      notyf.success('Registration successful! Please log in.');
    } catch (error) {
      console.error(error);
      notyf.error('Registration failed');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="btn btn-primary" onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
