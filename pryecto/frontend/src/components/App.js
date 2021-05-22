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
import Perfil from './User/Perfil';
import AmountProducto from './Restaurante/Productos/AmountProductoRestaurant';
import LoginRestaurante from './Restaurante/LoginRestaurante';
import AddProductRestaurant from './Restaurante/Productos/AddProductRestaurant';
import ViewProductUser from './User/Pedido/Productos/ViewProductUser';

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
          <Route path="/" exact>
            <CardRests></CardRests>
          </Route>
          <Route path="/registrouser">
            <RegistroUser></RegistroUser>
          </Route>
          <Route path="/registrorestaurante">
            <RegistroRestaurante></RegistroRestaurante>
          </Route>
          <Route path="/registrorider/">
            <RegistroRider></RegistroRider>
          </Route>
          <Route path="/homerider/:data">
            <HomeRider></HomeRider>
          </Route>
          <Route path="/loginuser/">
            <LoginUser></LoginUser>
          </Route>
          <Route path="/loginrider/">
            <LoginRider></LoginRider>
          </Route>
          <Route path="/perfil/:data">
            <Perfil></Perfil>
          </Route>
          <Route path="/restaurante/:data">
            <Restaurante></Restaurante>
          </Route>
          <Route path="/loginrestaurante">
            <LoginRestaurante></LoginRestaurante>
          </Route>
          <Route path="/viewproductrestaurant/:data">
            <AmountProducto></AmountProducto>
          </Route>
          <Route path="/addproductrestaurant/:data">
            <AddProductRestaurant></AddProductRestaurant>
          </Route>
          <Route path="/viewproductuser/:data">
            <ViewProductUser></ViewProductUser>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}
export default App;
