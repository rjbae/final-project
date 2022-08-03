import React from 'react';
import AppContext from '../lib/app-context';
import Redirect from '../components/redirect';

export default class Home extends React.Component {
  render() {
    if (!this.context.user) return <Redirect to='sign-in'/>;

    return (
    <>
      <div className='row'>
        <div className='home-img-container'>
            <img src='https://lh3.googleusercontent.com/pw/AL9nZEWZoZh9HJMlsFUGpPSHucl0acABYhnFO8H3PAJCdULs4zcBwlSjPC2qY87_tEy0TN7vRWK9OMWdjKqe4QTZUvbWvrugcTaH_HiwwgIzM291cez65sHwszgPnGFY0fMtw52fh1Ic_AL6eBiCWsBqZ4yS=w1109-h905-no?authuser=0' className='home-img'></img>
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
