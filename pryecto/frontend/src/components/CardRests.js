import React, {Fragment, useEffect, useState} from 'react'

import CardRest from './CardRest'

const GetRest= (lista) =>{
    //GET
    const [restaurantes, setRestaurantes] = useState([])
    useEffect(async() =>{
        
       setRestaurantes(lista)
       console.log(restaurantes)
    },[])
   
    return (
        
        <div>
            <h3>Restaurante</h3>
              { lista.map(restaurante => ( 
               <div key = {restaurante.id}>
                   <CardRest props = {restaurante}></CardRest>
                   </div>
           ))}
      </div>

       );

    }


export default GetRest;