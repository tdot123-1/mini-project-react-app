import ListItem from "./ListItem";


const RentalsList = ({ handleDelete, apartments, handleFavorite }) => {

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
                rating={apartment.review_scores_rating}
                isFavorite={apartment.favorite}
                handleDelete={handleDelete}
                handleFavorite={handleFavorite}
                />
            ))}
        </ul>
    )
}

export default RentalsList