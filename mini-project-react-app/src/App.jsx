// add navigation after submitting forms
// rethink page structure (?)
// style forms


import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from "./components/Sidebar"

import DashboardPage from './pages/DashboardPage'
import AboutPage from './pages/AboutPage'
import DetailsPage from './pages/DetailsPage'
import AddRentalPage from './pages/AddRentalPage'
import EditRentalPage from './pages/EditRentalPage'
import NotFoundPage from './pages/NotFoundPage'

import rentalsData from "./assets/rental-data/rentals.json"

import { v4 as uuidv4 } from "uuid"

import { Route, Routes, } from 'react-router-dom'
import { useState } from 'react'

// lift up state 

function App() {

  const apartmentsArr = rentalsData.results;

  const [apartments, setApartments] = useState(apartmentsArr);

  // handle delete by using array and current array of apartments (rentals)
  const handleDelete = (id, rentals) => {
      const prevState = [...rentals];
      const updatedApartmentsArr = prevState.filter(apartment => apartment.id !== id);
      setApartments(updatedApartmentsArr);
  }

  // add rental to list of apartments
  const handleAddRental = (formInput) => {

    const prevState = [...apartments];

    const newId = uuidv4();

    const newRental = formInput;
    newRental.id = newId

    const updatedApartments = [newRental, ...prevState];

    setApartments(updatedApartments)
  }

  const handleEditRental = (formInput, id) => {
    const changedRental = apartments.find((apartment) => apartment.id === id);

    // need to update
    changedRental.name = formInput.name;
    changedRental.city = formInput.city;
    changedRental.country = formInput.country;
    changedRental.price = formInput.price;
    changedRental.description = formInput.description;
    changedRental.host_name = formInput.host_name;
    changedRental.property_type = formInput.property_type;
    changedRental.room_type = formInput.room_type;
    changedRental.accommodates = formInput.accommodates;
    changedRental.bedrooms = formInput.bedrooms;
    changedRental.beds = formInput.beds;
    changedRental.bathrooms = formInput.bathrooms;
    changedRental.cleaning_fee = formInput.cleaning_fee;

    const prevState = [...apartments];

    setApartments(prevState) ;

  }

  
  return (
    <div className='App'>
      <Navbar />
      <section className='content'>
        <Sidebar />
        <Routes>
          <Route path="/" element={ <DashboardPage handleDelete={handleDelete} apartments={apartments}/>}/>
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/details/:apartmentId" element={<DetailsPage  apartments={apartments} />} />
          <Route path="/add-rental" element={ <AddRentalPage handleAddRental={handleAddRental} />} />
          <Route path="/edit-rental/:apartmentId" element={<EditRentalPage apartments={apartments} handleEditRental={handleEditRental} />} />

          <Route path="*" element={ <NotFoundPage /> } />
        </Routes>
      </section>
      <Footer />
    </div>
  )
}

export default App
