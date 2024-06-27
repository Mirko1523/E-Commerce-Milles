import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './Components/navBar/navBar'
import HomePage from './Components/Home/Home'

function App() {
return (   
    <div>
      <div>
    <Nav />
    </div>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      </Routes>  
    </div>
    
  )
}

export default App
