import React ,{useEffect,useState} from 'react'
import {getRestProdcucts} from "./../../FuncionesApi.js"


const MountProducto = (idRestaurante) =>{
    const [productos,setProductos] = useState([])
    useEffect(()=>{
        let mounted = true;
        getRestProdcucts()
        .then(producto=>{
            if(mounted){
                setProductos(producto)
              
            }
            
        })
        console.log(productos)
        return ()=>mounted = false
        
        },[])
}

export default MountProducto