import React from 'react';
import AppContext from '../lib/app-context';
import Redirect from '../components/redirect';

export default class Home extends React.Component {
  render() {
    if (!this.context.user) return <Redirect to="sign-in" />;
    return (
    <>
      <div className='row'>
        <div className='home-img-container'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Central_Californian_Coastline%2C_Big_Sur_-_May_2013.jpg/1200px-Central_Californian_Coastline%2C_Big_Sur_-_May_2013.jpg' className='home-img'></img>
        </div>
      </div>
      <div className='row'>
        <div className='search-container'>
            <input type='text' className='location-search' placeholder='Search by location...'></input>
            <button className='search-button'><i className='bi bi-search'></i></button>
        </div>
      </div>
    </>
    );
  }
}

Home.contextType = AppContext;
