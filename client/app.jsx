import React from 'react';
import Home from './pages/home';
import jwtDecode from 'jwt-decode';
import NavBar from './components/navbar';
import parseRoute from './lib/parse-route';
import AuthForm from './components/auth-form';
// import AppContext from './lib/app-context';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      isAuthorizing: true,
      route: parseRoute(window.location.hash)
    };
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      const parsedRoute = parseRoute(window.location.hash);
      this.setState({ route: parsedRoute });
    });
    const token = window.localStorage.getItem('react-context-jwt');
    const user = token ? jwtDecode(token) : null;
    this.setState({ user, isAuthorizing: false });
  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    this.setState({ user });
  }

  handleSignOut() {
    window.localStorage.removeItem('react-context-jwt');
    this.setState({ user: null });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === 'home') {
      return <Home />;
    }
    if (route.path === 'sign-up' || route.path === 'login') {
      return <AuthForm />;
    }
  }

  render() {
    return (
        <>
          <NavBar />
          { this.renderPage() }
        </>
    );

  }
}
