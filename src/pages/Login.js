import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import notyf from '../utils/notyf'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const res = await axios.post('https://fitnessapp-api-ln8u.onrender.com/users/login', { email, password });
      login(res.data.token);
      notyf.success('Login successful!');
      navigate('/workouts');
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      notyf.error('Login failed: ' + (error.response ? error.response.data.message : error.message));
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
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
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
