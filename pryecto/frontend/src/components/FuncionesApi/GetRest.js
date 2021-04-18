import axios from 'axios'


export async function getRestRestaurant(){
    
    const api=await axios("http://127.0.0.1:8000/api/restaurant/")
    return api.data
}
export async function getRestProdcucts(id_restaurant){
    const api = await axios("http://127.0.0.1:8000/api/products/?id=restaurant"+id_restaurant)
}

export async function getRider(id_rider) {
    const api=await axios("http://127.0.0.1:8000/api/rider/"+id_rider)
    return api.data
}
export async function getUser(id_user) {
    const api=await axios("http://127.0.0.1:8000/api/user/"+id_user)
    return api.data
}

    


