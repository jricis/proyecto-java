import React, {Fragment, useEffect, useState} from 'react'
import CardRest from './CardRest'
import { getRestRestaurant} from '../FuncionesApi/GetRest'
import { Link } from 'react-router-dom'

const CardRests= () =>{
    const [restaurantes,setRestaurantes]= useState([])
    
  useEffect(()=>{
    let mounted = true;
    getRestRestaurant()
    .then(restaurante=>{
        if(mounted){
            setRestaurantes(restaurante)
          
        }
        
    })
    console.log(restaurantes)
    return ()=>mounted = false
    
    },[])
    return (
       
        <div>
           <div class="row card-deck col-12 m-3" style={{border:"0"}} id="restaurantes">
              { restaurantes.map(restaurante => ( 
                  <CardRest props={restaurante}></CardRest>
           ))} 
           </div>

      </div>
       );

    }


export default CardRests;