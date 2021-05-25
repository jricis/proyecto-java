import React from 'react';


const ViewProductPedido=(producto)=>{
    

    return (
       
        <tr>
                <td>{producto.producto.productoCompleto.name}</td>
                <td>{producto.producto.unidades}</td>
                <td>{(parseFloat(producto.producto.productoCompleto.price)*producto.producto.unidades)} €</td>
                <td>{producto.producto.nombreRest}</td>

                
        </tr>
          
              
    )
}

export default ViewProductPedido