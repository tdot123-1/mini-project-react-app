import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRentalForm = ({ handleAddRental }) => {

    const navigate = useNavigate();

    // current state of form info
    const [formInput, setFormInput] = useState({
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
    });

    // set to empty form after submit
    const resetForm = () => {
        setFormInput({
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
        });
    }

    // handle form input, update existing state
    const handleInput = (event) => {
        const newInput = event.target.value;
        setFormInput((prevState) => ({
            ...prevState,
            [event.target.name]: newInput,
        }));
    }

    // prevent default, add to list of rentals, reset input fields
    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddRental(formInput);
        resetForm();
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit} className="form">
      
            <label>
                Name:
                <input type="text" placeholder="Name of your apartment"
                    required
                    name="name"
                    value={formInput.name}
                    onChange={handleInput}
                />
            </label>
            
            <label>
                City:
                <input type="text"
                    required
                    name="city"
                    value={formInput.city}
                    onChange={handleInput}
                />
            </label>

            <label>
                Country:
                <input type="text"
                    required
                    name="country"
                    value={formInput.country}
                    onChange={handleInput}
                />
            </label>

            <label>
                Price: €
                <input type="number" placeholder="Total price in euros"
                    required
                    min={1}
                    max={9999}
                    name="price"
                    value={formInput.price}
                    onChange={handleInput}
                />
            </label>

            <label>
                Description:
                <textarea rows="5" cols="33"
                    required
                    name="description"
                    value={formInput.description}
                    onChange={handleInput}
                />
            </label>

            <label>
                Host name:
                <input type="text"
                    required
                    name="host_name"
                    value={formInput.host_name}
                    onChange={handleInput}
                />
            </label>

            <label>
                Property type:
                <select name="property_type"
                    required
                    value={formInput.property_type}
                    onChange={handleInput}
                >
                    <option value="">--Select property type--</option>
                    <option value="apartment">Apartment</option>
                    <option value="house">House</option>
                    <option value="other">Other</option>
                </select>
            </label>

            <label>
                Room type:
                <select name="room_type"
                    required
                    value={formInput.room_type}
                    onChange={handleInput}
                >
                    <option value="">--Select room type--</option>
                    <option value="Entire home/apt">Entire home/apt</option>
                    <option value="Private room">Private room</option>
                    <option value="Shared room">Shared room</option>
                </select>
            </label>

            <label>
                Accommodates:
                <input type="number"
                    required 
                    min={1}
                    max={99}
                    name="accommodates"
                    value={formInput.accommodates}
                    onChange={handleInput}
                />
            </label>

            <label>
                Bedrooms:
                <input type="number"
                    required
                    min={1} 
                    max={99}
                    name="bedrooms"
                    value={formInput.bedrooms}
                    onChange={handleInput}
                />
            </label>

            <label>
                Beds:
                <input type="number" 
                    required
                    min={1}
                    max={99}
                    name="beds"
                    value={formInput.beds}
                    onChange={handleInput}
                />
            </label>

            <label>
                Bathrooms:
                <input type="number"
                    required
                    min={1}
                    max={99} 
                    name="bathrooms"
                    value={formInput.bathrooms}
                    onChange={handleInput}
                />
            </label>

            <label>
                Cleaning fee:
                <input type="number" 
                    required
                    min={0}
                    max={9999}
                    name="cleaning_fee"
                    value={formInput.cleaning_fee}
                    onChange={handleInput}
                />
            </label>
            <div className="btn-div">
                <button type="submit" className="button">Submit</button>
            </div>
        </form>
    )
}

export default AddRentalForm;