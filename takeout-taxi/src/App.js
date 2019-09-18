import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import DashBoard from './containers /Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <DashBoard />
    </div>
  );
}

export default App;
