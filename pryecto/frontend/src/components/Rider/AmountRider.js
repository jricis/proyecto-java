import React, { useEffect, useState } from 'react';
import fotoperfil from '../../imagenes/perfil.jpg'

const AmountRider = (rider, usuario) => {

    useEffect(async () => {
        let mounted = true
        if (mounted) {

        }
        return () => mounted = false
    }, [])
    return (
    
            <div className="container">
                <div className="row mt-5 justify-content-around">
                    <div className="d-flex col-6 register-user" style={{ width: "30%" }}>
                        <div className="row d-flex m-2 mb-4 justify-content-center">
                            <img className="w-50 h-50" src={fotoperfil} />
                            <p className="fw-bold text-left ml-3 row col-12">Usuario: {rider.usuario.name} {rider.usuario.surname}</p>
                            <p className="fw-bold text-left ml-3 row col-12">Correo: {rider.usuario.email}</p>
                            <p className="fw-bold text-left ml-3 row col-12">Fecha nacimiento: {rider.usuario.birthday}</p>
                            <p className="fw-bold text-left ml-3 row col-12">Ciudad: {rider.usuario.city}</p>
                            <p className="fw-bold text-left ml-3 row col-12">Vehículo: {rider.rider.type_vehicle}</p>
                        </div>
                    </div>
                   

  
                    <div className="d-flex col-6 register-user" style={{ width: "30%" }}>
                        
                        <div className="m-2 col justify-content-left">
                            <p className="font-weight-bold text-center ml-1 row col-12">Nombre del cliente: {rider.usuario.name} {rider.usuario.surname}</p>
                            <p className="font-weight-bold text-center ml-1 row col-12">Dirección del cliente:{rider.usuario.email}</p>
                            <p className="font-weight-bold text-center ml-1 row col-12">Telefono del cliente:{rider.usuario.birthday}</p>
                            <p className="font-weight-bold text-center ml-1 row col-12">Id del pedido:{rider.usuario.city}</p>
                            <p className="font-weight-bold text-center ml-1 row col-12">Resturantes donde tiene que ir a buscar el pedido{rider.usuario.city}</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95777.02213481379!2d2.0787271678601877!3d41.39511268224575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a352efc1f34b%3A0x7446e5608fc06f9e!2sBurger%20King!5e0!3m2!1ses!2ses!4v1618336506559!5m2!1ses!2ses" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
                    </div>

                    {/* hasta aqui */}
                </div>
            </div>
    )
}
export default AmountRider