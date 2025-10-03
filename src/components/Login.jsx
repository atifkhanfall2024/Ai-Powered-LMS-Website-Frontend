import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const Login = ()=>{

       const [Email , setEmail] = useState("")
        const [password , setpassword] = useState("")
        const [Error , setError] = useState("")

        const navigate = useNavigate()

        const HandleLogin = async(e)=>{
           
            try{
                       e.preventDefault()

        const res = await axios.post(BaseUrl+'/login' , {
            email:Email ,
            password
        } , {withCredentials:true})
        console.log(res.data);
        navigate('/')
            }catch(err){
            setError(err?.response?.data || err.message)
        console.log(err?.response?.data || err.message);
            }
        }

 return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Welcome back</h2>
        <p className="text-gray-500 text-center mb-6">Login in your account</p>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Your Email"
            value={Email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          <input
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
           <p className="text-red-500">{Error}</p>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition" onClick={HandleLogin}
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500">Or continue</p>
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
          Don’t have an account?{" "}
          <a href="/signup" className="text-indigo-500 font-semibold">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login