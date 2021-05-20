import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {setCookieRestaurant} from '../FuncionesApi/ComproveCookie'

const RegistroRestaurant =()=>{
const [restaurante,useRestaurante]= useState({
   
    email:"",
    password:"",
    phone:"",
    adress:"",
    city:"",
    postalcode:"",
    description:"",
    imagen: null
})

    const handleChangeNombre=(e)=>{
            useRestaurante({...restaurante,name:e.target.value})
        }

    const     handleChangeEmail=(e)=>{
        useRestaurante({...restaurante,email:e.target.value})
        }

    const     handleChangePhone=(e)=>{
        useRestaurante({...restaurante,phone:e.target.value})
        }

    const     handleChangeadress=(e)=>{
        useRestaurante({...restaurante,adress:e.target.value})
        }

    const     handleChangeCity=(e)=>{
        useRestaurante({...restaurante,city:e.target.value})
        }

     const    handleChangePostalCode=(e)=>{
        useRestaurante({...restaurante,postalcode:e.target.value})
        console.log(restaurante.postalcode)
        }

    const     handleChangeDescription=(e)=>{
        useRestaurante({...restaurante,description:e.target.value})
        }
    
    const     handleChangeFile=(e)=>{
        useRestaurante({...restaurante,imagen:e.target.files[0]})

        }
        const handleChangePassword = (e) => {
            useRestaurante({ ...restaurante, password: e.target.value })
        }    
    
const {register, errors, handleSubmit} = useForm();



    const onSubmit = () =>{
        console.log(restaurante.imagen)
        var formData = new FormData();
        var fileField = document.getElementById("foto")
        formData.append('name', restaurante.name);
        formData.append('password',restaurante.password)
        formData.append('email', restaurante.email);
        formData.append('phone', restaurante.phone);
        formData.append('adress', restaurante.adress);
        formData.append('city', restaurante.city);
        formData.append('postalcode', restaurante.postalcode);
        formData.append('description', restaurante.description);
        formData.append('imagen', restaurante.imagen);
        console.log(formData)

        try{
            axios.post(
                "http://127.0.0.1:8000/api/restaurant/",formData)               
            .then(res=>{
                console.log(res)
                if(res.status==201 ){
                    setCookieRestaurant(res.data.id)
                    window.location.href="/home/Restaurante/"+res.data.id
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
                    <form className="row d-flex justify-content-center formulario" onSubmit={handleSubmit(onSubmit)}>
                        <div className="name-input d-flex justify-content-center col-12">
                            <input
                                name="name"
                                placeholder="Nombre Restaurante"
                                className="form-control my-2"
                                onChange={handleChangeNombre}
                                ref={register()}
                            ></input>
                            { errors.name &&
                            <span className="text-danger text-small d-block mb-2">
                            {errors.name.messages}
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
                        <div className="phone-input d-flex-column justify-content-center  col-12">
                            <input
                                name="phone"
                                placeholder="📱   Teléfono"
                                className="form-control my-2"
                                onChange={handleChangePhone}
                                ref={register()}
                            ></input>
                            { errors.phone &&
                            <span className="text-danger text-small d-block mb-2">
                            {errors.phone.messages}
                            </span>
                            }
                        </div>

                        <div className="adress-input d-flex-column justify-content-center  col-12">   
                            <input
                                name="adress"
                                placeholder="Dirección"
                                className="form-control my-2"
                                onChange={handleChangeadress}
                                ref={register()}
                                ></input>
                                { errors.adress &&
                                <span className="text-danger text-small d-block mb-2">
                                {errors.adress.message}
                                </span>
                                }
                        </div>
                        <div className="email-input d-flex-column justify-content-center  col-12">
                            <input
                                name="city"
                                placeholder="🏢   Ciudad"
                                className="form-control my-2"
                                onChange={handleChangeCity}
                                ref={register()}
                                ></input>
                                { errors.city &&
                                <span className="text-danger text-small d-block mb-2">
                                {errors.city.message}
                                </span>
                                }
                        </div>
                        <div className="postalcode-input d-flex-column justify-content-center  col-12">   
                            <input
                                name="postalcode"
                                placeholder="   Código Postal"
                                className="form-control my-2"
                                onChange={handleChangePostalCode}
                                ref={register()}
                                ></input>
                                { errors.postalcode &&
                                <span className="text-danger text-small d-block mb-2">
                                {errors.postalcode.message}
                                </span>
                                }
                        </div> 
                        <div className="description-input d-flex-column justify-content-center  col-12"> 
                            <input
                                name="description"
                                placeholder="📝   Descripción"
                                className="form-control my-2"
                                onChange={handleChangeDescription}
                                ref={register()}
                                ></input>
                                { errors.descripcion &&
                                <span className="text-danger text-small d-block mb-2">
                                {errors.description.message}
                                </span>
                                }
                        </div>
                        <div className="imagen-input d-flex-column justify-content-center  col-12"> 
                            <input type="file" 
                                name="imagen"
                                placeholder="📸   Insertar foto"
                                accept="image/png, image/jpeg"
                                className="form-control my-2"
                                id="foto"
                                onChange={handleChangeFile}
                                ref={register()}></input>
                                { errors.fotos &&
                                <span className="text-danger text-small d-block mb-2">
                                {errors.imagen.message}
                                </span>
                                }
                        </div>
                            <button onClick={handleSubmit} className="btn btn-primary mb-4 mt-4 col-5 row"> Agregar </button>

                    </form>
                       
                </div>
            </div>
            </div>
        </div>
    

       );
                    
}


export default RegistroRestaurant;