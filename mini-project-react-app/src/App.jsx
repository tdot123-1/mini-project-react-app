
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import RentalsList from './components/RentalsList'


function App() {
  
  return (
    <div className='App'>
      <Navbar />
      <Sidebar />

      <section>
        <RentalsList />
      </section>
      
      <Footer />
    </div>
  )
}

export default App
