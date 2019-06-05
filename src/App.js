import React from 'react';
import ProductListing from './ProductListing';
import ZipcodeAutoComplete from './ZipFinder';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div><ProductListing/></div>
      <div><ZipcodeAutoComplete/></div>
    </div>
  );
}

export default App;
