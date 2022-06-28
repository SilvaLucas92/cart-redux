
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import { Switch, Route } from 'react-router-dom'
import SingleItem from './components/SingleItem/SingleItem'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Products} />
        <Route path='/cart' component={Cart} />
        <Route path='/:id' component={SingleItem} />
      </Switch>
    </div>
  );
}

export default App;
