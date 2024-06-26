const ListItem = ({ name, country, city, deleteItem, id, price, image }) => {

    return (
        <li className="list-item">
            <h3>{name}</h3>
            <p>{country} {city}</p>
            {price < 100 && <p>Great price!</p>}
            <p>{price} €</p>
            <button className="delete-btn" onClick={() => deleteItem(id)}>DELETE</button>
        </li>
    )
}

export default ListItem;