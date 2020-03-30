import React from 'react';
import Content from '../src/Content/Content'
import myGallery from '../src/Content/myGallery'
import './App.css';
import Navbar from './Menu/navbar'
import Routing from './Content/Router'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routing/>
      
    </div>
  );
}

export default App;
