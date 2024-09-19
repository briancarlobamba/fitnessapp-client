import React, { useEffect, useState, useContext, useCallback } from 'react';
import axios from 'axios';
import AddWorkoutModal from '../components/AddWorkoutModal';
import WorkoutCard from '../components/WorkoutCard';
import { UserContext } from '../context/UserContext';
import notyf from '../utils/notyf';

const Workouts = () => {
  const { user, logout } = useContext(UserContext);
  const [workouts, setWorkouts] = useState([]);

  const fetchWorkouts = useCallback(async () => {
    try {
      const res = await axios.get('https://fitnessapp-api-ln8u.onrender.com/workouts/getMyWorkouts', {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setWorkouts(res.data);
      notyf.success('Workouts fetched successfully');
    } catch (error) {
      console.error(error);
      notyf.error('Failed to fetch workouts');
    }
  }, [user.token]);

  useEffect(() => {
    fetchWorkouts();
  }, [fetchWorkouts]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h2>Your Workouts</h2>
        <button className="btn btn-danger" onClick={logout}>Logout</button> {/* Logout button */}
      </div>

      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addWorkoutModal"
      >
        Add Workout
      </button>

      <div className="row mt-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout._id} workout={workout} />
        ))}
      </div>

      <AddWorkoutModal fetchWorkouts={fetchWorkouts} />
    </div>
  );
};

export default Workouts;
