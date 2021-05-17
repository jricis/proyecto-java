import React from 'react';
import Buscador from './User/Buscador';
import LoginUser from './User/LoginUser';
import LoginRider from './Rider/LoginRider';
import RegistroUser from './User/RegistroUser';
import CardRests from './Restaurante/CardRests';
import CardsTrabaja from './StaticComponents/CardsTrabaja';
import Footer from './StaticComponents/Footer';
import HomeRider from './Rider/HomeRider';
import RegistroRestaurante from './Restaurante/RegistroRestaurant';
import RegistroRider from './Rider/RegistroRider';
import Header from './StaticComponents/Header';
import Restaurante from './Restaurante/Restaurante';
import ViewPedidosRestaurant from './Restaurante/Pedidos/ViewPedidosRestaurant'
import Perfil from './User/Perfil';
import ViewProductRestaurant from './Restaurante/Productos/ViewProductRestaurant'

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
          <Route path="/home/RegistroRider/">
            <RegistroRider></RegistroRider>
          </Route>
          <Route path="/home/HomeRider/:data">
            <HomeRider></HomeRider>
          </Route>
          <Route path="/home/LoginUser/">
            <LoginUser></LoginUser>
          </Route>
          <Route path="/home/LoginRider/">
            <LoginRider></LoginRider>
          </Route>
          <Route path="/home/Perfil/:data">
            <Perfil></Perfil>
          </Route>
          <Route path="/home/Restaurante/:data">
            <Restaurante></Restaurante>
          </Route>
          <Route path="/home/Restaurante/:data/Pedidos/">
            <ViewPedidosRestaurant></ViewPedidosRestaurant>
          </Route>
          <Route path="/home/ViewProductRestaurant/">
          <ViewProductRestaurant></ViewProductRestaurant>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}
export default App;
