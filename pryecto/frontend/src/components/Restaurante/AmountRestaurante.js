import React from 'react';
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom';
const AmountRestaurante= (restaurante) => {


    return (
            <div className="container">
                <h1>{restaurante.restaurante.name}</h1>
                <div className="row mt-5 justify-content-between">
                    <div className="d-flex col-6 register-user" style={{width:"30%"}}>
                        <div className="m-2 col justify-content-left">
                            <p className="font-weight-bold text-center ml-1 row col-4">Correo: {restaurante.restaurante.email}</p>
                            <p>Nombre: {restaurante.restaurante.name}</p>
                            <p>Ciudad: {restaurante.restaurante.city}</p>
                            <p>Telefono: {restaurante.restaurante.phone}</p>
                        </div>
                    </div>
                    <div className="d-flex col-6 register-user" style={{width:"30%"}}>
                        <div className="m-2 col justify-content-left">
                            <p className="font-weight-bold text-center ml-1 row col-4">Mis Pedidos</p>
                            <p>poner todos los datos del los pedidos</p>
                            <p>poner todos los datos del los pedidos</p>
                            <p>poner todos los datos del los pedidos</p>
                        </div>
                    </div>
                    <button class="btn botones-nav me-2" ><Link to={"/home/ViewProductRestaurant/"+restaurante.restaurante.id} style={{color:'white'}}>Mi carta</Link></button>
                    <button class="btn botones-nav me-2" ><Link to={"/home/ViewProductRestaurant/"+restaurante.restaurante.id} style={{color:'white'}}>Añadir productos</Link></button>
                </div>
            </div>
    );

}
export default AmountRestaurante; 