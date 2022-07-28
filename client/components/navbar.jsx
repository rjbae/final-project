import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Nav, Navbar, Container } from 'react-bootstrap';

export default function NavBar() {
  return (
    <>
      <Navbar className='navbar' expand='lg'>
        <Container>
          <Navbar.Brand>Location Captures <i className="fas fa-camera me-2" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#sign-in">Log In</Nav.Link>
              <Nav.Link href="#sign-up">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
