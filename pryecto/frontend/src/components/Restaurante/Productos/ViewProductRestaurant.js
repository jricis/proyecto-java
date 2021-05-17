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
        // añadir que la carta sea clicable y que vaya al restaurante pero con vista de usuario.
                    <div class="card col-2" style={{margin:"5px", padding:"0px"}}>
                        <img class="card-img-top" style={{width:"100%",height:"50%"}} src="" alt=""/>
                        <h5 class="card-title">Nombre del producto</h5>
                            <p class="card-text text">Descripción de producto</p>
                    </div>
                );
        
        };
export default ViewProductRestaurant;