import RentalsList from "../components/RentalsList";


const FavoritesPage = ({ favorites, handleFavorite}) => {


    return ( 
        <div className="favorites-page">
            <h1>Favorites</h1>
            <RentalsList apartments={favorites} handleFavorite={handleFavorite} />
        </div>
     );
}
 
export default FavoritesPage;