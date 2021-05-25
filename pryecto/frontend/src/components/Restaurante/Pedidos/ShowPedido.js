import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import ShowProducts from './showProducts';
import {getRestPedidosIdRestaurant,getRestProduct} from '../../FuncionesApi/GetRest'
const ShowPedido=(pedido)=>{

    const [productos,setProductos]=useState([])
    useEffect(() => {
      
            pedido.pedido.products.map(product=>{
              getRestProduct(product)
              .then(pro=>{
                setProductos(productos=>[...productos,pro.data])
              })
            })
    console.log(pedido)
    }, [])
    
    return (
        
        <div className="m-2 col justify-content-left">

        <div className="row d-flex justify-content-center formulario" >
                <div className="n-pedido d-flex justify-content-left col-12 mt-3">
                    <p>Nº pedido: {pedido.pedido.id}</p>
                </div>
                <div className="n-pedido d-flex justify-content-left col-12">
                <table>
                    
                    {productos.map(producto=>(
                        <ShowProducts producto={producto}></ShowProducts>
                    ))}
                    </table>
                </div>
                <div className="d-flex justify-content-left col-12">
                    <p>Estado del pedido &nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <select className="d-flex justify-content-left form-select-md col-8" aria-label="En Cocina">
                        <option selected>Cocina</option>
                        <option value="Recibido">Recibido</option>
                        <option value="Preparado">Preparado</option>
                        <option value="Entregado">Entregado</option>
                    </select>
                </div>
            </div>

        
         

      <Link to="/home"><button className="btn btn-success mb-4 mt-4 col-5"> Borrar pedido </button></Link>
      </div>
    )
}


export default ShowPedido
