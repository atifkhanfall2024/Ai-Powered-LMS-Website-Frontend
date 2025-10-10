import axios from "axios"
import { Outlet, useNavigate } from "react-router-dom"
import { BaseUrl } from "../utils/constant"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../Redux/UserSlice"
import { useEffect } from "react"
import Navbar from "./navbar"

const Body = ()=>{

     const dispatch = useDispatch()
     const navigate = useNavigate()

    const GetUser = async()=>{

       try{
         const res = await axios.get(BaseUrl+'/getuser' , {withCredentials:true})

          console.log(res.data);
          dispatch(addUser(res?.data))
          

         if (location.pathname === "/") {
        navigate("/feed");
      }
      

       }catch(err){
        console.log(err.message);
        dispatch(removeUser())
        navigate('/login')
        
    }}

    useEffect(()=>{
        GetUser()  
    } ,[])

    return(
        <div>
            <Navbar/>
        <Outlet/>
        </div>
    )
}


export default Body