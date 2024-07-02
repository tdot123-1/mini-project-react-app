import { Link } from "react-router-dom";

const ListItem = ({ 
    name, 
    country, 
    city, 
    handleDelete, 
    id, 
    price, 
    rating,
    isFavorite, 
    apartments, 
    handleFavorite,
}) => {

    const bgColor = {
        backgroundColor: isFavorite ? "rgb(93, 186, 93)" : "rgb(4, 4, 186)"
    }

    return (
        <li className="list-item">
            <Link to={`/details/${id}`}>
                <h3>{name}</h3>
            </Link>
            <p><span>Location: </span>{country} {city}</p>
            <div className="labels-div">
                {price < 100 && <p className="label deal">Great Deal!</p>}
                {rating > 90 && <p className="label rating">Top Rated!</p>}
            </div>
            <p><span>Price: </span>{price} €</p>
            {handleDelete && <button className="delete-btn button" onClick={() => handleDelete(id, apartments)}>DELETE</button>}
            <button className="button" onClick={() => handleFavorite(id, apartments)} 
            style={{backgroundColor: isFavorite ? "rgb(93, 186, 93)" : "rgb(4, 4, 186)"}}>
                {isFavorite ?
                 <span>unfavorite</span> :
                 <span>favorite</span>
                }
            </button>
        </li>
    )
}

export default ListItem;