import Cookies from 'universal-cookie'

const cookies = new Cookies();

export function setCookieUser(iduser){
    cookies.set('iduser',iduser,{path:'/'})
}
export function setCookieRestaurant(idrestaurant){
    cookies.set('idrestaurant',idrestaurant,{path:'/'})
}
export function setCookieRider(idrider){
    cookies.set('idrider',idrider,{path:'/'})
}
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
    window.location.href='/';
}

export function getAllCookies(){
    return cookies.getAll()
}
/////////////////////FUNCION APARTE PARA PEDIDO////////////////////////////////////

export function searchProduct(array,indice,product){
    if(indice==array.length){
        return -1;
    }
    if(array[indice].id==product){
        return indice
    }
   return searchProduct(array,indice+1,product)
}

export function countProduct(array,indice,product,count=0){
   
    if(indice==array.length){
        return count;
    }
    if(array[indice].id==product){
        return countProduct(array,indice+1,product,count+1)
    }
  
   return countProduct(array,indice+1,product,count)
}

export function returnProductsSameRestaurant(array,indice,restaurant,result=[]){
    if(indice==array.length){
        return result;
    }
    if(array[indice].idrestaurante==restaurant){
        var idproduct = array[indice].id
        var price = array[indice].price
       var obj={
           idproduct:idproduct,
           price:price
       }
        result.push(obj)
        return returnProductsSameRestaurant(array,indice+1,restaurant,result)
    }
   return returnProductsSameRestaurant(array,indice+1,restaurant,result)
}