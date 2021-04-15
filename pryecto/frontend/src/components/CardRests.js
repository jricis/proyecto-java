import React, {Fragment, useEffect, useState} from 'react'
import CardRest from './CardRest'
import {getRest} from './GetRest'

const CardRests= () =>{
    const [restaurantes,setRestaurantes]= useState([])
    
  useEffect(()=>{
    let mounted = true;
    getRest()
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
      </div>

       );

    }


export default CardRests;