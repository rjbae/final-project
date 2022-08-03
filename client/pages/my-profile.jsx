import React from 'react';
import { Container } from 'react-bootstrap';

export default class MyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (!this.state.isClicked) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });
    }
  }

  render() {
    return (
      <Container>
      <>
        <div className='d-flex justify-content-between'>
            <h2 className='profile-header'>My Profile</h2>
            <h2 className='post-header'>Post <a href='#create-post'><i className="fas fa-plus"></i></a></h2>
        </div>
      </>
      </Container>
    );
  }
}
