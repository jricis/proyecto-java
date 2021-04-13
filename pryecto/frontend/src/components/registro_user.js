import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const RegistroUser = () => {

    const [user, useUser] = useState({
        nombre: "",
        surname: "",
        email: "",
        phone: "",
        password: "",
        birthday: "",

    })

    const handleChangeNombre = (e) => {
        useUser({ ...user, nombre: e.target.value })
    }

    const handleChangeSurname = (e) => {
        useUser({ ...user, surname: e.target.value })
    }

    const handleChangeEmail = (e) => {
        useUser({ ...user, email: e.target.value })
    }

    const handleChangePhone = (e) => {
        useUser({ ...user, phone: e.target.value })
    }


    const handleChangePassword = (e) => {
        useUser({ ...user, password: e.target.value })
    }

    const handleChangeBirthday = (e) => {
        useUser({ ...user, birthday: e.target.value })

    }



    const { register, errors, handleSubmit } = useForm();


    const onSubmit = (data, e) => {
        console.log(data);
        e.preventDefault();
        useUser({
            ...user,
            data

        })
        console.log(user.data)

        try {
            const { data } = axios.post(
                "http://127.0.0.1:8000/api/restaurant/",
                {
                    name: user.nombre,
                    surname: user.nombre,
                    email: user.email,
                    phone: parseInt(user.phone),
                    password: user.adress,
                    birthday: user.birthday,

                }
            )
        } catch (error) {
            console.log(error)
        }


    }

    return (

        <div className="container">
            <div className="formulario row d-flex justify-content-center position-absolute top-50 start-50 translate-middle  register-user" style={{width:"30%"}}>
                <div className="mt-4 register-title d-flex justify-content-center">
                        <p className="fs-2 fw-bolder">Registro</p>
                </div>
                
                <form className="row d-flex justify-content-center formulario" onSubmit={handleSubmit(onSubmit)}>
                        <div className="name-input d-flex justify-content-center col-8">
                        <input
                            name="nombre"
                            placeholder="👤  Nombre"
                            className="form-control my-2"
                            onChange={handleChangeNombre}
                            ref={register()}
                        ></input>
                        {errors.nombre &&
                            <span className="text-danger text-small d-block mb-2">
                                {errors.nombre.messages}
                            </span>
                        }
                    </div>
                    <div className="surname-input d-flex-column justify-content-center  col-8">
                        <input
                            name="surname"
                            placeholder="👤  Apellido"
                            className="form-control my-2"
                            onChange={handleChangeSurname}
                            ref={register()}
                        ></input>
                        {errors.surname &&
                            <span className="text-danger text-small d-block mb-2">
                                {errors.surname.messages}
                            </span>
                        }
                    </div>
                    <div className="email-input d-flex-column-reverse justify-content-center  col-8">
                        <input
                            name="email"
                            placeholder="📧  Email"
                            className="form-control my-2"
                            onChange={handleChangeEmail}
                            ref={register()}
                        ></input>
                        {errors.email &&
                            <span className="text-danger text-small d-block mb-2">
                                {errors.email.message}
                            </span>
                        }
                    </div>
                    <div className="phone-input d-flex justify-content-center  col-8">

                        <input
                            name="phone"
                            placeholder="📱   Teléfono"
                            className="form-control my-2"
                            onChange={handleChangePhone}
                            ref={register()}
                        ></input>
                        {errors.phone &&
                            <span className="text-danger text-small d-block mb-2">
                                {errors.phone.messages}
                            </span>
                        }
                    </div>
                    <div className="password-input d-flex justify-content-center col-8">
                        <input
                            name="password"
                            type="password"
                            placeholder="🔐  Contraseña"
                            className="form-control my-2"
                            onChange={handleChangePassword}
                            ref={register()}
                        ></input>
                        {errors.password &&
                            <span className="text-danger text-small d-block mb-2">
                                {errors.password.message}
                            </span>
                        }
                    </div>
                    <div className="birthday-input d-flex justify-content-center col-8">
                        <input
                            name="birthday"
                            type="date"
                            placeholder="📅  Fecha de nacimiento"
                            className="form-control my-2"
                            onChange={handleChangeBirthday}
                            ref={register()}
                        ></input>
                        {errors.birthday &&
                            <span className="text-danger text-small d-block mb-2">
                                {errors.birthday.message}
                            </span>
                        }
                    </div>

                    <button onClick={handleSubmit} className="btn btn-primary mb-4 mt-4 col-5 row"> Aceptar </button>

                </form>
            </div>
        </div>



    );

}



export default RegistroUser; 