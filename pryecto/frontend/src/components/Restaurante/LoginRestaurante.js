import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {setCookieRestaurant} from '../FuncionesApi/ComproveCookie'

const LoginRestaurante =()=>{
const [restaurante,useRestaurante]= useState({
   
    email:"",
    password:"",
    
})

   

    const     handleChangeEmail=(e)=>{
        useRestaurante({...restaurante,email:e.target.value})
        }

    const handleChangePassword = (e) => {
        useRestaurante({ ...restaurante, password: e.target.value })
    }    
    
const {register, errors, handleSubmit} = useForm();



    const logIn = () =>{
        console.log(restaurante.imagen)
        var formData = new FormData();
        formData.append('name', restaurante.name);
        formData.append('password',restaurante.password)
        
        console.log(formData)

        try{
            axios.get(
                "http://127.0.0.1:8000/api/restaurant/?email="+restaurante.email)               
            .then(res=>{
                console.log(res)
                if(res.status==200){
                    if(res.data.length==1){
                        if(res.data[0].password==restaurante.password){
                            setCookieRestaurant(res.data[0].id)
                            window.location.href="/home/Restaurante/"+res.data[0].id
                        }
                    }
                    //create cookie
                    // window.location.href="/home/Restaurante/"+res.data.id
                }
            })
        
        }catch (error){
            console.log(error)
        }
     


   

}
  
   
    return(

        <div className="container">
            <div className="body-form-rest row d-flex col-12"> 
            <div className="m-2" align="right">
            <div className="formulario row d-flex justify-content-center col register-user" style={{width:"40%"}}>
                        <p className="mt-4 fs-2 fw-bolder text-center">Asóciate con nosotros</p>
                    <div className="row d-flex justify-content-center formulario">
                    <div className="email-input d-flex-column justify-content-center  col-12">
                            <input
                                name="email"
                                placeholder="📧  Email"
                                className="form-control my-2"
                                onChange={handleChangeEmail}
                                ref={register()}
                            ></input>
                            { errors.email &&
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
                         
                        ></input>
                       
                        
                    </div>
                            <button onClick={logIn} className="btn btn-primary mb-4 mt-4 col-5 row"> Agregar </button>

                    </div>
                       
                </div>
            </div>
            </div>
        </div>
    

       );
                    
}


export default LoginRestaurante;