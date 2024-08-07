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
    handleFavorite,
}) => {

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
            <div className="btn-div">

                {handleDelete && 
                <button className="delete-btn button" 
                onClick={() => handleDelete(id)}>
                    DELETE
                </button>}
                <button 
                    className={`button ${isFavorite && "favorite"}`} 
                    onClick={() => handleFavorite(id)} 
                >
                    {isFavorite ?
                    "unfavorite" :
                    "favorite"
                    }
                </button>
            </div>
        </li>
    )
}

export default ListItem;