import { useDispatch, useSelector } from "react-redux"
import logo from "../assets/vc.jpg"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BaseUrl } from "../utils/constant"
import { removeUser } from "../Redux/UserSlice"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners"
const Navbar = ()=>{

const navigate = useNavigate()
const dispatch = useDispatch()
const[toogle , settoogle] = useState(true)
const [Loading ,setLoading] = useState(false)
const user = useSelector(store=>store?.user)
// calling logout api

const Logout = async(e)=>{
     e.preventDefault()
    try{
        const result = await axios.post(BaseUrl+'/logout' , {} , {withCredentials:true})
        console.log(result?.data);
        dispatch(removeUser())
        settoogle(false)
        setLoading(false)
        toast.success('Logout Success !')
        
    }catch(err){
        setLoading(false)
        toast.error(err?.response?.data || "Error Logout")
        console.log(err?.response?.data || err.message);
    }
}

useEffect(()=>{
    Logout()
} , [])
 

 return(
<div className="w-[100%] bg-[#00000047] h-[70px] fixed top-0 px-[40px] py-[10px] flex items-center justify-between z-10">
  {/* Left side - Logo */}
  <div className="flex items-center">
  <img
    src={logo}   // replace with your logo path
    alt="Logo"
    className="h-10 w-auto cursor-pointer"
  />
</div>

  {/* Right side - Profile + Buttons */}
  <div className="flex items-center gap-4">
    {/* Profile Icon */}
    <img
      src="https://www.w3schools.com/howto/img_avatar.png" // sample profile image
      alt="Profile"
      className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
    />

    {/* Dashboard Button */}
   {user?.role === "educator" ? <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
      Dashboard
    </button>: ''}
    {!user && <Link to={'/login'}><button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
      Login
    </button></Link>}
     
    {/* Logout Button */}
    {toogle && <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition" disabled ={Loading}  onClick={Logout}>
     {Loading ? <ClipLoader size={30} color="white"/>: "Logout" }
    </button>}
  </div>
</div>


    )
}

export default Navbar