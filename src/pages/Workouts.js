import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WorkoutCard from '../components/WorkoutCard';
import { Button, Modal, Form } from 'react-bootstrap';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf();

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newWorkout, setNewWorkout] = useState({ name: '', duration: '' });

  useEffect(() => {
    fetchWorkouts();
  }, []);

  const fetchWorkouts = async () => {
    try {
      const response = await axios.get('https://fitnessapp-api-ln8u.onrender.com/workouts/getMyWorkouts', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setWorkouts(response.data.workouts);
    } catch (error) {
      notyf.error('Failed to fetch workouts');
    }
  };

  const handleAddWorkout = async () => {
    try {
      const response = await axios.post('https://fitnessapp-api-ln8u.onrender.com/workouts/addWorkout', newWorkout, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setWorkouts([...workouts, response.data]);
      setShowModal(false);
      setNewWorkout({ name: '', duration: '' });
      notyf.success('Workout added');
    } catch (error) {
      notyf.error('Failed to add workout');
    }
  };

  return (
    <div className="container">
      <h2>Your Workouts</h2>
      <Button id="addWorkout" onClick={() => setShowModal(true)}>Add Workout</Button>
      <div className="row">
        {workouts.map(workout => (
          <WorkoutCard key={workout._id} workout={workout} />
        ))}
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Workout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={newWorkout.name} onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Duration</Form.Label>
              <Form.Control type="text" value={newWorkout.duration} onChange={(e) => setNewWorkout({ ...newWorkout, duration: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={handleAddWorkout}>Add Workout</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Workouts;
