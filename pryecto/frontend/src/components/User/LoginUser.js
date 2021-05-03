import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const LoginUser = () => {

    const [user, useUser] = useState({
        email: "",
        password: "",

    })


    const handleChangeEmail = (e) => {
        useUser({ ...user, email: e.target.value })
    }



    const handleChangePassword = (e) => {
        useUser({ ...user, password: e.target.value })
    }

    const { register, errors, handleSubmit } = useForm();


    const onSubmit = (data, e) => {
        console.log(data);
        e.preventDefault();
        useUser({
            ...user,
            data
        })
        console.log(user.data)

        try {
            const { data } = axios.post(
                "http://127.0.0.1:8000/api/restaurant/",
                {
                    email: user.email,
                    password: user.adress,
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    return (


        <div className="container d-flex justify-content-center">
            <div className="row  register-user" style={{ width: "40%" }}>
                <div className="mt-4 d-flex justify-content-center">
                    <p className="fs-2 fw-bolder">Iniciar sesión</p>
                </div>
                <form className="row d-flex justify-content-center formulario" onSubmit={handleSubmit(onSubmit)}>                            <div className="email-input d-flex justify-content-center row col-8">
                    <div className="email-input d-flex justify-content-center col-12">
                        <input
                            name="email"
                            placeholder="📧  Email"
                            className="form-control my-2"
                            style={{ border: "1px solid" }}
                            onChange={handleChangeEmail}
                            ref={register()}
                        ></input>
                        {errors.email &&
                            <span className="text-danger text-small d-block mb-2">
                                {errors.email.message}
                            </span>
                        }
                    </div>
                    <div className="password-input d-flex justify-content-center col-12">
                        <input
                            name="password"
                            type="password"
                            placeholder="🔐  Contraseña"
                            className="form-control my-2"
                            style={{ border: "1px solid" }}
                            onChange={handleChangePassword}
                            ref={register()}
                        ></input>
                        {errors.password &&
                            <span className="text-danger text-small d-block mb-2">
                                {errors.password.message}
                            </span>
                        }
                    </div>
                    <div className="remember-me row d-flex justify-content-center col-12">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" />
                            <label for="customControlInline">&nbsp;Remember me</label>
                        </div>
                    </div>
                    <div class="row mt-3 g-3 d-flex col-12">
                        <Link to="/home/RegistroUser">Registrate</Link>
                        <a className="row col-12" href="#">¿Olvidaste la contraseña?</a>
                        <Link to="/home/LoginRider">Inicio sesión 🛵</Link>
                    </div>
                    <button onClick={handleSubmit} className="btn btn-primary mb-4 mt-4 col-5 row"> Log in </button>
                </div>
                </form>
            </div>
        </div>





    );

}



export default LoginUser; 