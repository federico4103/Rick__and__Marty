import {connect} from "react-redux";
import Card from '../cards/Cards.jsx';
import styles from './Favorites.module.css'; 
import {useState} from "react";
import {filterCards, orderCards} from "../../redux/actions.js";
import { useDispatch } from "react-redux";





 function Favorites ({myFavorites, onClose}){

  const [aux, setAux] = useState(false);


  const dispatch = useDispatch();

	const handlerOrder = (event) => {
      dispatch(orderCards(event.target.value))
      aux ? setAux(false) : setAux(true)  
  }

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value))
  }





	return (
      
      <div>

        <div>
           <select name= "order" onChange = {handlerOrder}>
              <option value="A">Ascendente</option>
              <option value="D">Descendente</option> 
            </select>
           <select name= "filter" onChange={handlerFilter}> 
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknown"> Unknown</option>
           </select>
        </div>
 

         <div classname = {styles.container}>

            {myFavorites?.map(character => (
                <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin?.name}
                  image={character.image}
                  onClose={onClose}

                />
              )
             )
            }
        </div>  
      </div>  
    )

} 

const mapStateToProps = (state) =>{
 
  return {

    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, null)(Favorites);


