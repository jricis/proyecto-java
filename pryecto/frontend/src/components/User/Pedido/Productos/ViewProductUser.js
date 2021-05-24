import React, { useState, useEffect } from 'react';
import Cookies from "universal-cookie";
import { searchProduct } from '../../../FuncionesApi/ComproveCookie'
import { countProduct } from '../../../FuncionesApi/ComproveCookie'

const cookies = new Cookies();

const ViewProduct = (producto) => {
    if (cookies.get('carrito') == undefined) {
        cookies.set('carrito', [], { path: '/' })
    }

    var productos = cookies.get("carrito")
    const [unidades, setUnidades] = useState(countProduct(productos, 0, producto.producto.id, 0))

    const addProduct = () => {
        var productos = cookies.get("carrito")
        var productorestaurante = {
            idrestaurante:producto.producto.id_restaurant,
            id:producto.producto.id
        }
        productos.push(productorestaurante)
        cookies.set('carrito', productos, { path: "/" })
        console.log(cookies.get('carrito'))
        countProductHtml()
    }

    const deleteProduct = () => {
        var productos = cookies.get("carrito")
        var iproduct = searchProduct(productos, 0, producto.producto.id)
        console.log(iproduct)
        if (iproduct != -1) {
            productos.pop(iproduct)
            cookies.set('carrito', productos, { path: "/" })
        }
        console.log(cookies.get('carrito'))
        countProductHtml()
    }


    const countProductHtml = () => {
        var productos = cookies.get("carrito")
        var count = countProduct(productos, 0, producto.producto.id, 0)
        setUnidades(count)


    }


    return (
        //tarjeta por cada producto para añadirlo al "carrito"



        <div class="card col-12 col-xl-3 mb-3 col-md-12 col-sm-12">
            <img class="card-img-top" style={{ width: "100%", height: "50%" }} src={producto.producto.imagen} alt={producto.producto.name} />
            <div class="card-body text-center">
                <h5 class="card-title"><strong>{producto.producto.name} </strong></h5>
                <h5 class="card-text text-center text"><strong>{producto.producto.price}<small><sup>€</sup></small></strong></h5>
                <p class="card-text text-center text">{producto.producto.description}</p>
            </div>
            <div class="card-footer row bg-white">
                <button className="bg-white col-xl-6" style={{ border: 0 }} onClick={addProduct}><h3>+</h3></button>
                <button className="bg-white col-xl-6" style={{ border: 0 }} onClick={deleteProduct}><h3>-</h3></button>
            </div>
            { unidades == 0
                ? null
                : <h2>Unidades : {unidades}</h2>
            }
        </div>





    );
}

export default ViewProduct;