import { Link } from "react-router-dom";

const ListItem = ({ name, country, city, deleteItem, id, price, rating}) => {


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
            <button className="delete-btn" onClick={() => deleteItem(id)}>DELETE</button>
        </li>
    )
}

export default ListItem;