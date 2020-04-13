import React from 'react';
import './App.css';

import NewProductView from './views/NewProductView';
import ProductListView from './views/ProductListView';

function App() {
  return (
    <div className="App">
    <NewProductView/>
    <ProductListView/>
    </div>
  );
}

export default App;
