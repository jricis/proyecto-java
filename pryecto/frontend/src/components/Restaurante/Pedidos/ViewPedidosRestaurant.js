// No finalizados y mas de uno
// Numero de pedido
// Productos
import React, { useEffect, useState } from 'react'

const ViewPedidosRestaurant = () => {

    // useEffect(async () => {
    //     let mounted = true
    //     if (mounted) {

    //     }
    //     return () => mounted = false
    // }, [])
    return (
        <div>
            <div className="container">
                <div className="row mt-5 justify-content-around">
                    <div className="d-flex col-6 register-user" style={{ width: "30%" }}>
                        <div className="m-2 col justify-content-left">
                            <p className="font-weight-bold text-center ml-1 row col-12">Usuario: </p>
                            <p className="font-weight-bold text-center ml-1 row col-12">Correo:</p>
                            <p className="font-weight-bold text-center ml-1 row col-12">Fecha nacimiento:</p>
                            <p className="font-weight-bold text-center ml-1 row col-12">Ciudad: </p>
                            <p className="font-weight-bold text-center ml-1 row col-12">Vehículo:</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ViewPedidosRestaurant
