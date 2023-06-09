import styles from "./Card.module.css";
import {Link} from "react-router-dom";
import {addFav, removeFav} from "../../redux/actions";
import {connect} from "react-redux";
import {useState} from "react";
import {useEffect} from "react";




 

export  function Card(props) {

  const [isFav, setIsFav] = useState(false);





  useEffect(() => {
   props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
  }, [props.myFavorites]);

  const handleFavorite = () => {
  if (isFav) {
  setIsFav (false)
  props.removeFav(props.id)
  } else{
    setIsFav(true);
    props.addFav(props);

  }
}


   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            {
              isFav ? (
                <button onClick={handleFavorite}>❤️</button>
            ) : (
                <button onClick={handleFavorite}>🤍</button>
            )
            }

            <button onClick={() => props.onClose(props.id)}>X</button>
         </div>
          <Link to={`/detail/${props.id}`} >
           <div className={styles.dataContainer}>
            <h2>{props.name}</h2>
            <hr/>
            <h3>ID:{props.id}</h3>
            <h4>{props.status}</h4>
            <h4>{props.species}</h4>
            <h4>{props.gender}</h4>
            <h4>{props.origin}</h4>
         </div>
         <img src={props.image} alt='Imagen' />
         </Link> 
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
    myFavorites: state.myFavorites 
   }   
}


const mapDispatchToProps = (dispatch) => {
    return {
        addFav: (character) => dispatch (addFav(character)),     
        removeFav: (id) => dispatch (removeFav(id))
    }   
}



export default connect (mapStateToProps, mapDispatchToProps)(Card)