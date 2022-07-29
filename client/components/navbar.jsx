import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import AppContext from '../lib/app-context';

export default class NavBar extends React.Component {
  render() {
    const { user, handleSignOut } = this.context;
    return (
    <>
      <Navbar className='navbar' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'><i className="fas fa-camera me-2" />Location Captures</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href='#home'>Home</Nav.Link>
                {user !== null &&
                <>
                  <Nav.Link href='#favorites'>Favorites</Nav.Link>
                  <Nav.Link href='#my-profile'>My Profile</Nav.Link>
                  <Nav.Link href='#sign-out' onClick={handleSignOut}>
                    Sign Out
                    <i className="ms-2 fas fa-sign-out-alt" />
                  </Nav.Link>
                </>
                }
                {user === null &&
                <>
                  <Nav.Link href="#sign-in">Log In</Nav.Link>
                  <Nav.Link href="#sign-up">Sign Up</Nav.Link>
                </>
                }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
  }
}

NavBar.contextType = AppContext;
