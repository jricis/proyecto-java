

import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom'
import {getRestRiderWithUser,getRestUsuari} from '../FuncionesApi/GetRest'
import AmountRider from './AmountRider';
const HomeRider = () => {
const {data} = useParams()
const [rider,setRider] = useState({
    type_vehicle:"",
    libre:"",
    userrider:"",

})
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
    // console.log(data)
    getRestRiderWithUser(data)
    .then(rider_data=>{
       if(rider_data.status==200){
       console.log(rider_data.data);
            if(mounted){
                setRider(rider_data.data[0])
                
            }
            getRestUsuari(data)
            .then(user_data=>{
                if(user_data.status==200){
                    if (mounted){
                        setUsuario(user_data.data)
                    }
                }
            })
        }
    })
   



    return ()=>mounted = false
    
    },[])
    


            
    
   
    return (

           <div className="m-4">
               <h1>Mi perfil</h1>
                <AmountRider rider ={rider} usuario= {usuario}></AmountRider>
            </div>
                           
    );

}
export default HomeRider; 