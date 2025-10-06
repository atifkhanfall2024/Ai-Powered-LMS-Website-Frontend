import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Body from './components/Body'
import Auth from './components/Signup'
import Login from './components/Login'
import Feed from './components/Feed'
import { Provider } from 'react-redux'
import Store from './Redux/store'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from './components/Profile'
import Forgot from './components/ForgotPassward'
import VerifyOTp from './components/VerifyOtp'
import ChangePassword from './components/ChangePassward'

function App() {
  return(
   <div>
    <Provider store={Store}>
   <BrowserRouter basename='/'>
 
   <Routes>
      <Route path='/signup' element={<Auth/>} />
        <Route path='/login' element={<Login/>} />
         <Route path='/forgot' element={<Forgot/>} />
          <Route path='/verifyotp' element={<VerifyOTp/>} />
          <Route path='/changepassword' element={<ChangePassword/>} />
    <Route path='/' element={<Body/>}>
        <Route path='/feed' element={<Feed/>}/>
      
          <Route path='/profile' element={<Profile/>} />
    </Route>
   </Routes>
<ToastContainer position="top-right" autoClose={3000} />
   </BrowserRouter>
   </Provider>
   </div>
  )
}

export default App
