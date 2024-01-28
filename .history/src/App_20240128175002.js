import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello World</h2>
        <p>
          Deployed <code> React/App</code> on AWS with Terraform
        </p>
        <a
          className="App-link"
          href="https://www.terraform.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Terraform
        </a>
      </header>
    </div>
  );
}

export default App;
