import { Link } from "react-router-dom";

const ListItem = ({ name, country, city, deleteItem, id, price}) => {


    return (
        <li className="list-item">
            <Link to={`/details/${id}`}>
                <h3>{name}</h3>
            </Link>
            <p>{country} {city}</p>
            {price < 100 && <p>Great price!</p>}
            <p>{price} €</p>
            <button className="delete-btn" onClick={() => deleteItem(id)}>DELETE</button>
        </li>
    )
}

export default ListItem;