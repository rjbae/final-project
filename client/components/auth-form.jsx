import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { action } = this.props;
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch(`/api/auth/${action}`, req)
      .then(res => res.json())
      .then(result => {
        if (action === 'sign-up') {
          window.location.hash = 'sign-in';
        } else if (result.user && result.token) {
          this.props.onSignIn(result);
        }
      });
  }

  render() {
    const { action } = this.props;
    const { handleChange, handleSubmit } = this;
    const alternateActionHref = action === 'sign-up'
      ? '#sign-in'
      : '#sign-up';
    const alternatActionText = action === 'sign-up'
      ? 'Already have an account? Sign in here'
      : 'Sign up here';
    const submitButtonText = action === 'sign-up'
      ? 'Sign Up'
      : 'Log In';
    const headerText = action === 'sign-up'
      ? 'Sign Up'
      : 'Log In';
    return (
    <Container>
      <h1 className='authform-header'>{headerText}</h1>
        <form className="w-100" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              required
              autoFocus
              id="username"
              type="text"
              name="username"
              onChange={handleChange}
              className="form-control bg-light" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              required
              id="password"
              type="password"
              name="password"
              onChange={handleChange}
              className="form-control bg-light" />
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <small>
              <a className="text-muted" href={alternateActionHref}>
                {alternatActionText}
              </a>
            </small>
            <button type="submit" className="btn btn-primary">
              {submitButtonText}
            </button>
          </div>
        </form>
      </Container>
    );
  }

}
