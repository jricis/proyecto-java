import React from 'react';
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import ShowPedido from './Pedidos/ShowPedido'
import AmountPedidos from './Pedidos/AmountPedidos'
const AmountRestaurante = (restaurante) => {


    return (
        <div className="container">
            <h1>{restaurante.restaurante.name}</h1>
            <div className="row mt-5 justify-content-between">
                <div className="d-flex col-6 register-user" style={{ width: "40%" }}>
                    <div className="m-2 col justify-content-left">
                        <p className="col-12 mt-4">
                        Nombre: {restaurante.restaurante.name}</p>
                        <p>Correo: {restaurante.restaurante.email}</p>
                        <p>Ciudad: {restaurante.restaurante.city}</p>
                        <p>Telefono: {restaurante.restaurante.phone}</p>
                    </div>
                    <div className="m-2 col-5 justify-content-left mt-5 ml-4">
                        <img src={restaurante.restaurante.imagen} style={{width: "90%"}}/>
                    </div>
                </div>
                <div className="d-flex col-6 register-user" style={{ width: "40%" }}>
                <AmountPedidos></AmountPedidos>
                </div>
            </div>
            <div className="mt-4 d-flex justify-content-center">


                <button class="btn botones-nav me-2"><Link to={"/viewproductrestaurant/" + restaurante.restaurante.id} style={{ color: 'white' }}>Mi carta</Link></button>
                <button class="btn botones-nav me-2" ><Link to={"/addproductrestaurant/"+restaurante.restaurante.id} style={{color:'white'}}>Añadir productos</Link></button>
            </div>
        </div>

    );

}
export default AmountRestaurante;