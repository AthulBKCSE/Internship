import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/signup'
import Navbar from './components/Navbar'
import Name from './components/Name'
import Select from './components/Select'
import { Route, Routes} from 'react-router-dom'
import Api from './components/api'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
  <Navbar/>
  <Routes>
    <Route path= '/login'element={<Login/>}/>
    <Route path= '/signup'element={<Signup/>}/>
    <Route path='/name' element={<Name/>}/>
    <Route path='/name3' element={<Select/>}/>
    <Route path='/api' element={<Api/>}/>
  </Routes>
    </>
  )
}

export default App
