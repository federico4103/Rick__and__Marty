import {ADD_FAV, REMOVE_FAV} from "./types";
import {FILTER, ORDER} from "./types";




const initialState = {
  myFavorites: [], // que redenrizo/muestro
  allCharacters: [] //todos los fav
}



export default function reducer (state = initialState,{type, payload}){
  switch (type){
   case ADD_FAV:
    return {
      ...state,
       myFavorites: [...state.allCharacters, payload], 
       allCharacters: [...state.allCharacters, payload]   
     } 
   case REMOVE_FAV:

     const filteredFavs = state.allCharacters.filter (
        fav => fav.id !== Number(payload)
     ) 
       return {
           ...state,
           myFavorites: filteredFavs,
           allCharacters: filteredFavs

       }
 
    case FILTER:
     //EXTRA:si quiero filtrar todos => caso ALL
     // if (payload==="ALL") return {
     // ...state,
     //    myFavorites: state.allCharacters
     //  }
 
     const allCharactersCopy = [...state.allCharacters];
     const filterdCharacters = allCharactersCopy.filter (
          character => character.gender ===payload
     )
 
     return {
      ...state,
        myFavorites: filterdCharacters
     }

     case ORDER:
      let orderedCharacters = [...state.allCharacters];
      if (payload==="A") {
        orderedCharacters = state.allCharacters.sort(
           (a,b) => a.id - b.id
        )
      } else if (payload ==="D"){
        orderedCharacters = state.allCharacters.sort(
           (a,b) => b.id - a.id

     ) }

      return {
        ...state,
          myFavorites: orderedCharacters
      }

         default:
           return {...state}
   }
}



//myFavorites es un arreglo = []
//tiene dos tareas: guarda/remueve fav y me indica que renderizar
// si quiero filtrar tengo que evitar que pierda
// el resto de los no filtrados
// para eso hago una copia de todo el array original no filtrado.
// se llamara allCharacters
// si saca de favorito debo eliminar de allCharacters tambien
// Si doy un nuevo like, lo agrego en ambos array (fav y all)