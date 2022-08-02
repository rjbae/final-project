import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

export default class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      cameraUsed: '',
      feedback: '',
      imgUrl: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleChange(location) {
    this.setState({ location });
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    if (target.type === 'text') {
      this.setState({ [name]: event.target.value });
    }
  }

  render() {
    return (
      <div className='form-container'>
        <h2 className='create-post-header'>Create a Post</h2>
        <img src='https://wtwp.com/wp-content/uploads/2015/06/placeholder-image.png' className='placeholder-img'></img>
        <form className='create-post-form'>
          <div className='row'>
          <input type='file'></input>
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
                <input {...getInputProps()}/>
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
            <input type='text' name='cameraUsed' onChange={this.handleInputChange}></input>
          </div>
          <div className='row'>
            <label>Feedback:</label>
            <textarea type='text' className='feedback-text' name='feedback' onChange={this.handleInputChange}></textarea>
          </div>
          <button type='submit'>POST</button>
        </form>
      </div>
    );
  }
}
