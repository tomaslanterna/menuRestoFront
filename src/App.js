import logo from './logo.svg';
import './App.css';
import RestoProfile from './stack/RestoProfile';
import SubirData from './components/SubirData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <RestoProfile/>
      <SubirData/>
      </header>
  </div>

  );
}

export default App;
