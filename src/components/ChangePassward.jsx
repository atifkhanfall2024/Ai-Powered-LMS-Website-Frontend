import axios from "axios"
import { useState } from "react"
import { BaseUrl } from "../utils/constant"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners"
import { useNavigate } from "react-router-dom"

const ChangePassword = ()=>{

    const [password1 , setpassword1] = useState("")
    const [password2 , setpassword2] = useState("")
    const [Loading , setLoading] = useState(false)
    const [Error , setError] = useState("")
    const navigate = useNavigate()

     
 

       const ChangePass = async(e)=>{
             e.preventDefault()

 if (password1 !== password2) {
    setError("Passwords do not match");
    toast.error("Passwords do not match");
    return;
  }

          try{
                setLoading(true)
            const res = await axios.post(BaseUrl+"/change/passward" , {password : password1} , {withCredentials:true})
            
            console.log(res?.data);
            setLoading(false)
            toast.success("Passward Change SuccessFully")
            navigate("/login")

          }catch(err){
               console.log(err?.response?.data?.message || err.message);
                         
                              setError(err?.response?.data?.message || err.message)
                              setLoading(false)
                              toast.error(err?.response?.data?.message || err.message)
          }
       }
     


    return(
       <div className="flex items-center justify-center h-screen bg-cover bg-center relative"
     style={{
       backgroundImage:
         "url('https://static.vecteezy.com/system/resources/previews/000/689/978/original/abstract-digital-background-with-connecting-lines-and-dots-vector.jpg')",
     }}>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black opacity-40"></div>

  {/* Form */}
  <form className="relative bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col items-center">
    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Change Password</h2>

    <input
      type="password"
      value={password1}
      onChange={(e)=> setpassword1(e.target.value)}
      placeholder="Enter new password"
      className="border border-gray-300 rounded-lg px-8 py-4 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-black"
    />

    <input
      type="password"
       value={password2}
      onChange={(e)=> setpassword2(e.target.value)}
      placeholder="Confirm new password"
      className="border border-gray-300 rounded-lg px-8 py-4 mb-6 w-full focus:outline-none focus:ring-2 focus:ring-black"
    />
     <p className="text-red-500 mb-3">{Error}</p>
    <button
      type="submit"
      className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-300" disabled={Loading}
      onClick={ChangePass}
    >
      {Loading ? <ClipLoader size={30} color="white" /> : "Change Password"}
    </button>
  </form>
</div>

    )
}

export default ChangePassword