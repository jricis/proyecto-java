import React, { useEffect, useState } from 'react'
import axios from 'axios'


const CardsTrabaja = () => {
    //GET
    const [restaurante, useRestaurente] = useState({
        url: ""
    })
    const obtenerUrl = (e) => {
        useRestaurente({ ...restaurante, url: e })
    }

    // const conexion = () => {
    //     var url = "https://multifood.me/api/restaurant/?name=Durum"
    //     axios.get(url)
    //         .then(response => {
    //             console.log(response.data[0].imagen)
    //             obtenerUrl(response.data[0].imagen)

    //         })
    // }

    return (

        <div>
            <h3>Trabaja con nosotros</h3>

            <div class="row row-cols-1 row-cols-md-3 g-4" >
                <div class="col">
                    <div class="card h-100">
                        <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/comida-domicilio-madrid-coronavirus-esquire-1587566825.jpg?resize=980:*" class="card-img-top" alt="Rider" />
                        <div class="card-body">
                            <h5 class="card-title">Riders</h5>
                            <p class="card-text">Conviertete en rider</p>
                            <a href="#" class="btn btn-primary">Únete</a>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://www.lifeder.com/wp-content/uploads/2017/07/gerente-restaurant-1-768x511.jpg" class="card-img-top" alt="Restaurante" />
                        <div class="card-body">
                            <h5 class="card-title"> Restaurantes</h5>
                            <p class="card-text">Conviértete en colaborador con tu restaurante</p>
                            <a href="#" class="btn btn-primary">Únete</a>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="https://image.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-40332.jpg" class="card-img-top" alt="Plantilla" />
                        <div class="card-body">
                            <h5 class="card-title">Carrera</h5>
                            <p class="card-text">Forma parte de nuestra plantilla en nuestra empresa</p>
                            <a href="#" class="btn btn-primary">Únete</a>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 mins ago</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>




    );

};


export default CardsTrabaja;