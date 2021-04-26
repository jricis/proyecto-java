import React, { useEffect,useState } from 'react'

const AmountRider = (rider,usuario) =>{
   
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
                       <p className="font-weight-bold text-center ml-1 row col-4">{rider.usuario.name}</p>
                       <p>poner todos los datos del rider directamente</p>
                            <p>poner todos los datos del rider directamente</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95777.02213481379!2d2.0787271678601877!3d41.39511268224575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a352efc1f34b%3A0x7446e5608fc06f9e!2sBurger%20King!5e0!3m2!1ses!2ses!4v1618336506559!5m2!1ses!2ses" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>   
                    </div>     
                </div>
                  
                
            </div>
        </div>
    )
}
export default AmountRider