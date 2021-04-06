import React, {useEffect, useState} from 'react'
import axios from 'axios'


const CardsRestaurantes = () =>{
    //GET
    const [restaurante,useRestaurente]= useState({
        url: ""
    })
    const obtenerUrl=(e)=>{
        useRestaurente({...restaurante,url:e})
    }

   const conexion = () =>{
      var url = "http://127.0.0.1:8000/api/restaurant/"
      axios.get(url)
      .then(response => {
          console.log(response.data[0].imagen)
          obtenerUrl(response.data[0].imagen)

      })
   }
    
    return (
    
    <div>
        <div className="section-card">
            <section>
            <div className="inner-cards">
                <div className="cerca">Cerca de ti</div>
                    <div class="row row-cols-1 row-cols-md-4 g-4">
                        <div class="col">
                            <div class="card h-50 w-150">
                            <a href="https://www.pansandcompany.com/">
                                <picture>
                                <img className="img-fluid img-thumbnail max-width: 100%; height: auto;" src="https://www.pansandcompany.com/files/slides/121.jpg" />
                                <p className="card-title">Pans and Company</p>
                                </picture>
                                </a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-20">
                                <img src={restaurante.url} class="card-img-top" alt="Durum" />
                                    <div class="card-body">
                                        <h5 class="card-title"> Mario Doner Kebab</h5>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                        </div>
                        <div class="col">
                            <div class="card h-50 w-150">
                            <a href="https://www.pansandcompany.com/">
                                <picture>
                                <img className="img-fluid img-thumbnail max-width: 100%; height: auto;" src="https://www.pansandcompany.com/files/slides/121.jpg" />
                                <p className="card-title">Pans and Company</p>
                                </picture>
                                </a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-50 w-150">
                            <a href="https://www.pansandcompany.com/">
                                <picture>
                                <img className="img-fluid img-thumbnail max-width: 100%; height: auto;" src="https://www.pansandcompany.com/files/slides/121.jpg" />
                                <p className="card-title">Pans and Company</p>
                                </picture>
                                </a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-50 w-150">
                            <a href="https://www.pansandcompany.com/">
                                <picture>
                                <img className="img-fluid img-thumbnail max-width: 100%; height: auto;" src="https://www.pansandcompany.com/files/slides/121.jpg" />
                                <p className="card-title">Pans and Company</p>
                                </picture>
                                </a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-50 w-150">
                            <a href="https://www.pansandcompany.com/">
                                <picture>
                                <img className="img-fluid img-thumbnail max-width: 100%; height: auto;" src="https://www.pansandcompany.com/files/slides/121.jpg" />
                                <p className="card-title">Pans and Company</p>
                                </picture>
                                </a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-50 w-150">
                            <a href="https://www.pansandcompany.com/">
                                <picture>
                                <img className="img-fluid img-thumbnail max-width: 100%; height: auto;" src="https://www.pansandcompany.com/files/slides/121.jpg" />
                                <p className="card-title">Pans and Company</p>
                                </picture>
                                </a>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-50 w-150">
                            <a href="https://www.pansandcompany.com/">
                                <picture>
                                <img className="img-fluid img-thumbnail max-width: 100%; height: auto;" src="https://www.pansandcompany.com/files/slides/121.jpg" />
                                <p className="card-title">Pans and Company</p>
                                </picture>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>       
    </div>
    
    


        );

};


export default CardsRestaurantes;