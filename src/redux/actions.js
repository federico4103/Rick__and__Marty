import{ADD_FAV} from "./types";
import{REMOVE_FAV} from "./types";
import{ORDER} from "./types";
import{FILTER} from "./types";





export function addFav (characters){
  return {
     type: ADD_FAV,
     payload: characters
 
  }

} 


export function removeFav (id){
   return {
    type: REMOVE_FAV,
    payload: id
   }
}
   
//filtro y ordenamiento son cosas distintas
//se devuelve un obj siempre
 export function filterCards (gender){

 	return {
 		type: FILTER,
 		payload: gender
 	}
 }  

//A =Ascendente, D=Descendente

 export function orderCards (order){
     return {
        type: ORDER,
        payload: order

     }
 }