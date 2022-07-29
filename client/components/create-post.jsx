import React from 'react';

export default class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      cameraUsed: '',
      feedback: ''
    };
  }
}
