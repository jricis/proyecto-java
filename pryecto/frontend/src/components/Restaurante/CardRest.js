import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const CardRest = (props) => {
    const [restaurant, setRestaurant] = useState({
        id: "",
        name: "",
        email: "",
        phone: 0,
        adress: "",
        city: "",
        postalcode: "",
        description: "",
        imagen: "",
        products: [],
        pedidosrestaurant: []


    })
    useEffect(async () => {
        let mounted = true
        if (mounted) {
            setRestaurant({
                id: props.props.id,
                name: props.props.name,
                email: props.props.email,
                phone: props.props.phone,
                adress: props.props.adress,
                city: props.props.city,
                postalcode: props.props.postalcode,
                description: props.props.description,
                imagen: props.props.imagen,
                products: props.props.products,
                pedidosrestaurant: props.props.pedidosrestaurant

            })
        }
        return () => mounted = false
    }, [])
    function redirection() {
        window.location.href='./viewproductuser/'+props.props.id
    }
    return (
            <div className="card-group col-12 col-xl-3 mb-3 col-md-12 col-sm-12 mx-auto">
                <div class="card  mx-auto" id="sizetarget" onClick={redirection} style={{width:"80%", margin:"0px", padding:"0px"}}>
                    <img class="card-img-top" id="sizeImage"  style={{width:"100%",height:"50%"}} src={restaurant.imagen} alt={restaurant.name}/>
                    <h5 class="text-center mt-2"><strong>{restaurant.name}</strong></h5>
                        <p class="card-text text-center" id="text">{restaurant.description}</p>    
                </div>
            </div>
        );

};


export default CardRest;
