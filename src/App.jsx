import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Body from './components/Body'
import Auth from './components/Signup'
import Login from './components/Login'
import Feed from './components/Feed'
import { Provider } from 'react-redux'
import Store from './Redux/store'

function App() {
  return(
   <div>
    <Provider store={Store}>
   <BrowserRouter basename='/'>
 
   <Routes>
    <Route path='/' element={<Body/>}>
        <Route path='/' element={<Feed/>}/>
        <Route path='/signup' element={<Auth/>} />
        <Route path='/login' element={<Login/>} />
    </Route>
   </Routes>

   </BrowserRouter>
   </Provider>
   </div>
  )
}

export default App
