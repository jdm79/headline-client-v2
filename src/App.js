import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import HeadlinesList from './HeadlinesList'
import About from './About'

import './App.css';

function App() {
  return (
    <div>
      <div className="App">
      <About />
        <header className="App-header">
          <h1>UK Headline Checker</h1>
        </header>
      </div> 
      <div className="headlines">
        <HeadlinesList />
      </div>
    </div>    
  );
}

export default App;
