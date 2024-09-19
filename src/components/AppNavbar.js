import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const AppNavbar = ({ isAuthenticated, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Fitness Tracker</Navbar.Brand>
      <Nav className="ml-auto">
        {isAuthenticated ? (
          <>
            <Link to="/workouts" className="nav-link">Workouts</Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Register</Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
