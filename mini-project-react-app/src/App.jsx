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
import FavoritesPage from './pages/FavoritesPage'
import NotFoundPage from './pages/NotFoundPage'

import rentalsData from "./assets/rental-data/rentals.json"

import { v4 as uuidv4 } from "uuid"

import { Route, Routes, } from 'react-router-dom'
import { useState } from 'react'

// lift up state 

function App() {

  const apartmentsArr = rentalsData.results;

  const [apartments, setApartments] = useState(apartmentsArr);

  const [favorites, setFavorites] = useState([]);

  // handle delete by using array and current array of apartments (rentals)
  const handleDelete = (id, rentals) => {
    // delete from favorites  
    const updatedFavs = favorites.filter(apartment => apartment.id !== id);
    setFavorites(updatedFavs);

    // delete from dashboard
    const prevState = [...rentals];
    const updatedApartmentsArr = prevState.filter(apartment => apartment.id !== id);
    setApartments(updatedApartmentsArr);
  }

  // handle favorites
  const handleFavorite = (id, rentals) => {

    const addedToFav = rentals.find(rental => rental.id === id);

    if (addedToFav.favorite) {
      // remove from favorites
      addedToFav.favorite = false;

      setFavorites((prevState) => (prevState.filter(apartment => apartment.id !== id)));
    }
    else {
      // add to favorites
      addedToFav.favorite = true;

      setFavorites((prevState) => ([addedToFav, ...prevState]))
    }
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
          <Route path="/" element={ <DashboardPage handleDelete={handleDelete} apartments={apartments} handleFavorite={handleFavorite} />}/>
          <Route path="/about" element={ <AboutPage /> } />
          <Route path="/details/:apartmentId" element={<DetailsPage  apartments={apartments} />} />
          <Route path="/add-rental" element={ <AddRentalPage handleAddRental={handleAddRental} />} />
          <Route path="/edit-rental/:apartmentId" element={<EditRentalPage apartments={apartments} handleEditRental={handleEditRental} />} />
          <Route path="/favorites" element={<FavoritesPage favorites={favorites} handleFavorite={handleFavorite} />} />

          <Route path="*" element={ <NotFoundPage /> } />
        </Routes>
      </section>
      <Footer />
    </div>
  )
}

export default App
