import React from 'react';
import { Card, Button } from 'react-bootstrap';

const WorkoutCard = ({ workout }) => {
  return (
    <div className="col-md-4">
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>{workout.name}</Card.Title>
          <Card.Text>
            Duration: {workout.duration}
          </Card.Text>
          <Card.Text>
            Status: {workout.status}
          </Card.Text>
          <Card.Text>
            Date Added: {new Date(workout.dateAdded).toLocaleDateString()}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WorkoutCard;
