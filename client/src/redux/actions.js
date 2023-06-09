import{ADD_FAV} from "./types";
import{REMOVE_FAV} from "./types";
import{ORDER} from "./types";
import{FILTER} from "./types";
import axios from "axios";
const ENDPOINT = 'http://localhost:3001/rickandmorty/fav'
 
//no puedo hacer asincrona una accion pero si
//puede rotrnar una funcion asyn

export const addFav = (character) => {
  return async (dispatch) => {    
  try {
        const {data} = await axios.post (ENDPOINT, character);
        return dispatch ({
          type: "ADD_FAV";
          payload: data,
        })
  } catch (error) {
    return dispatch ({
      type:"ERROR",
      payload: error.message
    })
  }
}
  }
    /*

      const endpoint = ENDPOINT
      return (dispatch) => {
         axios.post(endpoint, character).then(({ data }) => {
            return dispatch({
               type: 'ADD_FAV',
               payload: data,
            });
         });
      };
};
*/
   export const removeFav = (id) => {
     return async (dispatch) => {
      try  {
            const {data} = await axios.delete(`${ENDPOINT}/${id}`)
             return dispatch({
               type: 'REMOVE_FAV',
               payload: data,
         })
      } catch (error){
                return dispatch({
               type: 'ERROR',
               payload: error.message
         })
      }
     }

  } /*   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
      return (dispatch) => {
         axios.delete(endpoint).then(({ data }) => {
            return dispatch({
               type: 'REMOVE_FAV',
               payload: data,
         });
         });
      };
   };

   */

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