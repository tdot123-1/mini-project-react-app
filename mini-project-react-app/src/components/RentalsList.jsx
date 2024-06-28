import ListItem from "./ListItem";


const RentalsList = ({ handleDelete, apartments }) => {

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
                handleDelete={handleDelete}
                apartments={apartments}
                />
            ))}
        </ul>
    )
}

export default RentalsList