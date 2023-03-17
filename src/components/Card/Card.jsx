import { Link } from 'react-router-dom';
import Styles from 'styled-components';
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from "../../redux/actions";
import { useState } from 'react';

const Boton = Styles.a`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 5rem;
background: #689F38;
color: white;
border: 2px solid white`;



function Card({id, name,status, species,gender, image, onClose, addFavorite, removeFavorite}){

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         removeFavorite(id);
      }else{
         setIsFav(true);
         addFavorite({
            id, name,status, species,gender, image, onClose, addFavorite, removeFavorite
         })
      }
   }

   return(
      <div>
         <Boton onClick={()=>onClose(id)}>X</Boton>
         <Link to={`/detail/${id}`}>
            <h2>Name:{name}</h2>
         </Link>
         <img src={image} alt="" />
         <h2>Status:{status}</h2>
         <h2>Species:{species} </h2>
         <h2>Gender:{gender}</h2>
      </div>
   )
}

const mapDispatchToProps = (dispatch) => {
   return{
      addFavorite: (character)=> {dispatch(addFavorite(character))},
      removeFavorite: (id) => {dispatch(removeFavorite(id))}
   }
}

export default connect(null, mapDispatchToProps )(Card);