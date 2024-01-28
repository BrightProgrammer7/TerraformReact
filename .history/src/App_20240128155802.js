import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deployed<code>React/App</code>on AWS with Terraform
        </p>
        <a
          className="App-link"
          href="https://terraf.org"
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
