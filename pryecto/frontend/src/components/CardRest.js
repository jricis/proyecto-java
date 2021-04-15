import React, {useEffect, useState} from 'react'
import axios from 'axios'


const CardRest = (props) =>{
    const [restaurant,setRestaurant]=useState({
        id:"",
        name:"",
        email:"",
        phone:0,
        adress:"",
        city:"",
        postalcode:"",
        description:"",
        imagen:"",
        products:[],
        pedidosrestaurant:[]


    })
    useEffect(async() =>{
      let mounted=true
      if(mounted){
      setRestaurant({
        id:props.props.id,
        name:props.props.name,
        email:props.props.email,
        phone:props.props.phone,
        adress:props.props.adress,
        city:props.props.city,
        postalcode:props.props.postalcode,
        description:props.props.description,
        imagen:props.props.imagen,
        products:props.props.products,
        pedidosrestaurant:props.props.pedidosrestaurant
      
      })
    }
    return () =>mounted=false
    },[])

    function verDatos(){
        console.log(restaurant)
    }
    return (

    <div>
        
       
            <div class="row row-cols-1 row-cols-md-3 g-4" >
                <div class="col">
                    <div class="card h-100">
                    <img src={restaurant.imagen} class="card-img-top" alt={restaurant.name}/>
                    <div class="card-body">
                        <h5 class="card-title">{restaurant.name}</h5>
                        <p class="card-text">{restaurant.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                    </div>
                </div>
            </div> 



    </div>




        );

};


export default CardRest;