import React from 'react';
// import agregar from '../../../../imagenes';

const ViewProduct = (producto) => {

    

    return (
    //tarjeta por cada producto para añadirlo al "carrito"
        <div className="container">
           
            <div className="row">
                <div className="col-6 me-2">
                    <div class="card p-2" style={{width: "18rem"}}>
                            <div class="card-body">
                            <img src={producto.producto.imagen} className/>
                            <p class="card-text">{producto.producto.name}   <small>{producto.producto.price}€</small></p>
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>
        
   

    );
}

export default ViewProduct;