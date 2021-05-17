import axios from 'axios'


export async function getRestRestaurant(){
    
    const api=await axios("http://127.0.0.1:8000/api/restaurant/")
    return api.data
}
export async function getRestProducts(id_restaurant){
    const api = await axios("http://127.0.0.1:8000/api/products/?id=restaurant"+id_restaurant)
}
export async function getRestRiderWithUser(id_user){
    const api = await axios("http://127.0.0.1:8000/api/rider/?userrider="+id_user)
    return api
}
export async function getRestUsuari(id_user){
    const api = await axios("http://127.0.0.1:8000/api/user/"+id_user)
    return api
}
export async function getRestRestaurantWithId(id_restaurant){
    const api= await axios("http://127.0.0.1:8000/api/restaurant/"+id_restaurant)
    return api
}
