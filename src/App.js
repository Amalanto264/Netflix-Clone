import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {action,originals,horror, comedy, romance} from './urls'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action} isSmall title="Action"/>
      <RowPost url={horror} isSmall title="Horror"/>
      <RowPost url={comedy} isSmall title="Comedy"/>
      <RowPost url={romance} isSmall title="Romance"/>
    </div>
  );
}

export default App;
