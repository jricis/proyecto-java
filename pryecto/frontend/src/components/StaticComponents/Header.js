import React from 'react';
import logo1 from '../../imagenes/logo1.png';
import {Link} from 'react-router-dom';


const Header = () => {

    return (
        
        <nav class="navbar nav">
            <div class="container-fluid">
                <a class="navbar-brand" href="/home">
                    <img src={logo1} alt="logo" width="270" height="70"/>
                </a>
                    <form class="d-flex">
                        <button class="btn botones-nav me-2" type="submit"><Link to="/home/registroUser" style={{color:'white'}}>Regístrate</Link></button>
                        <button class="btn botones-nav me-2" type="submit" href="#"><Link to="/home/LoginUser" style={{color:'white'}}>Login</Link></button>
                    </form>
            </div>
            <input class="form-control mb-5 mx-auto w-50" type="search" 
                placeholder="🔎 Busca tu restaurante..." aria-label="Search"/>
        </nav>



    );
}

export default Header;
