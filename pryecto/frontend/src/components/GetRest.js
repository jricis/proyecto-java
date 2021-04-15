import axios from 'axios'


export async function getRest(){
    
    const api=await axios("http://127.0.0.1:8000/api/restaurant/")
    return api.data
}

    


