import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/home' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
