import React from 'react'

export const Nav = () => {
    return (
        <div class="m-3">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Logotipo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
{/* Faltaria centrar los botones y elegir el nombre que le ponemos */}
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Busqueda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Promociones</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
