import React from 'react'
import { Link } from 'react-router-dom';
const ShowProducts=(producto)=>{
    return (

     <div>
         <ul>
            <li><strong>{producto.producto.name}</strong></li>
            </ul>
    </div>   
    
        
    )

}

   

export default ShowProducts
