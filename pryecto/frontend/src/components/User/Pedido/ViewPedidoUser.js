import React, { useState, useEffect } from 'react';

const ViewPedidoUser = () => {
    return (
        <div className="d-flex offset-xl-4 col-xl-6 col-sm-12 register-user" style={{ width: "30%" }}>
            <div className="m-2 col justify-content-left">
                <h3 className="text-center">Tus pedidos</h3>
                <p className="font-weight-bold text-center ml-1 row col">
                    Pedidos:<br />
                    Correo: <br />
                    Telefono: <br />
                    Dirección:<br />
                </p>
            </div>
        </div>
    )
}
export default ViewPedidoUser