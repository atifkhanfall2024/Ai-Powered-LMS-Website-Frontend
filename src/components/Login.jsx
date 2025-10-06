import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../Redux/UserSlice";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import logo from "../assets/vc.jpg"
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
const Login = ()=>{

       const [Email , setEmail] = useState("")
        const [password , setpassword] = useState("")
        const [Error , setError] = useState("")
        const [Loading , setLoading] = useState(false)

        const navigate = useNavigate()
        const dispatch = useDispatch()

        const HandleLogin = async(e)=>{
            e.preventDefault()
            try{
                      
           setLoading(true)
        const res = await axios.post(BaseUrl+'/login' , {
            email:Email ,
            password
        } , {withCredentials:true})
        console.log(res.data);
        dispatch(addUser(res?.data))
        setLoading(false)
        toast.success('Login Successfully')
        navigate('/feed')
            }catch(err){
           
            setError(err?.response?.data || err.message)
            setLoading(false)
            toast.error(err?.response?.data?.message)
        console.log(err?.response?.data || err.message);
            }
        }

        // google login 

          const GoogleAuth = async(e)=>{
                   e.preventDefault()
        
                   try{
                   
                    // here i will call google auth of utils 
        
                    const response = await signInWithPopup(auth, provider)
        
                     if (!response?.user) {
              throw new Error("Google sign-in failed. No user returned.");
            }
                   // console.log(response?.user);
                    let user = response?.user
                    let fullName = user?.displayName
                    let email = user?.email
                    
        
                    // now main thing is here that this data also push into database
        
                    const res = await axios.post(BaseUrl+'/google/auth' , {fullName , email } , {withCredentials:true})
        
                         
             dispatch(addUser(res?.data))
             navigate('/feed')
              //console.log(res.data);
              //setLoading(false)
             toast.success('Login Success !')
        
                   }catch(err){
                       toast.error(err?.response?.data?.message)
                setError(err?.response?.data || err.message)
                console.log(err?.response?.data || err.message);
                   }
            }

 return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* Left side - Form */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold text-center mb-2">Welcome back</h2>
          <p className="text-gray-500 text-center mb-6">Login in your account</p>

          <form className="space-y-4" onSubmit={HandleLogin}>
            <input
              type="email"
              placeholder="Your Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              type="password"
              placeholder="Your password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <p className="text-red-500">{Error}</p>

            <button
              type="submit"
              disabled={Loading}
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              {Loading ? <ClipLoader size={30} color="white" /> : "Login"}
            </button>
            <Link to={'/forgot'}><a href="/forgot">Forgot Password ?</a></Link>
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
            Don’t have an account?{" "}
            <Link to="/signup" className="text-indigo-500 font-semibold">
              Sign Up
            </Link>
          </p>
        </div>

        {/* Right side - Logo Block */}
        <div className="hidden md:flex flex-1 bg-black justify-center items-center rounded-l-2xl">
          <div className="text-center text-white">
            <img src={logo} alt="Logo" className="w-32 mx-auto mb-4" />
            <h2 className="text-xl font-semibold">Virtual Courses</h2>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Login