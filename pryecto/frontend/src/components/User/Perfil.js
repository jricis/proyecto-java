

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getRestRiderWithUser, getRestUsuari } from '../FuncionesApi/GetRest'
import AmountUser from './AmountUser';
import AmountPedidoUser from './Pedido/AmountPedidoUser'

import axios from 'axios'
const Perfil = () => {
    const { data } = useParams()

    const [usuario, setUsuario] = useState({
        nombre: "",
        surname: "",
        email: "",
        postalcode: "",
        city: "",
        phone: "",
        password: "",
        birthday: "",

    })

    useEffect(() => {
        let mounted = true;
        console.log(data)
        if (mounted) {
            axios.get("https://multifood.me/api/user/" + data + "/?format=json")
                .then(user_data => {
                    if (user_data.status == 200) {
                        if (mounted) {
                            setUsuario(user_data.data)
                        }
                    }
                })
        }






        return () => mounted = false

    }, [])






    return (
        <div className="container ">
            <h1 className="mb-4">¡Hola, {usuario.name}!</h1>

            <div className="row d-flex  col-12">
                <div className="d-flex justify-content-center" style={{ width: "100%", height:"50%" }}>

                    <AmountUser usuario={usuario}></AmountUser>
                </div>

                <div className="m-2 col justify-content-center" style={{ width: "40%" }}>
                    <div className="row d-flex justify-content-center">
                        <AmountPedidoUser></AmountPedidoUser>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Perfil;