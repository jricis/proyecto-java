import React from 'react';
import logo1 from '../../imagenes/logo1.png';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';
import {logout} from '../FuncionesApi/ComproveCookie'
import {getAllCookies} from '../FuncionesApi/ComproveCookie'
import { get } from 'react-hook-form';
const Header = () => {
    const cookies = new Cookies();
   
    

 
    return (
        
        <nav class="navbar nav">
            <div class="container-fluid">
                <a class="navbar-brand" href="/home">
                    <img src={logo1} alt="logo" width="270" height="70"/>
                </a>
                
                {cookies.get('iduser')==undefined
                    ? cookies.get('idrestaurant')==undefined
                        ? cookies.get('idrider')==undefined
                            ?<form class="d-flex">
                                <button class="btn botones-nav me-2" ><Link to="/home/registroUser" style={{color:'white'}}>Regístrate</Link></button>
                                <button class="btn botones-nav me-2" href="#"><Link to="/home/LoginUser" style={{color:'white'}}>Login</Link></button>
                             </form>
                            :<div class="d-flex">
                                <button class="btn botones-nav me-2"><Link to={"/home/HomeRider/"+cookies.get('idRider')} style={{color:'white'}}>Mi perfil</Link></button>
                                <button class="btn botones-nav me-2" onClick={logout}> Salir</button>
                             </div>
                        : <div class="d-flex">
                            <button class="btn botones-nav me-2"><Link to={"/home/Restaurante/"+cookies.get('idrestaurant')} style={{color:'white'}}>Mi perfil</Link></button>
                            <button class="btn botones-nav me-2" onClick={logout}> Salir</button>
                          </div>
                    : <div class="d-flex">
                        <button class="btn botones-nav me-2"><Link to={"/home/Perfil/"+cookies.get('iduser')} style={{color:'white'}}>Mi perfil</Link></button>
                        <button class="btn botones-nav me-2" onClick={logout}> Salir</button>
                      </div>
                }
                    
            </div>
            <input class="form-control mb-5 mx-auto w-50" type="search" 
                placeholder="🔎 Busca tu restaurante..." aria-label="Search"/>
        </nav>



    );
}

export default Header;
