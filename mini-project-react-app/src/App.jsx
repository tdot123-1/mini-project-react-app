// work on 'AboutPage'

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

    // get new array of current state of rentals list
    const prevState = [...apartments];

    // generate unique id
    const newId = uuidv4();

    // create new rental list item from form input
    const newRental = formInput;
    newRental.id = newId

    // add to start of array, set state 
    const updatedApartments = [newRental, ...prevState];

    setApartments(updatedApartments)
  }


  // update existing rental
  const handleEditRental = (formInput, id) => {

    // find rental to be changed from array of rentals
    const changedRental = apartments.find((apartment) => apartment.id === id);

    // populate rental object with existing properties and info from form
    const updatedRental = {
      ...changedRental,
      ...formInput,
    }

    // get copy of previous state
    const prevState = [...apartments];

    //create new array by updating editted apartment and copying the rest of the list 
    const updatedApartments = prevState.map((apartment) => (
      apartment.id === id ? 
      updatedRental : 
      apartment));

    setApartments(updatedApartments);
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
