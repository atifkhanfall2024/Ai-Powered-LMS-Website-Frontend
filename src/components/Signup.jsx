import { useState } from "react";
import Pic from "../assets/vc.jpg"
import axios from "axios";
import { BaseUrl } from "../utils/constant";

import { useNavigate } from "react-router-dom";
const Auth = ()=>{


    const [name , setName] = useState("")
    const [Email , setEmail] = useState("")
    const [password , setpassword] = useState("")
    const [Role , setRole] = useState("")
    const [Error , setError] = useState('')


    const navigate = useNavigate()


   async function HandleAuth(e){
        e.preventDefault()
     try{
          const res = await axios.post(BaseUrl+'/signup' ,{
        fullName:name,
        email :Email,
        password,
        role:Role
    }, {withCredentials:true})
      
     //dispatch(addUser(res?.data))
     navigate('/login')
      //console.log(res.data);


     }catch(err){
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
            <input type="radio" name="role" value="student" checked = {Role === "student"} onChange={(e)=> setRole(e.target.value)}  />
            Student
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="role" value="educator" checked = {Role === "educator"} onChange={(e)=> setRole(e.target.value)} />
            Educator
          </label>
        </div>
         <p className="text-red-500">{Error}</p>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition" onClick={HandleAuth}
        >
          Sign Up
        </button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-500">Or continue with</p>
        <button className="w-full mt-2 border py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition">
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