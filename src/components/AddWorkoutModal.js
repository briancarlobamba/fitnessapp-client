import React, { useState, useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';
import notyf from '../utils/notyf';

const AddWorkoutModal = ({ fetchWorkouts }) => {
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');
  const { user } = useContext(UserContext);

  const handleAddWorkout = async () => {
    try {
      await axios.post('https://fitnessapp-api-ln8u.onrender.com/workouts/addWorkout', {
        name, duration
      }, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      fetchWorkouts();
      notyf.success('Workout added successfully');
    } catch (error) {
      console.error(error);
      notyf.error('Failed to add workout');
    }
  };

  return (
    <div className="modal fade" id="addWorkoutModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Workout</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control"
              placeholder="Workout Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Duration"
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" data-bs-dismiss="modal" onClick={handleAddWorkout}>
              Add Workout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddWorkoutModal;
