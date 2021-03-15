import React, { Component, Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'

const Restaurantes =()=>{
const [restaurante,useRestaurente]= useState({
    nombre:"",
    email:"",
    phone:"",
    adress:"",
    city:"",
    postalcode:"",
    description:""
})

    const handleChangeNombre=(e)=>{
            useRestaurente({...restaurante,nombre:e.target.value})
        }

    const     handleChangeEmail=(e)=>{
        useRestaurente({...restaurante,email:e.target.value})
        }

    const     handleChangePhone=(e)=>{
        useRestaurente({...restaurante,phone:e.target.value})
        }

    const     handleChangeadress=(e)=>{
        useRestaurente({...restaurante,adress:e.target.value})
        }

    const     handleChangeCity=(e)=>{
        useRestaurente({...restaurante,city:e.target.value})
        }

     const    handleChangePostalCode=(e)=>{
        useRestaurente({...restaurante,postalcode:e.target.value})
        console.log(restaurante.postalcode)
        }

    const     handleChangeDescription=(e)=>{
        useRestaurente({...restaurante,description:e.target.value})
        }

    
const {register, errors, handleSubmit} = useForm();


     


   
    const onSubmit = (data, e) =>{
        console.log(data);
        e.preventDefault();
        useRestaurente({
            ...restaurante,
            data
        })
        try{
            const{data}= axios.put(
<<<<<<< HEAD
                "http://127.0.0.1:8000/api/restaurant/dcbb9c7f-a8c9-454f-9cc5-54e11b5adf89/",
=======
                "http://127.0.0.1:8000/api/restaurant/ca806649-673e-4251-987a-4eaddfb4b73c/",
>>>>>>> 71bdbceeae1b5984694e7f0e40c20578b2da0dec
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
   
   


    return(

        <Fragment>

            <h1>Restaurante</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

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
                

                <input
                    name="email"
                    placeholder="Email"
                    className="form-control my-2"
                    onChange={handleChangeEmail}
                    ref={register()}
                ></input>
                { errors.email &&
                <span className="text-danger text-small d-block mb-2">
                {errors.email.message}
                </span>
                }
            
                    
    
                <input
                    name="phone"
                    placeholder="Teléfono"
                    className="form-control my-2"
                    onChange={handleChangePhone}
                    ref={register()}
                ></input>
                { errors.phone &&
                <span className="text-danger text-small d-block mb-2">
                {errors.phone.messages}
                </span>
                }
              

                
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
                
                <input
                    name="city"
                    placeholder="Ciudad"
                    className="form-control my-2"
                    onChange={handleChangeCity}
                    ref={register()}
                    ></input>
                    { errors.city &&
                    <span className="text-danger text-small d-block mb-2">
                    {errors.city.message}
                    </span>
                    }
                
                <input
                    name="postalcode"
                    placeholder="Código Postal"
                    className="form-control my-2"
                    onChange={handleChangePostalCode}
                    ref={register()}
                    ></input>
                    { errors.postalcode &&
                    <span className="text-danger text-small d-block mb-2">
                    {errors.postalcode.message}
                    </span>
                    }

                
                <input
                    name="description"
                    placeholder="Descripción"
                    className="form-control my-2"
                    onChange={handleChangeDescription}
                    ref={register()}
                    ></input>
                    { errors.descripcion &&
                    <span className="text-danger text-small d-block mb-2">
                    {errors.description.message}
                    </span>
                    }

            <button onClick={handleSubmit} className="btn btn-primary"> Agregar </button>

            </form>

        </Fragment>

       );

                }

export default Restaurantes;