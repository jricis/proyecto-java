import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'

const RegistroRestaurant =()=>{
const [restaurante,useRestaurante]= useState({
    nombre:"",
    email:"",
    phone:"",
    adress:"",
    city:"",
    postalcode:"",
    description:"",
    imagen: null
})

    const handleChangeNombre=(e)=>{
            useRestaurante({...restaurante,nombre:e.target.value})
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
    
const {register, errors, handleSubmit} = useForm();



    const onSubmit = (data, e) =>{
        console.log(data);
        e.preventDefault();
        useRestaurante({
            ...restaurante,
            data

        })
        console.log(restaurante.imagen)
        var formData = new FormData();
        var fileField = document.getElementById("foto")
        formData.append('name', restaurante.name);
        formData.append('email', restaurante.email);
        formData.append('phone', restaurante.phone);
        formData.append('adress', restaurante.adress);
        formData.append('city', restaurante.city);
        formData.append('postalcode', restaurante.postalcode);
        formData.append('description', restaurante.description);
        formData.append('imagen', restaurante.imagen);
        

        try{
            const{data}= axios.post(
                "http://127.0.0.1:8000/api/restaurant/",formData)
                    // name : restaurante.nombre,
                    // email : restaurante.email,
                    // phone: parseInt(restaurante.phone),
                    // adress: restaurante.adress,
                    // city:restaurante.city,
                    // postalcode:restaurante.postalcode,
                    // description:restaurante.description,
                    // imagen:formData,
                
           console.log(data)
        
        }catch (error){
            console.log(error)
        }
     


   
    const onSubmit = (data, e) =>{
        console.log(data);
        e.preventDefault();
        useRestaurente({
            ...restaurante,
            data
        })
        try{
            const{data}= axios.put(
                "http://127.0.0.1:8000/api/restaurant/dcbb9c7f-a8c9-454f-9cc5-54e11b5adf89/",
                {
                    name : restaurante.nombre,
                    email : restaurante.email,
                    phone: parseInt(restaurante.phone),
                    adress: restaurante.adress,
                    city:restaurante.city,
                    postalcode:restaurante.postalcode,
                    description:restaurante.description
                }
            )

        }catch (error){
            console.log(error)
        }
    
        
    }
}
  
   
    return(
        
        <div className="fondo">
        <div className="container">
            <div className="body-form-rest row d-flex col-12"> 
            <div align="right">
            <div className="formulario row d-flex justify-content-center col register-user" style={{width:"40%"}}>
                        <p className="mt-3 fs-2 fw-bolder text-center">Asóciate con nosotros</p>
                    <form className="row d-flex justify-content-center formulario" onSubmit={handleSubmit(onSubmit)}>
                        <div className="name-input d-flex justify-content-center col-12">
                            <input
                                name="nombre"
                                placeholder="Nombre Restaurante"
                                className="form-control my-2"
                                onChange={handleChangeNombre}
                                ref={register()}
                            ></input>
                            { errors.nombre &&
                            <span className="text-danger text-small d-block mb-2">
                            {errors.nombre.messages}
                            </span>
                            } 
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
    </div> 

       );
                    
}


export default RegistroRestaurant;