import React from 'react';
import HeadlinesList from './HeadlinesList'
import TestHeadlinesList from './TestHeadlines'
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
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
