import AddRentalForm from "../components/AddRentalForm"

const AddRentalPage = ({ handleAddRental }) => {
    return (
        <div>
            <h1>Add new rental</h1>
            <AddRentalForm handleAddRental={handleAddRental}/>
        </div>
    )
}

export default AddRentalPage;