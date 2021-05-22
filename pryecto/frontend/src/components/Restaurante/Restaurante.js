import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { comproveRestaurant, comproveUser , comproveRider} from '../FuncionesApi/ComproveCookie';
import {getRestRestaurantWithId} from '../FuncionesApi/GetRest'
import AmountRestaurante from './AmountRestaurante'
import Cookies from 'universal-cookie'


const Restaurante=()=>{
    const cookies = new Cookies()
    const {data} = useParams();
    const [restaurante,setRestaurante]= useState({
        name:"",
        email:"",
        phone:"",
        adress:"",
        city:"",
        postalcode:"",
        description:"",
        imagen: null
    })

    useEffect(()=>{
        
       if(comproveUser()!=undefined){
          console.log(comproveUser())
        }
       if(comproveRestaurant()==undefined){
            console.log(cookies.get('idrestaurante'))
        }
        if(comproveRider()!=undefined){
            console.log(comproveRider())
        }
        let mounted = true;
        console.log(data)
        if(mounted){
            getRestRestaurantWithId(data)
            .then(response=>{
                if(response.status==200){
                    setRestaurante(response.data)
                }
            
            })
               
        }

    },[])
    return (
        <div id="miPerfil">
            <AmountRestaurante restaurante={restaurante}></AmountRestaurante>
        </div>
    );
}

export default Restaurante