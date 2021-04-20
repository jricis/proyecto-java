import React from 'react';
import logo1 from '../../imagenes/logo1.png';


const Header = () => {

    return (
        
        <nav class="navbar nav">
            <div class="container-fluid navegator">
                <a class="navbar-brand" href="/home">
                    <img src={logo1} alt="logo" width="270" height="70"/>
                </a>
                    <form class="d-flex">
                        <button class="btn botones-nav me-2" type="submit" href="#">Regístrate</button>
                        <button class="btn botones-nav me-2" type="submit" href="#">Login</button>
                    </form>
            </div>
            <input class="form-control mb-5 mx-auto busqueda" type="search" 
                placeholder="Busca tu restaurante..." aria-label="Search"/>
        </nav>



    );
}

export default Header;
