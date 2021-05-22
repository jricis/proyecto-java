import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link  } from "react-router-dom";
import agregar from '../../../imagenes/boton-agregar.png';
import kebab from '../../../imagenes/kebab.jpg';



const AddProduct = () => {

    const [product, setProduct] = useState(0);


    return (
    
        <div className="container">
            <div>
                <h2 className="fw-bold"> Funcion de Restaurante </h2>
            </div>
            <div className="row">
                <div className="col-6 me-2">
                    <div class="card p-2" style={{width: "18rem"}}>
                            <div class="card-body">
                            <img src = {kebab} width="235px" height="130px"/>
                            <p class="card-text">funcion precio</p>
                           
                            <img src={agregar} width="30" height="30" onClick={() => setProduct(product+1)}/>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
             <p> Se ha añadido {product} unidades al pedido</p>


        </div>


    );
}

export default AddProduct;