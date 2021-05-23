import React from 'react'


const OnlyOneProduct = (producto) => {
    return (
        <div className="card-group col-12 col-xl-2 mb-3 col-md-12 col-sm-12 mx-auto">
            <div class="card" id="sizetarget" style={{ width: "80%", margin: "0px", padding: "0px" }}>
                <img class="card-img-top" id="sizeImage" style={{ width: "100%", height: "50%" }} src={producto.producto.imagen} alt={producto.producto.imagen} />
                <h5 class="text-center mt-2"><strong>{producto.producto.name}</strong></h5>
                <p class="card-text text-center" id="text">{producto.producto.description}</p>
            </div>
        </div>

    )
}
export default OnlyOneProduct