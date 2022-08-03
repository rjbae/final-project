import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

export default class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewImg: 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png',
      location: '',
      cameraUsed: '',
      feedback: '',
      photoUrl: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
    this.fileInputRef = React.createRef();
  }

  handleChange(location) {
    this.setState({ location });
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handlePhotoChange(event) {
    this.setState({ previewImg: URL.createObjectURL(event.target.files[0]) });
  }

  handleSubmit(event) {
    alert('Your post was successful.');
    // console.log(this.state);
    event.preventDefault();
    const formData = new FormData();

    formData.append('feedback', this.state.feedback);
    formData.append('image', this.fileInputRef.current.files[0]);
    formData.append('cameraUsed', this.state.cameraUsed);
    formData.append('locationName', this.state.location);
    formData.append('photoUrl', this.state.photoUrl);
    formData.append('previewImg', this.state.previewImg);

    fetch('/api/posts', {
      method: 'POST',
      headers: {
        'X-Access-Token': localStorage.getItem('react-context-jwt')
      },
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        // console.log(result);
        this.setState({
          photoUrl: '',
          cameraUsed: '',
          feedback: '',
          location: '',
          previewImg: 'https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png'
        });
        this.fileInputRef.current.value = null;
      });
  }

  render() {
    return (
      <div className='form-container'>
        <h2 className='create-post-header'>Create a Post</h2>
        <img src={this.state.previewImg} className='placeholder-img'></img>
        <form className='create-post-form' onSubmit={this.handleSubmit}>
          <div className='row file-upload'>
          <input type='file' id='photo' accept=".png, .jpeg, .jpg" ref={this.fileInputRef} name='photoUrl' onChange={this.handlePhotoChange}></input>
          </div>
          <div className='row'>
          <label>Location:</label>
            <PlacesAutocomplete
            value={this.state.location}
            onChange={this.handleChange}
            >
              {({ getInputProps, suggestions, getSuggestionItemProps, loading }) =>
                (
                <React.Fragment>
                <input {...getInputProps()} name='location' required/>
                  {suggestions.map(suggestion => {
                    return (
                    <div key={suggestions.description} { ...getSuggestionItemProps(suggestion) } className='suggestion-list'>
                      { suggestion.description }
                    </div>
                    );
                  })}
                </React.Fragment>
                )
                }
            </PlacesAutocomplete>
          </div>
          <div className='row'>
          <label>Camera Used:</label>
            <input type='text' id='cameraUsed' name='cameraUsed' onChange={this.handleInputChange} value={this.state.cameraUsed} required></input>
          </div>
          <div className='row'>
            <label>Feedback:</label>
            <textarea className='feedback-text' id='feedback' name='feedback' onChange={this.handleInputChange} value={this.state.feedback} required></textarea>
          </div>
          <button type='submit'>POST</button>
        </form>
      </div>
    );
  }
}
