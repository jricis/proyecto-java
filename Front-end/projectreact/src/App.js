import React from 'react';
import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import { Incio } from './components/body/Incio';
import { Nav } from './components/nav/Nav';

function App() {
  return (
    <Router>
     
      <div className="Navbar">
        <Nav />
      </div>
      <div className="container">
      <Switch>
        
        <Router path="/Jonathan">
         
        </Router>
        <Router path="/">
          <Incio />
        </Router>
      </Switch>

      <h1>Footer</h1>
      </div>
    </Router>
  );
}

export default App;
