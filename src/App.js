import React from 'react';
import './App.css';
import Header from './pages/header/Header.js';
import Landing from './pages/landing/Landing.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Header></Header>
          <Landing></Landing>
      </header>
    </div>
  );
}

export default App;
