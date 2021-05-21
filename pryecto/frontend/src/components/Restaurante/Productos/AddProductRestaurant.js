// Formulario añadir productos.

import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'

const AddProductRestaurant =()=>{
const [producto,useProducto]= useState({
    name:"",
    price:"",
    description:"",
    imagen:null
})

    const handleChangeNombre=(e)=>{
            useProducto({...producto,name:e.target.value})
        }

    const handleChangePrice=(e)=>{
            useProducto({...producto,price:e.target.value})
        }

    const handleChangeDescription=(e)=>{
        useProducto({...producto,description:e.target.value})
        }

    
    const handleChangeFile=(e)=>{
        useProducto({...producto,imagen:e.target.files[0]})
        }    
    
    const {register, errors, handleSubmit} = useForm();



    const onSubmit = (data, e) =>{
        console.log(data);
        e.preventDefault();
        useProducto({
            ...producto,
            data

        })
        console.log(producto.imagen)
        var formData = new FormData();
        var fileField = document.getElementById("foto")
        formData.append('name', producto.name);
        formData.append('price', producto.price);
        formData.append('description', producto.description);
        formData.append('imagen', producto.imagen);

        try{
            const{data}= axios.post(
                "http://multifood.me/api/product/",formData)
                
           console.log(data)
           
        }catch (error){
            console.log(error)
        }
     


   
    const onSubmit = (data, e) =>{
        console.log(data);
        e.preventDefault();
        useRestaurente({
            ...producto,
            data
        })
        try{
            const{data}= axios.put(
                "http://multifood.me/api/product/dcbb9c7f-a8c9-454f-9cc5-54e11b5adf89/",
                {
                    name : producto.name,
                    price : producto.price,
                    description: producto.description,
                    imagen:producto.imagen
                }
            )

        }catch (error){
            console.log(error)
        }
    
        
    }
}
  
   
    return(

        <div className="container">
            <div className="body-form-rest row d-flex col-12"> 
            <div className="m-2" align="right">
            <div className="formulario row d-flex justify-content-center col register-user" style={{width:"40%"}}>
                        <p className="mt-4 fs-2 fw-bolder text-center">Añadir productos</p>
                    <form className="row d-flex justify-content-center formulario" onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex justify-content-center col-12">
                            <input
                                name="name"
                                placeholder="Nombre producto"
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
                        <div className="d-flex-column justify-content-center  col-12">
                            <input
                                name="price"
                                placeholder="Precio"
                                className="form-control my-2"
                                onChange={handleChangePrice}
                                ref={register()}
                            ></input>
                            { errors.price &&
                            <span className="text-danger text-small d-block mb-2">
                            {errors.price.message}
                            </span>
                            }
                        
                        </div>       
                        <div className="d-flex-column justify-content-center  col-12">
                            <input
                                name="description"
                                placeholder="Descripción"
                                type="text"
                                className="form-control my-2"
                                onChange={handleChangeDescription}
                                ref={register()}
                            ></input>
                            { errors.description &&
                            <span className="text-danger text-small d-block mb-2">
                            {errors.description.messages}
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


export default AddProductRestaurant;