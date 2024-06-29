import { useParams, Link } from "react-router-dom";

const DetailsPage = ({ apartments }) => {

    // get current id from parameters
    const { apartmentId } = useParams();

    // find current apartment by id
    const currentApartment = apartments.find((apartment) => apartment.id === apartmentId);

    return (
        <div className="details-page">
            <h1>{currentApartment.name}</h1>

            <div className="btn-div edit-btn-div">
                <Link to={`/edit-rental/${currentApartment.id}`}>
                    <button className="button">Edit</button>
                </Link>
            </div>
            
            
            <article className="description">
                <p>{currentApartment.description}</p>
                <h2>{currentApartment.host_name}</h2>
            </article>
            <p className="review-score"><span>Review score</span>: {currentApartment.review_scores_rating}</p>

            <div className="tables-div">
                <table className="prop-details table">
                    <thead>
                        <tr>
                            <th className="table-head">Property details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Property type:</th>
                            <td>{currentApartment.property_type}</td>
                        </tr>
                        <tr>
                            <th>Room type:</th>
                            <td>{currentApartment.room_type}</td>
                        </tr>
                        <tr>
                            <th>Accommodates:</th>
                            <td>{currentApartment.accommodates}</td>
                        </tr>
                        
                        <tr>
                            <th>Bedrooms:</th>
                            <td>{currentApartment.bedrooms}</td>
                        </tr>
                        <tr>
                            <th>Beds:</th>
                            <td>{currentApartment.beds}</td>
                        </tr>
                        <tr>
                            <th>Bathrooms:</th>
                            <td>{currentApartment.bathrooms}</td>
                        </tr>
                    </tbody>
                </table>
                <table className="price-details table">
                    <thead>
                        <tr>
                            <th className="table-head">Pricing details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Price:</th>
                            <td>€ {currentApartment.price},-</td>
                        </tr>
                        <tr>
                            <th>Cleaning fee:</th>
                            <td>€ {currentApartment.cleaning_fee},-</td>
                        </tr>
                        <tr>
                            <th>Total cost:</th>
                            <td>€ {currentApartment.price + currentApartment.cleaning_fee},-</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DetailsPage;