import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Router>
          <Link to='/test'>Test</Link>
        </Router>
      </header>
    </div>
  );
}

export default App;
