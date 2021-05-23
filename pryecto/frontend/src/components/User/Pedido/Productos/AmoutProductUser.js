import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getRestProducts} from '../../../FuncionesApi/GetRest'
import ViewProduct from './ViewProductUser'
const AmountProductUser =()=>{
    const[productos,setProductos]=useState([])
    const [datos,setDatos]=useState({
        nombre:"",
        id:""
    })
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
        <div>
            <h2 className="fw-bold"> {data.split("nombre-")[1]} </h2>
            {productos.map(producto=>(
                <ViewProduct producto={producto}></ViewProduct>
            ))}
        </div>
    )
}

export default AmountProductUser