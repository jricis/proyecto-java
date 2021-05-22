import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link  } from "react-router-dom";

import tarjeta from '../../imagenes/tarjeta.png';


const Pago = () =>{

      const alerta = () =>{
        alert("Ha pagado correctamente")
      }

return(
        
  <div className="formulario row d-flex justify-content-center position-absolute top-50 start-50 translate-middle register-user" style={{width:"30%"}}>
      <div className="mt-4 login-title d-flex justify-content-center">
          <p className="fs-2 fw-bold">Pago tarjeta</p>
      </div>      
      <form className="row d-flex justify-content-center formulario">  
          <div className="row card-input d-flex justify-content-center col-12">
                <input
                  name="card-number"
                  type="number"
                  placeholder="Número de tarjeta de crédito"
                  className="form-control my-2"
                  style={{border: "1px solid"}}
                  ></input>
          </div>
          <div className="name-input d-flex justify-content-center col-12">
                  <input
                      name="name"
                      type="text"
                      placeholder="Nombre"
                      className="form-control my-2"
                      style={{border: "1px solid"}}
                      ></input>
          </div>
          <div className="fecha-input d-flex justify-content-center col-6">
                  <input
                      name="fecha"
                      type="text"
                      placeholder="Fecha caducidad"
                      className="form-control my-2"
                      style={{border: "1px solid"}}
                      ></input>
          </div>
          <div className="cvc-input d-flex justify-content-center col-6">
                  <input
                      name="cvc"
                      type="number"
                      placeholder="CVC"
                      className="form-control my-2"
                      style={{border: "1px solid"}}
                      ></input>
          </div>
          <div className="row tarjeta d-flex col-12">
            <img src={tarjeta} width="320px" height="180px" />
          </div>
                 
        <Link to="/"><button className="btn btn-success mb-4 mt-4 col-12" onClick={alerta}> Pagar </button></Link> 
        
        
      </form>
  </div>    

  );
              
}



export default Pago; 