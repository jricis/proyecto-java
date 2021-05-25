import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {getRestProduct} from '../../FuncionesApi/GetRest'
import ViewPedidoUser from './ViewPedidoUser'

const AmountPedidoUser =()=>{
    const {data}= useParams()
    const [productos,setProductos]=useState([])

    useEffect(()=>{
        let mounted = true;
        if(mounted){
            axios.get("https://multifood.me/api/pedido/?format=json&&user="+data)
            .then(res=>{
                const pedidoActual= res.data[res.data.length-1]
                console.log(pedidoActual)
               
                const productos=[]
                pedidoActual.pedidos.map(pedido=>{
                    pedido.products.map(product=>{
                      var producto=  getRestProduct(product)
                      .then(pr=>{
                          setProductos(productos=>[...productos,pr.data])
                      })
                   
                    })
                })
              
            })
        }
    },[])

    return(

      <div className="row mt-5 justify-content-center">
      <div className="row d-flex register-user" style={{ width: "40%" }}>
        <div className="fs-2 fw-bold mt-3">
          <p>Tu pedido</p>
        </div>
            {
                productos.length==0
                ? <h1> No hay pedidos actuales</h1>
                : <table className="mb-4">
                <thead>
                   <tr>
                     <th scope="col">Producto</th>
                     <th scope="col">Precio</th>
                   </tr>
                 </thead>
                 <tbody>
                   {
                    productos.map(producto=>(
                     <ViewPedidoUser prod={producto}></ViewPedidoUser>
                   ))}
                   
                   
                  
                    
                 </tbody>
                 </table>
            }
          
       </div>
       </div>
    )
}

export default AmountPedidoUser