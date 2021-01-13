import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="container">
      <div className="Navbar">
      <h1>NAVBAR...</h1>
      </div>
      <Switch>
        
        <Router path="/Jonathan">
          <h2>jonathan
          </h2>
        </Router>
        <Router path="/">
          <h2>Inici</h2>
        </Router>
      </Switch>

      <h1>Footer</h1>
      </div>
    </Router>
  );
}

export default App;
