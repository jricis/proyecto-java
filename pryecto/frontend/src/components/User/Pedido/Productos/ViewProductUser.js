import React from 'react';
// import agregar from '../../../../imagenes';

const ViewProduct = () => {

    

    return (
    //tarjeta por cada producto para añadirlo al "carrito"
        <div className="container">
            <div>
                <h2 className="fw-bold"> "Poner Nombre del restaurante" </h2>
            </div>
            <div className="row">
                <div className="col-6 me-2">
                    <div class="card p-2" style={{width: "18rem"}}>
                            <div class="card-body">
                            <p class="card-text">Producto + precio</p>
                            <button><img src='../../../../imagenes/agregar.png' width="30" height="30"/></button>
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>
        
   

    );
}

export default ViewProduct;