import axios from "axios";
import { BaseUrl } from "../utils/constant";
import { useState } from "react";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const VerifyOTp = ()=>{

const [otp1, setOtp1] = useState("");
const [otp2, setOtp2] = useState("");
const [otp3, setOtp3] = useState("");
const [otp4, setOtp4] = useState("");
const [otp5, setOtp5] = useState("");
const [otp6, setOtp6] = useState("");
const [Error , setError] = useState("")
const [Loading , setLoading] = useState(false)
const navigate = useNavigate()

const finalOtp = [otp1, otp2, otp3, otp4, otp5, otp6].join("");


const VerifyOtp = async(e)=>{
            e.preventDefault()
    try{
        setLoading(true)
        const res = await axios.post(BaseUrl+'/verify/otp' , {otp:finalOtp} , {withCredentials:true})

        console.log(res?.data);
        navigate('/changepassword')
        setLoading(false)
        toast.success("Verification is Success")
    }catch(err){
                console.log(err?.response?.data?.message || err.message);
                navigate('/forgot')
                 setError(err?.response?.data?.message || err.message)
                 setLoading(false)
                 toast.error(err?.response?.data?.message || err.message)
    }
     
}


    return(
        <div
  className="relative flex items-center justify-center h-screen bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://static.vecteezy.com/system/resources/thumbnails/001/410/879/small_2x/e-learning-online-education-futuristic-banner-vector.jpg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-40"></div>

  {/* OTP Form */}
  <form className="relative bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col items-center">
    <h2 className="text-2xl font-semibold mb-4 text-center">Enter 6-Digit OTP</h2>

     <div className="flex gap-3 mb-5">
      <input
        type="text"
        maxLength="1"
        value={otp1}
        onChange={(e) => setOtp1(e.target.value)}
        className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        type="text"
        maxLength="1"
        value={otp2}
         onChange={(e) => setOtp2(e.target.value)}
        className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        type="text"
        maxLength="1"
        value={otp3}
          onChange={(e) => setOtp3(e.target.value)}
        className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        type="text"
        maxLength="1"
        value={otp4}
          onChange={(e) => setOtp4(e.target.value)}
        className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        type="text"
        maxLength="1"
        value={otp5}
           onChange={(e) => setOtp5(e.target.value)}
        className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
      <input
        type="text"
        maxLength="1"
        value={otp6}
           onChange={(e) => setOtp6(e.target.value)}
        className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
   <p className="text-red-500 mb-3">{Error}</p>
    <button
      type="submit"
      className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300 w-full" disabled={Loading}
      onClick={VerifyOtp}
    >
      {Loading ? <ClipLoader size={30} color="white" /> : "Verify Otp"}
    </button>
  </form>
</div>

    )
}

export default VerifyOTp