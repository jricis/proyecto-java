import React from 'react'
import { Link } from 'react-router-dom';
const ShowPedido=(pedido)=>{
    return (
        
        <div className="m-2 col justify-content-left">

        <div className="row d-flex justify-content-center formulario" >
                <div className="n-pedido d-flex justify-content-left col-12 mt-3">
                    <p>Nº pedido: {pedido.peddido.id}</p>
                </div>
                <div className="n-pedido d-flex justify-content-left col-12">
                    <p>Pedido: {}</p>
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