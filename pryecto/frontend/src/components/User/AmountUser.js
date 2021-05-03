import React, { useEffect,useState } from 'react'

const AmountUser = (usuario) =>{
   
    useEffect(async() =>{
        let mounted=true
        if(mounted){
       
      }
      return () =>mounted=false
      },[])
    return(
        <div>
            <div className="container"> 
               
               <div className="row mt-5 justify-content-between">
               <div className="d-flex col-6 register-user" style={{width:"30%"}}>
                   <div className="m-2 col justify-content-left">
                       <p className="font-weight-bold text-center ml-1 row col">
                           Usuario: {usuario.usuario.name} {usuario.usuario.surname}<br/>
                           Correo: {usuario.usuario.email}<br/>
                           Telefono: {usuario.usuario.phone}<br/>
                           Dirección: {usuario.usuario.adress}<br/>
                        </p>
                    </div>
                </div>
                <div className="d-flex col-6 register-user" style={{width:"30%"}}>
                   <div className="m-2 col justify-content-left">
                       <p className="font-weight-bold text-center ml-1 row col">
                           Usuario: {usuario.usuario.name} {usuario.usuario.surname}<br/>
                           Correo: {usuario.usuario.email}<br/>
                           Telefono: {usuario.usuario.phone}<br/>
                           Dirección: {usuario.usuario.adress}<br/>
                        </p>
                    </div>
                </div>    
                </div>                
            </div>
        </div>
    )
}
export default AmountUser