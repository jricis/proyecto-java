import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'

const Restaurantes =()=>{
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
    
        
    }

  
   
    return(

        <Fragment>

            <h1>Restaurantes</h1>

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

            <button onClick={handleSubmit} className="btn btn-primary"> Agregar </button>

            </form>

        </Fragment>

       );

}

export default Restaurantes;