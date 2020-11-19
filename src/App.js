import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

import NavBar from './containers/NavBar'
import MainContainer from './containers/MainContainer'

function App() {
  return (
    <div id="App">
      <NavBar />
      <MainContainer />
    </div>
  );
}

export default App;
