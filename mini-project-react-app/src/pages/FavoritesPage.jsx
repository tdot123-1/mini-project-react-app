import RentalsList from "../components/RentalsList";


const FavoritesPage = ({ favorites, handleFavorite}) => {


    return ( 
        <div className="favorites-page">
            <h1>Favorites</h1>
            {
                favorites.length > 0 ?
                <RentalsList apartments={favorites} handleFavorite={handleFavorite} /> :
                <h3 className="warning">No favorites added</h3>
            }
            
        </div>
    );
}
 
export default FavoritesPage;