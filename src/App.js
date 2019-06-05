import React from 'react';
import Alert from 'react-bootstrap/Alert';
import ProductListing from './ProductListing';
import ZipcodeAutoComplete from './ZipFinder';
import './App.scss';

function App() {
  return (
    <div className="App">
      <ProductListing />
      <br/>
      <ZipcodeAutoComplete/>
    </div>
  );
}

export default App;
