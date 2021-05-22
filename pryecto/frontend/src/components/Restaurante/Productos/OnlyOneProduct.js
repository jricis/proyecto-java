import React from 'react'


const OnlyOneProduct=(producto)=>{
    return(
        <div class="card col-2" style={{margin:"5px", padding:"0px"}}>
            <img class="card-img-top" style={{width:"100%",height:"50%"}} src={producto.producto.imagen} alt=""/>
            <h5 class="card-title">{producto.producto.name}</h5>
            <p class="card-text text">{producto.producto.descripcion}</p>
        </div>

    )
}
export default OnlyOneProduct                          