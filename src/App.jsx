import './App.css'
import { BrowserRouter , Routes , Route, Navigate } from 'react-router-dom'
import Body from './components/Body'
import Auth from './components/Signup'
import Login from './components/Login'
import Feed from './components/Feed'
import { Provider, useSelector } from 'react-redux'
import Store from './Redux/store'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from './components/Profile'
import Forgot from './components/ForgotPassward'
import VerifyOTp from './components/VerifyOtp'
import ChangePassword from './components/ChangePassward'
import EditProfile from './components/EditProfile'
import DashBoard from './components/DashBoard'
import Courses from './components/Courses'
import Create_Courses from './components/Create_Course'
import GetCreatorCourses from './CustomHooks/GetCreatorCourses'

function App() {

  GetCreatorCourses()
  const user = useSelector(store=>store?.user)
  return(
   <div>
   
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
          <Route path='/editprofile' element={<EditProfile/>} />
          <Route path='/dash' element={user?.role==="educator"?<DashBoard/>: <Navigate to={'/feed'} />} />
          <Route path='/create/courses' element={user?.role==="educator"?<Courses/>: <Navigate to={'/feed'} />} />
            <Route path='/create/course' element={user?.role==="educator"?<Create_Courses/>: <Navigate to={'/feed'} />} />
          
    </Route>
   </Routes>
<ToastContainer position="top-right" autoClose={3000} />
   </BrowserRouter>
   
   </div>
  )
}

export default App
