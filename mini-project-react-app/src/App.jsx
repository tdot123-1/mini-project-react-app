import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from "./components/Sidebar"

import DashboardPage from './pages/DashboardPage'
import AboutPage from './pages/AboutPage'
import DetailsPage from './pages/DetailsPage'
import NotFoundPage from './pages/NotFoundPage'

import { Route, Routes } from 'react-router-dom'


function App() {
  
  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={ <DashboardPage />}/>
        <Route path="/about" element={ <AboutPage /> } />
        <Route path="/details/:apartmentId" element={<DetailsPage />} />

        <Route path="*" element={ <NotFoundPage /> } />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
