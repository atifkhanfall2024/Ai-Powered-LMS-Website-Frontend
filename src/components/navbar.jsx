import { useDispatch, useSelector } from "react-redux"
import logo from "../assets/vc.jpg"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BaseUrl } from "../utils/constant"
import { removeUser } from "../Redux/UserSlice"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners"
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navbar = ()=>{

const navigate = useNavigate()
const dispatch = useDispatch()
const[toogle , settoogle] = useState(true)
const [Loading ,setLoading] = useState(false)
const user = useSelector(store=>store?.user)
const [Show , setShow] = useState(false)
const [ShowHam , setShowHam] = useState(false)
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
      src={user?.photoUrl} // sample profile image
      alt="Profile"
      className="w-10 h-10 rounded-full border-2 border-white cursor-pointer hidden lg:block" onClick={()=> setShow(prev=>!prev)}
    />
    {/* Dropdown Menu (just below the image) */}
{Show && <div className="absolute top-16 right-2 bg-black shadow-lg rounded-lg py-2 w-48 z-20">
  <p className="px-4 py-2 text-white font-semibold border-b border-gray-700">
    {user?.fullName || "Guest"}
  </p>
  <button className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition">
    My Courses
  </button>
 <Link to={'/profile'}> <button className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition">
    My Profile
  </button></Link>
</div>}


    {/* Dashboard Button */}
   {user?.role === "educator" ? <button className="bg-black text-white  px-4 py-2 border-2 border-white rounded-lg hover:bg-gray-800 transition hidden lg:block">
      Dashboard
    </button>: ''}
    {!user && <Link to={'/login'}><button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition hidden lg:block">
      Login
    </button></Link>}
     
    {/* Logout Button */}
    {toogle && <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition hidden lg:block" disabled ={Loading}  onClick={Logout}>
     {Loading ? <ClipLoader size={30} color="white"/>: "Logout" }
    </button>}
    <GiHamburgerMenu className="w-[30px] h-[30px] lg:hidden block text-white cursor-pointer" onClick={()=> setShowHam(prev=>!prev)} />

    <div className={`top-0 fixed left-0 w-[100vw] h-[100vh] bg-[#000000d6] flex items-center justify-center flex-col gap-5 z-10 lg:hidden ${ShowHam ? "translate-x-0 transition duration-600" : "translate-x-[-100%] transition duration-600"}`}>
      <RxCross2  className="w-[35px] h-[35px] text-white absolute top-5 right-[7%] cursor-pointer" onClick={()=> setShowHam(prev=>!prev)}/>
         <img
      src="https://scontent-ams2-1.xx.fbcdn.net/v/t51.75761-15/515130132_18019037621711656_8274955609755911088_n.webp?stp=dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ns6TOKA92hQQ7kNvwG156xV&_nc_oc=AdlRCxnPmgEAA4HjMG7T3hGuOJN-fseJ-G0ICjY-Y5Ia7MMPb-I0FXb5imZeTBQlV-M&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=L36IzIFjtKyC9vyFl41MNg&oh=00_AfecruRba_Yz6lCddS_2Zmmzs2IxsSNojTzApGU81GD_Iw&oe=68E71420" // sample profile image
      alt="Profile"
      className="w-10 h-10 rounded-full border-2 border-white cursor-pointer " onClick={()=> setShow(prev=>!prev)}
    />
     <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
    My Courses
  </button>
  <Link to={'/profile'}><button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
    My Profile
  </button></Link>
    {user?.role === "educator" ? <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
      Dashboard
    </button>: ''}
    {!user && <Link to={'/login'}><button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
      Login
    </button></Link>}
    {toogle && <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition " disabled ={Loading}  onClick={Logout}>
     {Loading ? <ClipLoader size={30} color="white"/>: "Logout" }
    </button>}
        
    </div>
  </div>
</div>


 )
}

export default Navbar