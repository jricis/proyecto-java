import React,{useState,useEffect} from 'react';
import ViewProductPedido from './ViewProductPedido'
import Cookies from "universal-cookie";
import {returnProductsSameRestaurant, countProduct} from '../../FuncionesApi/ComproveCookie'
import {getRestProduct,getRestRestaurantWithId} from '../../FuncionesApi/GetRest'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import tarjeta from '../../imagenes/tarjeta.png';

const cookies = new Cookies();
const Pago = () => {
  const {data}=useParams()
  const [productos,setProductos] = useState([])
  const [pedidos,setPedidos]=useState([])
 
useEffect(()=>{
 getPedidos()
  getProductos()
},[])
const getPedidos=()=>{
  const pedidos = []
  const listaProductos = new Array(cookies.get("carrito"))
  console.log(listaProductos[0])
  const distinctRestaurantes = [... new Set(listaProductos[0].map(x=>x.idrestaurante))]
  distinctRestaurantes.map(restaurante=>{
    var demanda = {
      idrestaurante:restaurante,
      productos: returnProductsSameRestaurant(listaProductos[0],0,restaurante,[])
    }
    pedidos.push(demanda)
    
  })
  setPedidos(pedidos)
}

const getProductos=()=>{
  const listaProductos =new Array(cookies.get("carrito"))
  const distinctProductos = [... new Set(listaProductos[0].map(x=>x.id))]
  console.log(distinctProductos)
   distinctProductos.map(product=>{
 
   getRestProduct(product)
   .then(res=>{
    
      if(res.status==200 ){
        getRestRestaurantWithId(res.data.id_restaurant)
        .then(rest=>{
          if(rest.status==200){
            var producto = {
              productoCompleto:res.data,
              unidades: countProduct(listaProductos[0],0,product,0),
              nombreRest: rest.data.name
              }
              
           setProductos(productos=>[...productos,producto])
          
            }   
          })
        
        }
         
   })  
  
   
  })
}
 function getPricePedido(pedido) {
  var precio=0
 
  pedido.productos.map(producto=>{
    precio+=parseFloat(producto.price)
  })
 return precio
 
}
const getTotalPrice=()=>{
  var precio=0
  productos.map(producto=>{
    precio+=(producto.productoCompleto.price*producto.unidades)
    
  })
  return precio
}

const pagar=async ()=>{
  var final=0
 axios.post("https://multifood.me/api/pedido/",
 {
   user:data
 }
 )

 .then(res=>{
   if(res.status==201){
    var idpedido=res.data.id
    pedidos.map(pedido=> {
    axios.get("https://multifood.me/api/pedidos/")
      .then(ped=>{
        
        var numpedido= Math.floor((Math.random() * 4294967295) + 1);
        console.log(numpedido)
        var precio=0
        precio = getPricePedido(pedido)
        var entregado = false
        var pagado = true
        var restaurants = pedido.idrestaurante
        var products = pedido.productos.map(x=>x.idproduct)
       console.log(products)
        var estado = "recibida la solicitud de pedido"
        axios.get("https://multifood.me/api/rider/")
        .then(rider=>{
          console.log(rider.data[0].id)
          axios.post("https://multifood.me/api/pedidos/",{
           
            num_pedidos: numpedido,
            total_price: precio,
            entregado: entregado,
            estado: estado,
            pagado: pagado,
            restaurants: restaurants,
            id_pedido: idpedido,
            products: products,
            rider:rider.data[0].id
          })
          .then(res=>{
            console.log(res)
           
          })
        })
       
        
      })
    })
   }
 })
 setTimeout(() => {
    cookies.remove('carrito')
    window.location.href='/perfil/'+data;
}, 2000);
 
}



  return (
    <div className="container">
      {/* Card de pedido */}
      <div className="row mt-5 justify-content-between">
        <div className="row d-flex register-user" style={{ width: "40%" }}>
          <div className="fs-2 fw-bold mt-3">
            <p>Tu pedido</p>
          </div>
        
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">Producto</th>
                <th scope="col">Unidades</th>
                <th scope="col">Precio</th>
                <th scope="col">Restaurante</th>
              </tr>
            </thead>
            <tbody>
              {productos.map(producto=>(
                <ViewProductPedido producto={producto}></ViewProductPedido>
              ))}
               
            </tbody>
          </table>
          <div className="fs-4 fw-bold mt-3">
            <p>Total a pagar: {getTotalPrice()}    </p>
        </div>
        </div>
        
        {/* Card de pago */}
        <div className="d-flex row col-6 register-user" style={{ width: "40%" }}>
          <div>
            <p className="fs-2 fw-bold mt-3">Pago tarjeta</p>
          </div>
          <div className="m-2 col justify-content-left">
            <div className="row d-flex justify-content-center formulario">
              <div className="row card-input d-flex justify-content-center col-12">
                <input
                  name="card-number"
                  type="number"
                  placeholder="Número de tarjeta de crédito"
                  className="form-control my-2"
                  style={{ border: "1px solid" }}
                ></input>
              </div>
              <div className="name-input d-flex justify-content-center col-12">
                <input
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  className="form-control my-2"
                  style={{ border: "1px solid" }}
                ></input>
              </div>
              <div className="fecha-input d-flex justify-content-center col-6">
                <input
                  name="fecha"
                  type="text"
                  placeholder="Fecha caducidad"
                  className="form-control my-2"
                  style={{ border: "1px solid" }}
                ></input>
              </div>
              <div className="cvc-input d-flex justify-content-center col-6">
                <input
                  name="cvc"
                  type="number"
                  placeholder="CVC"
                  className="form-control my-2"
                  style={{ border: "1px solid" }}
                ></input>
              </div>

              <button className="btn btn-success mb-4 mt-4 col-12" onClick={pagar}> Pagar </button>


            </div>

          </div>

        </div>
      </div>
    </div>
  );

}



export default Pago;