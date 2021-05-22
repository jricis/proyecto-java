import React from 'react';
import añadir from '../../imagenes/boton-agregar.png';

const ViewProduct = () => {

    

    return (
    
        <div className="container">
            <div>
                <h2 className="fw-bold"> "Poner Nombre del restaurante" </h2>
            </div>
            <div className="row">
                <div className="col-6 me-2">
                    <div class="card p-2" style={{width: "18rem"}}>
                            <div class="card-body">
                            <p class="card-text">Producto + precio</p>
                            <Link to=""><img src={añadir} width="30" height="30"/></Link>
                        </div>
                    </div>
                
                </div>
            </div>
            
        </div>
        
   

    );
}

export default ViewProduct;