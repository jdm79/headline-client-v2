import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import HeadlinesList from './HeadlinesList'
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Headline Checker <span id="headline-sm"> (just what are the other newspapers up to?) </span></h1>
        </header>
      </div> 
      <div className="headlines">
        <HeadlinesList />
      </div>
    </div>    
  );
}

export default App;
