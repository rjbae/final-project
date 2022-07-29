import React from 'react';
import { Container } from 'react-bootstrap';

export default class MyProfile extends React.Component {
  render() {
    return (
      <Container>
      <>
        <div className='d-flex justify-content-between'>
          <h2>My Profile</h2>
            <h2>Post <i className="fas fa-plus"></i></h2>
        </div>
      </>
      </Container>
    );
  }
}
