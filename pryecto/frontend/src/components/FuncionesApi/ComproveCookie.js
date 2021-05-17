import Cookies from 'universal-cookie'

const cookies = new Cookies();

export function comproveUser(){
  
    return cookies.get('iduser')
}
export function comproveRider(){
     
     return cookies.get('idrider')
    
}
export function comproveRestaurant(){
   
    return cookies.get('idrestaurante')
    
}