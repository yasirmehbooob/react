import React from 'react';
import './App.css';
import Login from "./component/login/login";
import SingUp from './component/singup/singup';
import NavBar from './component/layout/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SingUp />
    </div>
  );
}

export default App;
