import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Restaurante from '../Restaurante/Restaurante';

// import tarjeta from '../../imagenes/tarjeta.png';


const Pago = () => {

  const alerta = () => {
    alert("Ha pagado correctamente")
  }

  return (
    <div className="container">
      {/* Card de pedido */}
      <div className="row mt-5 justify-content-between">
        <div className="row d-flex register-user" style={{ width: "40%" }}>
          <div className="fs-2 fw-bold mt-3">
            <p>Tu pedido</p>
          </div>
        
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Producto1</td>
                <td>Precio1</td>
              </tr>
              <tr>
                <td>Producto2</td>
                <td>Precio2</td>
              </tr>
            </tbody>
          </table>
          <div className="fs-4 fw-bold mt-3">
            <p>Total a pagar:     </p>
        </div>
        </div>
        
        {/* Card de pago */}
        <div className="d-flex row col-6 register-user" style={{ width: "40%" }}>
          <div>
            <p className="fs-2 fw-bold mt-3">Pago tarjeta</p>
          </div>
          <div className="m-2 col justify-content-left">
            <form className="row d-flex justify-content-center formulario">
              <div className="row card-input d-flex justify-content-center col-12">
                <input
                  name="card-number"
                  type="number"
                  placeholder="Número de tarjeta de crédito"
                  className="form-control my-2"
                  style={{ border: "1px solid" }}
                ></input>
              </div>
              <div className="name-input d-flex justify-content-center col-12">
                <input
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  className="form-control my-2"
                  style={{ border: "1px solid" }}
                ></input>
              </div>
              <div className="fecha-input d-flex justify-content-center col-6">
                <input
                  name="fecha"
                  type="text"
                  placeholder="Fecha caducidad"
                  className="form-control my-2"
                  style={{ border: "1px solid" }}
                ></input>
              </div>
              <div className="cvc-input d-flex justify-content-center col-6">
                <input
                  name="cvc"
                  type="number"
                  placeholder="CVC"
                  className="form-control my-2"
                  style={{ border: "1px solid" }}
                ></input>
              </div>

              <Link to="/home"><button className="btn btn-success mb-4 mt-4 col-12" onClick={alerta}> Pagar </button></Link>


            </form>

          </div>

        </div>
      </div>
    </div>
  );

}



export default Pago;