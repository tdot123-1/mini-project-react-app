import EditRentalForm from "../components/EditRentalForm"
import { useParams } from "react-router-dom";

const EditRentalPage = ({ apartments, handleEditRental }) => {

     // get current id from parameters
     const { apartmentId } = useParams();

     // find current apartment by id
     const currentApartment = apartments.find((apartment) => apartment.id === apartmentId);
 
    return (
        <div>
            <h1>Edit Rental</h1>
            <EditRentalForm currentApartment={currentApartment} handleEditRental={handleEditRental}/>
        </div>
    )
}

export default EditRentalPage;