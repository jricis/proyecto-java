import React, { Fragment } from 'react'


    const Registro = () =>{

        const [user,useUser]= useState({
            nombre:"",
            surname:"",
            email:"",
            phone:"",
            password:"",
            birthday:"",
            
        })



       return(

            <Fragment>

            <h1>Registro de Usuario</h1>

            <form onSubmit={handleSubmit(onSubmit)}>

                <input
                    name="nombre"
                    placeholder="Nombre"
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
                    name="surname"
                    placeholder="Apellido"
                    className="form-control my-2"
                    onChange={handleChangeNombre}
                    ref={register()}
                ></input>
                { errors.surname &&
                <span className="text-danger text-small d-block mb-2">
                {errors.surname.messages}
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
                    name="password"
                    type="password"
                    placeholder="Contraseña"
                    className="form-control my-2"
                    onChange={handleChangeadress}
                    ref={register()}
                    ></input>
                    { errors.password &&
                    <span className="text-danger text-small d-block mb-2">
                    {errors.password.message}
                    </span>
                    }
                
                <input
                    name="birthday"
                    placeholder="Fecha de nacimiento"
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



export default Registro; 