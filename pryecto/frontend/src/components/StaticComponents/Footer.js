import React from 'react'
import logo2 from '../../imagenes/logo2.png';
import {Link} from 'react-router-dom';

const Footer = () => {

    return (

        <footer class="footer text-center mt-5 text-white text-lg-start bottom">
            <div class="container p-4">
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <a class="footer-logo" href="/home">
                            <img src={logo2} alt="logo2" width="180" height="35"/>
                        </a>
                    </div>
                    <div class="col-lg-3 col-md-3 mb-4 mb-md-0">
                        <h5 class="text fw-bold">Trabajemos juntos</h5>

                        <ul class="links-footer list-unstyled mb-0">
                            <li class="mt-4">
                                <Link to="/home/registroRestaurante" style={{color:"white"}}>Socio de restaurante</Link>
                                
                            </li>
                            <li class="mt-2">
                                <Link to="/home/registroRider/" style={{color:"white"}}>Rider</Link>
                            </li>
                            <li class="mt-2">
                                <Link to="/home/registroRider/"style={{color:"white"}}>Trabaja con nosotros</Link>
                                
                            </li>
                            
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-12 mb-4 mb-md-0">
                        <h5 class="text fw-bold">Síguenos</h5>

                        <ul class="text-white list-unstyled mb-0">
                            <li class="mt-4">
                                <a href="#!" class="text-white">Facebook</a>
                            </li>
                            <li class="mt-2">
                                <a href="#!" class="text-white">Instagram</a>
                            </li>
                            <li class="mt-2">
                                <a href="#!" class="text-white">Twitter</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="text-center text-white footer p-3">
                © 2021 Multifood
            </div>
        </footer>
    );
}

export default Footer;