import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import Home from './pages/home/Home.jsx';
import Classify from './pages/classify/Classify.jsx';
import Eat from './pages/eat/Eat.jsx';
import ShopCar from './pages/shopCar/ShopCar.jsx';
import Mine from './pages/mine/Mine.jsx';
import AppTab from './conponents/AppTab.jsx';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        
          <Route exact path="/" component={Home}/>
          <Route path="/product" component={Classify}/>
          <Route path="/eat" component={Eat}/>
          <Route path="/cart" component={ShopCar}/>
          <Route path="/home" component={Mine}/>

          <AppTab/>
          
        </div>
      </Router>
    );
  }
}

export default App;
