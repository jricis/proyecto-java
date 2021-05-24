import React, { useEffect, useState } from 'react'
import fotoperfil from '../../imagenes/perfil.jpg'

const AmountUser = (usuario) => {

    useEffect(async () => {
        let mounted = true
        if (mounted) {
        }
        return () => mounted = false
    }, [])

    return (
        <div className="d-flex col-xl-4 col-sm-12 register-user" style={{ width: "30%" }}>
            <div className="row d-flex m-2 justify-content-center ">
                <img className="w-75 h-75" src={fotoperfil} />
                <p className="fw-bold text-left ml-1 row col-12">
                    Usuario: {usuario.usuario.name} {usuario.usuario.surname}<br />
                    Correo: {usuario.usuario.email}<br />
                    Telefono: {usuario.usuario.phone}<br />
                    Dirección: {usuario.usuario.adress}<br />
                </p>
            </div>
        </div>
    )
}
export default AmountUser