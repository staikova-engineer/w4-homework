import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ana's Weather App</h1>
      </header>
      <Weather />
      <footer>
        <p>
          <a href="https://github.com/staikova-engineer/w4-homework">Open</a>
          -sourced code made by{" "}
          <a href="https://www.linkedin.com/in/anna-staikova-engineer/">Ana</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
