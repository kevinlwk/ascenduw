import React from 'react';
import './App.css';
import Header from './pages/header/Header.js';
import Landing from './pages/landing/Landing.js';
import ValueProp from './pages/landing/ValueProp.js';
import Sponsors from './pages/landing/Sponsors.js';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <body>
            <Landing/>
            <ValueProp/>
            <Sponsors/>
        </body>
    </div>
  );
}

export default App;
