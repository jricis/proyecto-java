import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { setCookieRestaurant } from '../FuncionesApi/ComproveCookie';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import loginrestaurante from '../../imagenes/loginrestaurante.jpg';

const LoginRestaurante = () => {
    const [restaurante, useRestaurante] = useState({

        email: "",
        password: "",

    })



    const handleChangeEmail = (e) => {
        useRestaurante({ ...restaurante, email: e.target.value })
    }

    const handleChangePassword = (e) => {
        useRestaurante({ ...restaurante, password: e.target.value })
    }

    const { register, errors, handleSubmit } = useForm();



    const logIn = () => {
        console.log(restaurante.imagen)
        var formData = new FormData();
        formData.append('name', restaurante.name);
        formData.append('password', restaurante.password)

        console.log(formData)

        try {
            axios.get(
                "https://multifood.me/api/restaurant/?email=" + restaurante.email)
                .then(res => {
                    console.log(res)
                    if (res.status == 200) {
                        if (res.data.length == 1) {
                            if (res.data[0].password == restaurante.password) {
                                setCookieRestaurant(res.data[0].id)
                                window.location.href = "/restaurante/" + res.data[0].id
                            }
                        }
                    }
                })

        } catch (error) {
            console.log(error)
        }





    }


    return (

        <div className="container d-flex">
            <div className="row">
                <img src={loginrestaurante} width="1500px" height="600px" />
            </div>
            <div className="register-user">
                <div className="mt-4 d-flex justify-content-center">
                    <p className="fs-2 fw-bolder">Iniciar sesión</p>
                </div>
                <div className="row d-flex justify-content-center formulario">
                    <div className="email-input d-flex justify-content-center row col-8">
                    <div className="email-input d-flex justify-content-center mt-4 col-12">
                        <input
                            name="email"
                            placeholder="📧  Email"
                            className="form-control my-2"
                            onChange={handleChangeEmail}
                            ref={register()}>
                        </input>
                        {errors.email &&
                            <span className="text-danger text-small d-block mb-2">
                                {errors.email.message}
                            </span>
                        }

                    </div>
                    <div className="password-input d-flex justify-content-center mt-3 col-12">
                        <input
                            name="password"
                            type="password"
                            placeholder="🔐  Contraseña"
                            className="form-control my-2"
                            onChange={handleChangePassword}>
                        </input>


                    </div>
                    <div className="remember-me row d-flex justify-content-center mt-3 col-12">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" />
                            <label for="customControlInline">&nbsp;Remember me</label>
                        </div>
                    </div>
                    <div class="row mt-3 g-3 d-flex col-12">
                        <Link to="/registrorestaurante">Registrate</Link>
                        <a className="row col-12" href="#">¿Olvidaste la contraseña?</a>
                    </div>
                    <button onClick={logIn} className="btn btn-primary mb-5 mt-5 col-5 row"> Inicia sesión </button>
                </div>
            </div>
        </div>
        </div>



    );

}


export default LoginRestaurante;