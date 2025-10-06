import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Forgot = ()=>{

    const [Email , setEmail] = useState()
    const [Error , setError] = useState()
    const [Loading , setLoading] = useState(false)
    const Navigate = useNavigate()

    const HandleOtp = async(e)=>{
        e.preventDefault()   
       try{
          setLoading(true)
       const res = await axios.post(BaseUrl+"/send/otp" , {email:Email} , {withCredentials:true})
        
        console.log(res?.data);
        setLoading(false)
        toast.success('OTP is send to your email')
        Navigate('/verifyotp')


       }catch(err){
          console.log(err?.response?.data?.message || err.message);
          setError(err?.response?.data?.message || err.message)
          setLoading(false)
          toast.error(err?.response?.data?.message || err.message)
       }


    }
      
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/001/410/879/small_2x/e-learning-online-education-futuristic-banner-vector.jpg')", // you can change this image URL
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Form */}
      <form className="relative bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col items-center">
        <input
          type="email"
          value={Email}
          placeholder="Enter your email"
          className="border border-gray-300 rounded-lg px-8 py-4 mb-4 w-[100%] focus:outline-none focus:ring-2 focus:ring-black"
          onChange={(e)=> setEmail(e.target.value)}
        />
        <Link to = {'/login'}><p className=" mb-3">Back to login</p></Link>
        <p className="text-red-500 mb-3">{Error}</p>
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300"
          disabled={Loading}
          onClick={HandleOtp}
        >
           {Loading ? <ClipLoader size={30} color="white" /> : "SEND OTP"}
        </button>
      </form>
    </div>
  );
}

export default Forgot