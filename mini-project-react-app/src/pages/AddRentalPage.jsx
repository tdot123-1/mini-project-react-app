import Form from "../components/Form";

const AddRentalPage = ({ handleAddRental }) => {

    // initial state for form
    const initialForm = {
        name: "",
        city: "",
        country: "",
        price: 1,
        description: "",
        host_name: "",
        property_type: "",
        room_type: "",
        accommodates: 1,
        bedrooms: 1,
        beds: 1,
        bathrooms: 1,
        cleaning_fee: 0,
    }

    return (
        <div>
            <h1>Add new rental</h1>
            <Form handleFormData={handleAddRental} initialState={initialForm} />
        </div>
    )
}

export default AddRentalPage;