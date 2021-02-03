import React from 'react';
import './App.css';
import Login from "./component/login/login";
import SingUp from './component/singup/singup';
import { BrowserRouter, Switch } from 'react-router-dom';
import Dashboard from './component/dashboard/dashboard';
import { GuardProvider, GuardedRoute } from 'react-router-guards';

function App() {

  const middleware = (req: any, res: any, next: any) => {
    if (localStorage.getItem("token")) {
      next();
    }

    next.redirect("/");
  }

  const preventBackMiddleware = (req: any, res: any, next: any) => {
    if (!localStorage.getItem("token")) {
      next();
    }

    next.redirect("/dashboard");
  }
  
  return (
    <div className="App">
      <BrowserRouter>
      <GuardProvider guards={[preventBackMiddleware]}>
        <Switch>
          <GuardedRoute path="/" exact component={Login} />
          <GuardedRoute path="/singup" component={SingUp} />
        </Switch>
      </GuardProvider>
          <GuardProvider guards={[middleware]}>
            <Switch>
              <GuardedRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </GuardProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

//why we use connecteddomrouter hashdomrouter
