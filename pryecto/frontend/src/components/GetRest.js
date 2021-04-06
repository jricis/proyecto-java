import React, {Fragment, useEffect, useState} from 'react'
import axios from 'axios'
import CardRests from './CardRests'

const GetRest= () =>{
    //GET
    const [restaurantes, setRestaurantes]= useState([null])

    useEffect(async() =>{
        const consulta = await axios("http://127.0.0.1:8000/api/restaurant/");
        console.log(consulta)
       setRestaurantes(consulta.data)
    },[])

   
    return (
        
        <div>
          <CardRests lista = {restaurantes}></CardRests>
      </div>
  
       );

    }


export default GetRest;