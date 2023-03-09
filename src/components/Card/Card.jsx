
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


const Detalles =  Styles.p`
   color: #212121;
   border: 2px solid white;
   border-color:#DCEDC8;
   font-size: 1.4em;
`;



export default function Card({id, name, species,gender, image, onClose}){
   return(
      <div>
         <Boton onClick={()=>onClose(id)}>X</Boton>
         <Detalles>Name:{name} </Detalles>
         <Detalles>Species:{species} </Detalles>
         <Detalles>Gender:{gender} </Detalles>
         <img src={image} alt="" />
      </div>
   )
}


