
import { Link } from 'react-router-dom';
import Styles from 'styled-components';

const Boton = Styles.a`
display: inline-block;
border-radius: 3px;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 5rem;
background: #689F38;
color: white;
border: 2px solid white`;



export default function Card({id, name,status, species,gender, image, onClose}){
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


