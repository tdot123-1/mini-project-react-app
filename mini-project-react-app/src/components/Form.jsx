import { useState } from "react";
import { useNavigate } from "react-router-dom";

// general form used for edit && add
// handle data function is passed down from App 
// initialState + currentApartment are passed down from page

const Form = ({ handleFormData, initialState, currentApartment }) => {

    const navigate = useNavigate();

    // current state of form info
    const [formInput, setFormInput] = useState(initialState);

    // reset form to initial state after submit
    const resetForm = () => {
        setFormInput(initialState);
    }

    // handle form input, update existing form state
    const handleInput = (event) => {
        const newInput = event.target.value;
        setFormInput((prevState) => ({
            ...prevState,
            [event.target.name]: newInput,
        }));
    }

    // prevent default, handle data, reset input fields
    const handleSubmit = (event) => {
        event.preventDefault();
        
        // if an existing item is updated, have an id to pass to function
        let id;

        if (currentApartment) {
            id = currentApartment.id
        }

        // handle form data in App, reset form, navigate to correct page
        handleFormData(formInput, id);
        resetForm();

        currentApartment ?
        navigate(`/details/${currentApartment.id}`) :
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
                    <option value="Apartment">Apartment</option>
                    <option value="House">House</option>
                    <option value="Other">Other</option>
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

export default Form;