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
export function logout() {
    cookies.remove('idrider',{ path: '/' });
    cookies.remove('idrestaurant',{ path: '/' });
    cookies.remove('iduser',{ path: '/' });
    window.location.href='/home';
}