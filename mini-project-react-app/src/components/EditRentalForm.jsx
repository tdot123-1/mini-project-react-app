import { useState } from "react"

const EditRentalForm = ({ currentApartment, handleEditRental }) => {

    const [formInput, setFormInput] =  useState({

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
        beds: currentApartment.bed,
        bathrooms: currentApartment.bathrooms,
        cleaning_fee: currentApartment.cleaning_fee,
    });

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
        handleEditRental(formInput, currentApartment.id);
        //resetForm();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name
                <input type="text" 
                    name="name"
                    value={formInput.name}
                    onChange={handleInput}
                />
            </label>

            <label>
                City
                <input type="text" 
                    name="city"
                    value={formInput.city}
                    onChange={handleInput}
                />
            </label>

            <label>
                Country
                <input type="text"
                    name="country"
                    value={formInput.country}
                    onChange={handleInput}
                />
            </label>

            <label>
                Price
                <input type="number" placeholder="Total price in euros"
                    min={1}
                    max={9999}
                    name="price"
                    value={formInput.price}
                    onChange={handleInput}
                />
            </label>

            <label>
                Description
                <input type="textarea"
                    name="description"
                    value={formInput.description}
                    onChange={handleInput}
                />
            </label>

            <label>
                Host name
                <input type="text"
                    name="host_name"
                    value={formInput.host_name}
                    onChange={handleInput}
                />
            </label>

            <label>
                Property type
                <select name="property_type"
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
                Room type
                <select name="room_type"
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
                Accommodates
                <input type="number" 
                    min={1}
                    max={99}
                    name="accomodates"
                    value={formInput.accommodates}
                    onChange={handleInput}
                />
            </label>

            <label>
                Bedrooms
                <input type="number" 
                    min={1} 
                    max={99}
                    name="bedrooms"
                    value={formInput.bedrooms}
                    onChange={handleInput}
                />
            </label>

            <label>
                Beds
                <input type="number" 
                    min={1}
                    max={99}
                    name="beds"
                    value={formInput.beds}
                    onChange={handleInput}
                />
            </label>

            <label>
                Bathrooms
                <input type="number"
                    min={1}
                    max={99} 
                    name="bathrooms"
                    value={formInput.bathrooms}
                    onChange={handleInput}
                />
            </label>

            <label>
                Cleaning fee
                <input type="number" 
                    min={0}
                    max={9999}
                    name="cleaning_fee"
                    value={formInput.cleaning_fee}
                    onChange={handleInput}
                />
            </label>

            <button type="submit">Submit</button>
        </form>
    )
}

export default EditRentalForm;