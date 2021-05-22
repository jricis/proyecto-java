import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {getRestPedidoIdRestaurant} from '../../FuncionesApi/GetRest'
import ShowPedido from './ShowPedido'

const AmountPedidos =()=>{
    const [pedidos,setPedidos] = useState([])
    const {data} =useParams()
    useEffect(()=>{
    getRestPedidoIdRestaurant(data)
      .then(listaPedidos=>{
        setPedidos(listaPedidos.data)
      })
       
    },[])
    
    return(
       <div>
           {pedidos.length==0
           ? <h1>No hay pedidos</h1>
           :pedidos.map(pedido=>(
               <ShowPedido pedido={pedido}></ShowPedido>
            ))
           
           }
       </div>
    )
    
}

export default AmountPedidos