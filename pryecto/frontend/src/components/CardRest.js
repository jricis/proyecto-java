import React, {useEffect, useState} from 'react'
import axios from 'axios'


const CardRest = (props) =>{

    
    return (
    
    <div>
            
            <div class="row row-cols-1 row-cols-md-3 g-4" >
                <div class="col">
                    <div class="card h-100">
                    <img src={props.image} class="card-img-top" alt={props.name}/>
                    <div class="card-body">
                        <h5 class="card-title">{props.name}</h5>
                        <p class="card-text">{props.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div> 
            </div>
            
           
    
    </div>
    
    


        );

};


export default CardRest;