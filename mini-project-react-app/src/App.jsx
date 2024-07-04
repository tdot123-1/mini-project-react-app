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

function App() {

  const [apartments, setApartments] = useState(rentalsData.results);

  const [favorites, setFavorites] = useState([]);

  // handle delete by using id and filtering out out of state var
  const handleDelete = (id) => {

    // delete from favorites 
    setFavorites((prevState) => (prevState.filter(apartment => apartment.id !== id)));

    // delete from dashboard
    setApartments((prevState) => (prevState.filter(apartment => apartment.id !== id)));
  }

  // handle favorites
  const handleFavorite = (id) => {

    // handle add/remove from list of favorites
    setFavorites((prevState) => { 
      // find rental in 'apartments' state var by id
      const rental = apartments.find(apartment => apartment.id === id);

      // copy rental object and update its favorite prop
      const updatedRental = {...rental, favorite: !rental.favorite };

      // either add rental to list of favs or remove from list of favs
      return updatedRental.favorite ?
      [updatedRental, ...prevState] :
      prevState.filter(apartment => apartment.id !== id)
    });

    // set apartments to reflect change in 'favorite' property
    setApartments((prevState) => prevState.map(apartment => 
      apartment.id === id ? {...apartment, favorite: !apartment.favorite} : apartment
    ));
  }

  // add rental to list of apartments
  const handleAddRental = (formInput) => {

    // generate unique id
    const newId = uuidv4();

    // create new rental list item from form input
    const newRental = formInput;
    newRental.id = newId

    // set state of apartments array
    setApartments((prevState) => ([newRental, ...prevState]));
  }


  // update existing rental
  const handleEditRental = (formInput, id) => {

    // functional update to apartments state,
    setApartments((prevState) =>

      // map over most recent state
      prevState.map((apartment) =>

        // if id matches, set object properties with form input
        apartment.id === id ?
        {...apartment, ...formInput}
        : apartment
      ) 
    );

    // make sure favorites list also reflects changes to item 
    setFavorites((prevState) => 
      prevState.map((apartment) => 
        apartment.id === id ?
        {...apartment, ...formInput} :
        apartment
      )
    );
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
