

import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {getRestRiderWithUser,getRestUsuari} from '../FuncionesApi/GetRest'
import AmountUser from './AmountUser';
const Perfil = () => {
const {data} = useParams()

const [usuario,setUsuario]=useState({
        nombre: "",
        surname: "",
        email: "",
        postalcode:"",
        city:"",
        phone: "",
        password: "",
        birthday: "",
       
}) 

useEffect(()=>{
    let mounted = true;
    console.log(data)
        if(mounted){
            getRestUsuari(data)
            .then(user_data=>{
                if(user_data.status==200){
                    if (mounted){
                        setUsuario(user_data.data)
                    }
                }
            })
        }
        
    
   



    return ()=>mounted = false
    
    },[])
    


            
    
   
    return (

           <div className="m-4">
               <h1>Mi perfil</h1>
                <AmountUser usuario= {usuario}></AmountUser>
            </div>
                           
    );

}
export default Perfil; 