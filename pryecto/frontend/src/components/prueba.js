import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Prueba = () =>{
    //GET
    const [restaurante,useRestaurente]= useState({
        url: ""
    })
    const obtenerUrl=(e)=>{
        useRestaurente({...restaurante,url:e})
    }

   const conexion = () =>{
      var url = "http://127.0.0.1:8000/api/restaurant/?name=Durum"
      axios.get(url)
      .then(response => {
          console.log(response.data[0].imagen)
          obtenerUrl(response.data[0].imagen)

      })
   }
    
    return (
    
    <div>
            <h1>Multifood</h1>
    
            <div class="row row-cols-1 row-cols-md-3 g-4" >
                <div class="col">
                    <div class="card h-100">
                    <img src="https://www.familycheck.es/wp-content/uploads/2020/02/pans-imagen-para-promo.jpg" class="card-img-top" alt="Pans"/>
                    <div class="card-body">
                        <h5 class="card-title">Pans and Company</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src={restaurante.url} class="card-img-top" alt="Durum" />
                    <div class="card-body">
                        <h5 class="card-title"> Mario Doner Kebab</h5>
                        <p class="card-text">Restaurante de comida turca</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                    <img src="https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/images/2_Pub_Food_Questions_574x384.jpg?$Publication_Two_Column_Desktop$" class="card-img-top" alt="McDonald's" />
                    <div class="card-body">
                        <h5 class="card-title">Mc Donald's</h5>
                        <p class="card-text">Restaurante de comida rapida. Especialidad de Hamburguesas</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>
            </div>
            
            {/* <div>
                <button type="button" class="btn btn-primary">Primary</button>
                <button type="button" class="btn btn-secondary">Secondary</button>
                <button type="button" class="btn btn-success">Success</button>
                <button type="button" class="btn btn-danger">Danger</button>
                <button type="button" class="btn btn-warning">Warning</button>
                <button type="button" class="btn btn-info">Info</button>
                <button type="button" class="btn btn-light">Light</button>
                <button type="button" class="btn btn-dark">Dark</button>

                <button type="button" class="btn btn-link">Link</button>
            </div> */}

    < button type="button"  class="btn btn-primary" onClick={conexion}>Dale al botonsito</button>
    </div>
    
    


        );

};


export default Prueba;