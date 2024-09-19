import React from 'react';

const WorkoutCard = ({ workout }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{workout.name}</h5>
          <p className="card-text">Duration: {workout.duration}</p>
          <p className="card-text">Status: {workout.status ? 'Completed' : 'Incomplete'}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;
