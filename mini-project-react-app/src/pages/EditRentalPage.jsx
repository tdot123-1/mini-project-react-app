import Form from "../components/Form";
import { useParams } from "react-router-dom";

const EditRentalPage = ({ apartments, handleEditRental }) => {

    // get current id from parameters
    const { apartmentId } = useParams();

    // find current apartment by id
    const currentApartment = apartments.find((apartment) => apartment.id === apartmentId);

    // initial state for form 
    const initialForm = {

        name: currentApartment.name,
        city: currentApartment.city,
        country: currentApartment.country,
        price: currentApartment.price,
        description: currentApartment.description,
        host_name: currentApartment.host_name,
        property_type: currentApartment.property_type,
        room_type: currentApartment.room_type,
        accommodates: currentApartment.accommodates,
        bedrooms: currentApartment.bedrooms,
        beds: currentApartment.beds,
        bathrooms: currentApartment.bathrooms,
        cleaning_fee: currentApartment.cleaning_fee,
    }
    
    return (
        <div>
            <h1>Edit Rental</h1>
            <Form handleFormData={handleEditRental} initialState={initialForm} currentApartment={currentApartment} />
        </div>
    )
}

export default EditRentalPage;