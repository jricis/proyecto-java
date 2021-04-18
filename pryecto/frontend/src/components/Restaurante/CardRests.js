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
              <h1>RESTAURANTES</h1> 
            
            
           <div id="restaurantes">
              { restaurantes.map(restaurante => ( 
              <div id={restaurante.id}>
                  <CardRest props={restaurante}></CardRest>
              </div>
           ))} 
           </div>
           <Link to="/home/HomeRider">HomeRider</Link>
      </div>

       );

    }


export default CardRests;