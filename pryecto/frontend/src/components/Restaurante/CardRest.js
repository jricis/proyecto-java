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

    function verDatos() {
        console.log(restaurant)
    }
    return (

           
            <div class="card col-2" style={{margin:"5px", padding:"0px"}}>
                <img class="card-img-top" style={{width:"100%",height:"50%"}} src={restaurant.imagen} alt={restaurant.name}/>
                <h5 class="card-title">{restaurant.name}</h5>
                    <p class="card-text text">{restaurant.description}</p>
            </div>
        );

};


export default CardRest;