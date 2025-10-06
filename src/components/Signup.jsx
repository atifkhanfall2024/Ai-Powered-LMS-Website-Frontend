import { useState } from "react";
import Pic from "../assets/vc.jpg"
import axios from "axios";
import { BaseUrl } from "../utils/constant";

import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/UserSlice";
const Auth = ()=>{


    const [name , setName] = useState("")
    const [Email , setEmail] = useState("")
    const [password , setpassword] = useState("")
    const [role , setrole] = useState("")
    const [Error , setError] = useState('')
    const [Loading , setLoading] = useState(false)


    const navigate = useNavigate()
    const dispatch = useDispatch()

   async function HandleAuth(e){
        e.preventDefault()
     try{
         setLoading(true)
          const res = await axios.post(BaseUrl+'/signup' ,{
        fullName:name,
        email :Email,
        password,
        role
    }, {withCredentials:true})
      
     dispatch(addUser(res?.data))
     navigate('/login')
      //console.log(res.data);
      setLoading(false)
     toast.success('SignUp Success !')

     }catch(err){
        setLoading(false)
        toast.error(err?.response?.data?.message)
        setError(err?.response?.data || err.message)
        console.log(err?.response?.data || err.message);
     }
    
    }

    const GoogleAuth = async(e)=>{
           e.preventDefault()

           try{
           
            // here i will call google auth of utils 

          const response = await signInWithPopup(auth, provider);

    if (!response?.user) {
      throw new Error("Google sign-in failed. No user returned.");
    }

    const googleUser = response.user;
    const fullName = googleUser.displayName;
    const email = googleUser.email;


            // now main thing is here that this data also push into database

            const res = await axios.post(BaseUrl+'/google/auth' , {fullName , email , role} , {withCredentials:true})

                 
     dispatch(addUser(res?.data))
     navigate('/feed')
      //console.log(res.data);
      //setLoading(false)
     toast.success('SignUp Success !')

           }catch(err){
               toast.error(err?.response?.data?.message)
        setError(err?.response?.data || err.message)
        console.log(err?.response?.data || err.message);
           }
    }

   return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="flex bg-white rounded-2xl shadow-lg w-[800px]">
    
  
    <div className="w-1/2 p-8">
      <h2 className="text-2xl font-bold text-center mb-4">Let's get Started</h2>
      <p className="text-gray-500 text-center mb-6">Create your account</p>

      <form className="space-y-4">
        <input
          type="text"
          value={name}
          placeholder="Your name"
          onChange={(e)=> setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="email"
          value={Email}
          onChange={(e)=> setEmail(e.target.value)}
          placeholder="Your email"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <input
          type="password"
          value={password}
          onChange={(e)=> setpassword(e.target.value)}
          placeholder="Your password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />

        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="role" value="student" checked = {role === "student"} onChange={(e)=> setrole(e.target.value)}  />
            Student
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="role" value="educator" checked = {role === "educator"} onChange={(e)=> setrole(e.target.value)} />
            Educator
          </label>
        </div>
         <p className="text-red-500">{Error}</p>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition" disabled={Loading} onClick={HandleAuth}
        >
         {Loading ? <ClipLoader size={30} color="white"/> : "Sign Up"}
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-500">Or continue with</p>
        <button className="w-full mt-2 border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition" onClick={GoogleAuth}>
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Google
        </button>
      </div>

      <p className="mt-6 text-center text-gray-500">
        Already have an account?{" "}
        <a href="/login" className="text-indigo-500 font-semibold">
          Login
        </a>
      </p>
    </div>

    {/* Right Side → Picture / Logo */}
    <div className="w-1/2 bg-black flex items-center justify-center rounded-r-2xl">
      <img
        src={Pic}
        alt="Logo"
        className="w-40"
      />
      <span className="text-2xl text-white">Virtual Courses</span>
    </div>
  </div>
</div>


  );
}

export default Auth