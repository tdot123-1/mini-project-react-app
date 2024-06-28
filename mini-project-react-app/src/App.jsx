import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from "./components/Sidebar"

import DashboardPage from './pages/DashboardPage'
import AboutPage from './pages/AboutPage'
import DetailsPage from './pages/DetailsPage'
import AddRentalPage from './pages/AddRentalPage'
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

          <Route path="*" element={ <NotFoundPage /> } />
        </Routes>
      </section>
      <Footer />
    </div>
  )
}

export default App
