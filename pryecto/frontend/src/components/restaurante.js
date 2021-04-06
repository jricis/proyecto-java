<<<<<<< HEAD
import React, { Fragment, useState, useEffect } from 'react';
=======
import React, { Component, Fragment, useState, useEffect } from 'react';
>>>>>>> 139046cbc3c78e4df2d6a69948f0a4981a1e95f8
import { useForm } from 'react-hook-form';
import axios from 'axios'

const Restaurantes =()=>{
<<<<<<< HEAD
const [restaurante,useRestaurante]= useState({
=======
const [restaurante,useRestaurente]= useState({
>>>>>>> 139046cbc3c78e4df2d6a69948f0a4981a1e95f8
    nombre:"",
    email:"",
    phone:"",
    adress:"",
    city:"",
    postalcode:"",
<<<<<<< HEAD
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
=======
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
>>>>>>> 139046cbc3c78e4df2d6a69948f0a4981a1e95f8
        console.log(restaurante.postalcode)
        }

    const     handleChangeDescription=(e)=>{
<<<<<<< HEAD
        useRestaurante({...restaurante,description:e.target.value})
        }
    
    const     handleChangeFile=(e)=>{
        useRestaurante({...restaurante,imagen:e.target.files[0]})
        }    
=======
        useRestaurente({...restaurante,description:e.target.value})
        }

>>>>>>> 139046cbc3c78e4df2d6a69948f0a4981a1e95f8
    
const {register, errors, handleSubmit} = useForm();


<<<<<<< HEAD
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
=======
     


   
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
>>>>>>> 139046cbc3c78e4df2d6a69948f0a4981a1e95f8
        }catch (error){
            console.log(error)
        }
    
        
    }
<<<<<<< HEAD

  
   
=======
   
   


>>>>>>> 139046cbc3c78e4df2d6a69948f0a4981a1e95f8
    return(

        <Fragment>

<<<<<<< HEAD
            <h1>Restaurantes</h1>
=======
            <h1>Restaurante</h1>
>>>>>>> 139046cbc3c78e4df2d6a69948f0a4981a1e95f8

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
<<<<<<< HEAD
                
                <input type="file" 
                       name="imagen"
                       placeholder="Insertar foto"
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
=======
>>>>>>> 139046cbc3c78e4df2d6a69948f0a4981a1e95f8

            <button onClick={handleSubmit} className="btn btn-primary"> Agregar </button>

            </form>

        </Fragment>

       );

<<<<<<< HEAD
}
=======
                }
>>>>>>> 139046cbc3c78e4df2d6a69948f0a4981a1e95f8

export default Restaurantes;