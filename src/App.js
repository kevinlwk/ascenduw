import React from 'react';
import './App.css';
import Header from './pages/header/Header.js';
import Landing from './pages/landing/Landing.js';
import ValueProp from './pages/landing/ValueProp.js';

function App() {
  return (
    <div className="App">
        <header className="App-header">
          <Header/>
        </header>
        <body>
            <Landing/>
            <ValueProp/>
        </body>
    </div>
  );
}

export default App;
