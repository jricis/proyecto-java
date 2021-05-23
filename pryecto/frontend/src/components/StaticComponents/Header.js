import React from 'react';
import logo1 from '../../imagenes/logo1.png';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { logout } from '../FuncionesApi/ComproveCookie'
import { getAllCookies } from '../FuncionesApi/ComproveCookie'
import { get } from 'react-hook-form';
const Header = () => {
    const cookies = new Cookies();




    return (
        <nav class="navbar nav">
            <div class="container-fluid mx-auto">
                <a class="navbar-brand" href="/">
                    <img src={logo1} alt="logo" className="w-50" />
                </a>

                {cookies.get('iduser') == undefined
                    ? cookies.get('idrestaurant') == undefined
                        ? cookies.get('idrider') == undefined
                            ? <form class="d-flex">
                                <button class="btn botones-nav me-2" >
                                    <Link to="/registrouser" style={{ color: 'white' }}>Regístrate</Link>
                                </button>
                                <button class="btn botones-nav me-2" href="#">
                                    <Link to="/loginuser" style={{ color: 'white' }}>Login</Link>
                                </button>
                            </form>
                            : <div class="d-flex">
                                <button class="btn botones-nav me-2">
                                    <Link to={"/homerider/" + cookies.get('idRider')} style={{ color: 'white' }}>Mi perfil</Link>
                                </button>
                                <button class="btn botones-nav me-2" onClick={logout}> Salir</button>
                            </div>
                        : <div class="d-flex">
                            <button class="btn botones-nav me-2">
                                <Link to={"/restaurante/" + cookies.get('idrestaurant')} style={{ color: 'white' }}>Mi perfil</Link>
                            </button>
                            <button class="btn botones-nav me-2" onClick={logout}> Salir</button>
                        </div>
                    : <div class="d-flex">
                        <button class="btn botones-nav me-2">
                            <Link to={"/perfil/" + cookies.get('iduser')} style={{ color: 'white' }}>Mi perfil</Link>
                        </button>
                        <button class="btn botones-nav me-2" onClick={logout}> Salir</button>
                    </div>
                }

            </div>
            <div className="col-xl-4 col-sm-12 mx-auto mt-1">
                <input class="form-control mb-5 mx-auto w-100" type="search" placeholder="🔎 Busca tu restaurante..." aria-label="Search" />
            </div>
        </nav>



    );
}

export default Header;
