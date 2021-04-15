
import React from 'react';

import Buscador from './Buscador';
import CardsRestaurantes from './CardsRestaurantes';
import CardsTrabaja from './StaticComponents/CardsTrabaja';
import Home from './index';
import LoginUser from './LoginUser';
import RegistroUser from './RegistroUser';
import Restaurantes from './Restaurante';
import CardRests from './CardRests';
import GetRest from './FuncionesApi/GetRest';
import Footer from './StaticComponents/Footer';
import HomeRider from './HomeRider';
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
         <Route path="/" exact>
           <CardRests></CardRests>
         </Route>
         <Route path="/registroUser">
           {/*RegistroUsuarios*/}
         </Route>
         <Route  path="/registroRestaurante">
           {/*RegistroRestaurante*/}
         </Route>
         <Route  path="/registroRider">
          {/*RegistroRider*/}
        </Route>
        <Route>
          
        </Route>
       </Switch>
     </div>
   </Router>
  );
}
export default App;
