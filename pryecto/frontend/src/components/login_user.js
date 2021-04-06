import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

    const LoginUser = () =>{

        const [user,useUser]= useState({
            email:"",
            password:"",
         
        })


        const handleChangeEmail=(e)=>{
            useUser({...user,email:e.target.value})
            }

        
    
        const handleChangePassword=(e)=>{
            useUser({...user,password:e.target.value})
            }


    
    
        const {register, errors, handleSubmit} = useForm();


        const onSubmit = (data, e) =>{
            console.log(data);
            e.preventDefault();
            useUser({
                ...user,
                data

            })
            console.log(user.data)

            try{
                const{data}= axios.post(
                    "http://127.0.0.1:8000/api/restaurant/",
                    {
                        email : user.email,
                        password: user.adress,
                    
                    }
                )
            }catch (error){
                console.log(error)
            }
        
            
        }

       return(
        <div className="body-form">
            <div className="container h-100">
                <div className="d-flex justify-content-center h-100">
                    <div className="login-user">
                        <div className="login-title d-flex justify-content-center">
                            <p>Iniciar sesión</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center formulario">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className= "d-flex justify-content-center row position-absolute top-50 start-50 translate-middle">
                                <div className="email-input d-flex justify-content-center row col-8">
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
                                <div className="password-input d-flex justify-content-center row col-8">
                                    <input
                                        name="password"
                                        type="password"
                                        placeholder="🔐  Contraseña"
                                        className="form-control my-2"
                                        onChange={handleChangePassword}
                                        ref={register()}
                                        ></input>
                                        { errors.password &&
                                        <span className="text-danger text-small d-block mb-2">
                                        {errors.password.message}
                                        </span>
                                        }
                                </div>
                                    <div className="remember-me justify-content-center row position-absolute top-50 start-50 translate-middle">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox"/>
                                            <label for="customControlInline">&nbsp;Remember me</label>
                                        </div>
                                    </div>
                                    <div class="no-account justify-content-center row position-absolute top-100 start-50 translate-middle">
                                        <div class="d-flex justify-content-center links">
                                                ¿No tienes cuenta? <a href="#" class="ml-2">&nbsp;Regístrate</a>
                                        </div>
                                        <div class="d-flex justify-content-center links">
                                            <a href="#">¿Olvidaste la contraseña?</a>
                                        </div>
                                    </div>
                                <button onClick={handleSubmit} className="btn btn-primary col-7"> Log in </button>   
                            </div>    
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
            


            );
                        
}



export default LoginUser; 