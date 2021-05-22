import axios from 'axios'


export async function getRestRestaurant(){
    
    const api=await axios.get("http://multifood.me/api/restaurant/")
    return api.data
}
export async function getRestProducts(id_restaurant){
    const api = await axios.get("http://multifood.me/api/product/?format=json&&id_restaurant="+id_restaurant)
    return api
}
export async function getRestRiderWithUser(id_user){
    const api = await axios.get("http://multifood.me/api/rider/?userrider="+id_user)
    return api
}
export async function getRestUsuari(id_user){
   const api= axios.get("http://multifood.me/api/user/"+id_user)
    return api
}
export async function getRestRestaurantWithId(id_restaurant){
    const api= await axios.get("http://multifood.me/api/restaurant/"+id_restaurant+"/?format=json")
    return api
}

export async function getRestPedidoIdRestaurant(id_restaurant){
    const api = await axios.get("http://multifood.me/api/pedido/?Restaurants="+id_restaurant)
    return api
}
