import rentalsData from "../assets/rental-data/rentals.json"
import { useState } from "react"
import ListItem from "./ListItem";

const RentalsList = () => {

    const apartmentsArr = rentalsData.results;
    const favoritesArr = [];

    const [apartments, setApartments] = useState(apartmentsArr);
    const [favorites, setFavorites] = useState(favoritesArr);

    const deleteItemFunc = (id) => {
        const updatedApartmentsArr = apartments.filter(apartment => apartment.id !== id);
        setApartments(updatedApartmentsArr);
    }

    return (
        <ul className="apartments-list">
            {apartments.map((apartment) => (
                <ListItem 
                key={apartment.id}
                id={apartment.id} 
                name={apartment.name}
                country={apartment.country}
                city={apartment.city}
                price={apartment.price}
                deleteItem={deleteItemFunc}
                />
            ))}
        </ul>
    )
}

export default RentalsList