import Card from '../Card/Card';
import Styles from 'styled-components';

const Cartas = Styles.div`
   display: flex;
   justify-content: space-between;
`;


export default function Cards ({characters, onClose}) { 
return (
   <Cartas>
      {characters.map (({id, name, status, species, gender, image}) => {
         return (
            <Card
            key={id}
            id={id}
            name = {name}
            status= {status}
            species = {species}
            gender = {gender}
            image = {image}
            onClose = {onClose}
            />
            );
         })}
         </Cartas>)
}
