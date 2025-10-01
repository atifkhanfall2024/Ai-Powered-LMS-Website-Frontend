import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Body from './components/Body'
import Auth from './components/Signup'
import Login from './components/Login'

function App() {
  return(
   <div>
   <BrowserRouter basename='/'>
 
   <Routes>
    <Route path='/' element={<Body/>}>
        <Route path='/signup' element={<Auth/>} />
        <Route path='/login' element={<Login/>} />
    </Route>
   </Routes>

   </BrowserRouter>
   </div>
  )
}

export default App
