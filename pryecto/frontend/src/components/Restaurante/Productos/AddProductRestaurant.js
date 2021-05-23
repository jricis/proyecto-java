// Formulario añadir productos.

import React, { Fragment, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {useParams} from 'react-router-dom'

const AddProductRestaurant =()=>{
    
const [producto,useProducto]= useState({
    name:"",
    price:"",
    description:"",
    imagen:null

})
const {data} = useParams()
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



    const onSubmit = () =>{
       
        console.log(producto.imagen)
        var formData = new FormData();
        var fileField = document.getElementById("foto")
        formData.append('name', producto.name);
        formData.append('price', producto.price);
        formData.append('description', producto.description);
        formData.append('imagen', producto.imagen);
        formData.append('id_restaurant',data)
        try{
            axios.post("https://multifood.me/api/product/",formData)
            .then(res=>{
                console.log(res)
                if(res.status==201){
                    window.location.href='/viewproductrestaurant/'+data
                }
            })
                
          
           
        }catch (error){
           
             alert("No se ha podido añadir su producto vuelvo a intentarlo")
          
        }
    
   
}
  
   
    return(

        <div className="container">
            <div className="body-form-rest row d-flex d-flex justify-content-xl-center d-flex justify-content-center"> 
            <div className="m-2 col-xl-4 col-sm-12">
            <div className="formulario row register-user">
                        <p className="mt-4 fs-2 fw-bolder text-center">Añadir productos</p>
                    <div className="row d-flex justify-content-center formulario" >
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
                        <div className="d-flex-column justify-content-center col-12">
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
                            <textarea
                                name="description"
                                placeholder="Descripción"
                                type="text"
                                className="form-control my-2"
                                onChange={handleChangeDescription}
                                ref={register()}
                            ></textarea>
                            { errors.description &&
                            <span className="text-danger text-small d-block mb-2">
                            {errors.description.messages}
                            </span>
                            }
                        </div>
                        <div className="imagen-input d-flex-column justify-content-center col-12"> 
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
                            <button onClick={onSubmit} className="btn btn-primary mb-4 mt-4 col-5 row"> Añadir </button>
                    </div>
                       
                </div>
            </div>
            </div>
        </div>
    

       );
                    
}


export default AddProductRestaurant;