import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Components/navBar/navBar'
import HomePage from './Components/Home/Home'
import Putcarsinpage from './Components/Vehiculos/vehiculos'
import AboutUs from './Components/Nosotros/nosotros'
import Footer from './Components/Footer/footer'
import Services from './Components/Servicios/servicios'
import Contact from './Components/Contact/contact'
function App() {
return (   
    <div>
      <div>
    <Nav />
    </div>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/vehiculos' element={<Putcarsinpage/>}></Route>
      <Route path='/servicios' element={<Services/>}></Route>
      <Route path='/nosotros' element={<AboutUs/>}></Route>
      <Route path='/contactanos' element={<Contact/>}></Route>
      </Routes>  
 
     
    </div>
 
  )
}

export default App
