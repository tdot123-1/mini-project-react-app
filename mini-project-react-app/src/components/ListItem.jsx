const ListItem = ({ name, country, city, deleteItem, id, price }) => {

    return (
        <li className="list-item">
            <h3>{name}</h3>
            <p>{country} {city}</p>
            {price < 100 && <p>Great price!</p>}
            <p>{price} €</p>
            <button onClick={() => deleteItem(id)}>DELETE</button>
        </li>
    )
}

export default ListItem;