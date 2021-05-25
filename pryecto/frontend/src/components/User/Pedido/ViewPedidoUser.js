import React, { useState, useEffect } from 'react';

const ViewPedidoUser = () => {
    return (
        <div className="d-flex offset-xl-4 col-xl-6 col-sm-12 register-user" style={{ width: "30%" }}>
            <div className="m-2 col justify-content-left">
                <h3 className="text-center">Tus pedidos</h3>
                <table class="table table-borderless">
                    <thead>
                        <th scope="col">Producto</th>
                        <th scope="col">Unidades</th>
                        <th scope="col">Estado</th>
                    </thead>
                    <tbody>
                        <tr>
                            {/* Producto */}
                            <td>{producto.producto.productoCompleto.name}</td>
                            {/* Cantidad */}
                            <td>{producto.producto.unidades}</td>
                            {/* Estado */}
                            <td>{producto.producto.estado}</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}
export default ViewPedidoUser