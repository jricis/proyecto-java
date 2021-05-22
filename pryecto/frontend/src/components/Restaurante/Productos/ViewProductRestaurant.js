import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const ViewProductRestaurant = () => {
    
    return (
        <div>
        //FIJO EN LA PÁGINA
        <button class="btn botones-nav me-2" >
            <Link to={"/home/AddProductRestaurant/"+restaurante.restaurante.id} style={{color:'white'}}>
                Mi carta</Link>
                </button>
        
        // FIN FIJO EN LA PÁGINA
                    <div class="card col-2" style={{margin:"5px", padding:"0px"}}>
                        <img class="card-img-top" style={{width:"100%",height:"50%"}} src="" alt=""/>
                        <h5 class="card-title">Nombre del producto</h5>
                            <p class="card-text text">Descripción de producto</p>
                    </div>
        </div>
                );
        
        };
export default ViewProductRestaurant;