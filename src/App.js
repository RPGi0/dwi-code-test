import React from 'react';
import ProductListing from './FunctionComponents/ProductListing';
import ZipcodeAutoComplete from './FunctionComponents/ZipFinder';
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
