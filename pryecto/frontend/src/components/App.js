
import React from 'react';
import Buscador from './User/Buscador';
import LoginUser from './User/LoginUser';
import RegistroUser from './User/RegistroUser';
import CardRests from './Restaurante/CardRests';
import CardsTrabaja from './StaticComponents/CardsTrabaja';
import Footer from './StaticComponents/Footer';
import HomeRider from './Rider/HomeRider';
import RegistroRestaurante from './Restaurante/RegistroRestaurant';
import RegistroRider from './Rider/RegistroRider';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <div>
          {/*header*/}
        </div>
        <br></br>
        <Switch>
          <Route path="/home" exact>
            <CardRests></CardRests>
          </Route>
          <Route path="/registroUser">
            <RegistroUser></RegistroUser>
          </Route>
          <Route path="/registroRestaurante">
            <RegistroRestaurante></RegistroRestaurante>
          </Route>
          <Route path="/registroRider">
            <RegistroRider></RegistroRider>
          </Route>
          <Route>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
