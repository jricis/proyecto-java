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
import Header from './StaticComponents/Header';

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
          <Header></Header>
        </div>
        <br></br>
        <Switch>
          <Route path="/home" exact>
            <CardRests></CardRests>
          </Route>
          <Route path="/home/registroUser">
            <RegistroUser></RegistroUser>
          </Route>
          <Route path="/home/registroRestaurante">
            <RegistroRestaurante></RegistroRestaurante>
          </Route>
          <Route path="/home/registroRider/">
            <RegistroRider></RegistroRider>
          </Route>
          <Route path="/home/HomeRider/">
            <HomeRider></HomeRider>
          </Route>
          <Route path="/home/LoginUser/">
            <LoginUser></LoginUser>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </Router>
  );
}
export default App;
