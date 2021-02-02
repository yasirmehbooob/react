import React from 'react';
import './App.css';
import Login from "./component/login/login";
import SingUp from './component/singup/singup';
import NavBar from './component/layout/navbar';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/singup" component={SingUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

//why we use connecteddomrouter hashdomrouter
