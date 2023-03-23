import { useSelector } from "react-redux";
import Card from "../Card/Card";

const Favorites = () => {
    const favorites = useSelector((state) => state.favorites)

    return (
        <>
        {
            favorites.map(({id, name, status, species, gender, image, onClose}) =>{
                return <Card
                id = {id}
                name = {name}
                status= {status}
                species = {species}
                gender = {gender}
                image = {image}
                onClose = {onClose}
                />
            })
        }
        </>
    )
}

export default Favorites;