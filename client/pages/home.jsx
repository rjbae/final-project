import React from 'react';
import AppContext from '../lib/app-context';

export default function Home(props) {
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
        </div>
      </div>
    </>
  );
}

Home.contextType = AppContext;
