import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fitnessapp-api-ln8u.onrender.com',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

export const register = (data) => api.post('/users/register', data);
export const login = (data) => api.post('/users/login', data);
export const addWorkout = (data) => api.post('/workouts/addWorkout', data);
export const getMyWorkouts = () => api.get('/workouts/getMyWorkouts');
