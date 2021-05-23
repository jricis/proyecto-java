import React, { useEffect, useState } from 'react'
import { getRestProducts } from "./../../FuncionesApi/GetRest"
import { useParams } from 'react-router-dom';
import OnlyOneProduct from './OnlyOneProduct'
import { Link } from 'react-router-dom';

const AmountProducto = () => {
    const [productos, setProductos] = useState([])
    const { data } = useParams();
    useEffect(() => {
        let mounted = true;
        console.log(data)
        getRestProducts(data)
            .then(listaproductos => {
                if (mounted) {
                    console.log(listaproductos.data)
                    setProductos(listaproductos.data)

                }
            })
        console.log(productos)
        return () => mounted = false

    }, [])

    return (
        <div>
            <button class="btn botones-nav m-2 me-2" >
                <Link to={"/addproductrestaurant/" + data} style={{ color: 'white' }}>
                    Añadir producto</Link>
            </button>

            <div className="row card-deck col-12 m-3">

            { productos.map(producto => (
                <OnlyOneProduct producto={producto}></OnlyOneProduct>
            ))
            }
            </div>
        </div>
    )
}

export default AmountProducto