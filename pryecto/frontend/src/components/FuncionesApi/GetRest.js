import axios from 'axios'


export async function getRestRestaurant(){
    
    const api=await axios("http://multifood.me/api/restaurant/")
    return api.data
}
export async function getRestProducts(id_restaurant){
    const api = await axios("http://multifood.me/api/products/?id=restaurant"+id_restaurant)
}
export async function getRestRiderWithUser(id_user){
    const api = await axios("http://multifood.me/api/rider/?userrider="+id_user)
    return api
}
export async function getRestUsuari(id_user){
    const api = await axios("multifood.me/api/user/"+id_user)
    return api
}
export async function getRestRestaurantWithId(id_restaurant){
    const api= await axios("http://multifood.me/api/restaurant/"+id_restaurant)
    return api
}
