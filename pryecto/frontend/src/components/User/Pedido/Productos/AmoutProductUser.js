import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getRestProducts} from '../../../FuncionesApi/GetRest'
import ViewProduct from './ViewProductUser'
const AmountProductUser =()=>{
    const[productos,setProductos]=useState([])
    const {data}=useParams()

    useEffect(()=>{
       const id_restaurant = data.split("nombre-")[0]
        getRestProducts(id_restaurant)
        .then(res=>{
            if(res.status==200){
                setProductos(res.data)            }
        })
      
    },[])

    return (
        <div className="container">
            <h2 className="fw-bold text-center"> {data.split("nombre-")[1]} </h2>
            <div class="card-deck row" style={{border:"0"}} id="restaurantes">
            {productos.map(producto=>(
                <ViewProduct producto={producto}></ViewProduct>
            ))}
            </div>
        </div>
    )
}

export default AmountProductUser