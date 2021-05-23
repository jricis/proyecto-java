import React from 'react';
import agregar from '../../../../imagenes/+.png';
import quitar from '../../../../imagenes/-.png';

const ViewProduct = (producto) => {



    return (
        //tarjeta por cada producto para añadirlo al "carrito"



        <div class="card col-12 col-xl-3 mb-3 col-md-12 col-sm-12">
            <img class="card-img-top" style={{ width: "100%", height: "50%" }} src={producto.producto.imagen} alt={producto.producto.name} />
            <div class="card-body text-center">
                <h5 class="card-title"><strong>{producto.producto.name} </strong></h5>
                <h5 class="card-text text-center text"><strong>{producto.producto.price}<small><sup>€</sup></small></strong></h5>
                <p class="card-text text-center text">{producto.producto.description}</p>
            </div>
            <div class="card-footer row bg-white">
                <img src={agregar} className="col-3" />
                <img src={quitar} className="col-3 offset-md-6" />
            </div>
        </div>





    );
}

export default ViewProduct;