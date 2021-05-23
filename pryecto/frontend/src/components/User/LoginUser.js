import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {setCookieUser} from '../FuncionesApi/ComproveCookie'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const LoginUser = () => {
    const [user,useUser] = useState({
        email:"",
        password:"",
    })

    const handleChangeEmail = (e) => {

        useUser({ ...user, email: e.target.value })
       
    }
 
    const handleChangePassword = (e) => {
        useUser({ ...user, password: e.target.value })
    }
    const logIn=()=>{
        if(!(user.email=="" || user.password=="")){
            axios.get("http://multifood.me/api/user/?email="+user.email)
            .then(res=>{
                console.log(res)
                if(res.status==200 && res.data.length==1){
                    if(res.data[0].password==user.password){
                        var id =res.data[0].id
                        console.log(id)
                        setCookieUser(id)
                        
                        window.location.href = "/"
                    }
                }
            })
        }
       
    }
    return (


        <div className="container d-flex justify-content-center col-xl-4 col-sm-12">
            <div className="row  register-user">
                <div className="mt-4 d-flex justify-content-center">
                    <p className="fs-2 fw-bolder">Iniciar sesión</p>
                </div>
                <div className="row d-flex justify-content-center formulario" >
                    <div className="email-input d-flex justify-content-center row col-8">
                    <div className="email-input d-flex justify-content-center col-12">
                        <input
                            name="email"
                            placeholder="📧  Email"
                            className="form-control my-2"
                            style={{ border: "1px solid" }}
                            onChange={handleChangeEmail}
                       
                        ></input>
                    
                        
                    </div>
                    <div className="password-input d-flex justify-content-center col-12">
                        <input
                            name="password"
                            type="password"
                            placeholder="🔐  Contraseña"
                            className="form-control my-2"
                            style={{ border: "1px solid" }}
                            onChange={handleChangePassword}
                         
                        ></input>
                       
                        
                    </div>
                    <div className="remember-me row d-flex justify-content-center col-12">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" />
                            <label for="customControlInline">&nbsp;Remember me</label>
                        </div>
                    </div>
                    <div class="row mt-3 g-3 d-flex col-12">
                        <Link to="/registrouser">Registrate</Link>
                        <a className="row col-12" href="#">¿Olvidaste la contraseña?</a>
                        <Link to="/loginrider">Inicio sesión 🛵</Link>
                    </div>
                    <button onClick={logIn} className="btn btn-primary mb-4 mt-4 col-5 row"> Log in </button>
                </div>
                </div>
            </div>
        </div>





    );

}



export default LoginUser; 