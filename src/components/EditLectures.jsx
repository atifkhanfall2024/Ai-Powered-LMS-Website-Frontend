import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { BaseUrl } from "../utils/constant";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import Lectures from "./Lectures";
const EditLectures = ()=>{
    const {courseid , lectureid} = useParams()
    const navigate = useNavigate()
    const [title , settitle] = useState('')
    const [isFree , setisFree] = useState(false)
    const [VedioUrl , setVedioUrl] = useState()
    const [Loading , setLoading] = useState(false)
     const [Loading1 , setLoading1] = useState(false)

  const EditProfile = async(e)=>{
    e.preventDefault()
    setLoading(true)
    try{
            const formData = new FormData();
    formData.append("title", title);
    formData.append("isFree", isFree);
    formData.append("VedioUrl", VedioUrl);
        const res = await axios.post(BaseUrl+'/edit/lecture/'+lectureid , formData , {withCredentials:true})

        console.log(res?.data);
        setLoading(false)
        toast.success("Update Lecture Success")
           settitle('')
        setVedioUrl('')
        setisFree(false)
        navigate('/create/courses')
     

        

    }catch(err){
         console.log(err?.message);
         setLoading(false)
         toast.error('Fail To Update Lecture')
    }
  }


  const Remove = async(e)=>{
           e.preventDefault()
           setLoading1(true)
   try{
     const res = await axios.delete(BaseUrl+'/remove/'+lectureid , {withCredentials:true})
       setLoading1(false)
      toast.success('Delete Lecture Success')
      navigate('/create/courses')

   }catch(err){
    console.log(err?.message);
     setLoading1(false)
         toast.error('Fail To Delete Lecture')
   }

  }

  

    return(
<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-white rounded-2xl shadow-lg w-[450px] p-6 space-y-6">
    <FaArrowLeft className="absolute left-[38%] top-[19%] w-[28px] h-[22px] cursor-pointer " onClick={()=> navigate('/lectures/'+courseid)} />
    <h2 className="text-2xl font-semibold text-gray-900 text-center">Update Your Lecture</h2>

    <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium" disabled={Loading1} onClick={Remove}>
      {Loading1?<ClipLoader size={30} color="white"/>:'Remove Lecture'}
    </button>

    <div className="space-y-4">
      {/* Title Input */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e)=>settitle(e.target.value)}
          placeholder="e.g. Introduction to Backend"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Video Upload */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Video *</label>
        <div className="flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2 bg-gray-50">
         <label className="bg-gray-800 text-white px-4 py-2 rounded-md cursor-pointer inline-block">
      Choose File
      <input type="file" className="hidden" onChange={(e)=>setVedioUrl(e.target.files[0])} />
    </label>
          <span className="text-gray-500 text-sm">No file chosen</span>
        </div>
      </div>

      {/* Checkbox */}
      <div className="flex items-center space-x-2">
        <input type="checkbox" className="h-4 w-4 text-blue-500" onChange={()=>setisFree(prev=>!prev)} />
        <label className="text-gray-700 text-sm font-medium">Is this video FREE</label>
      </div>
    </div>
      {Loading ? 'Vedio is uploading Please wait.............' : ''}
    {/* Update Button */}
    <button className="w-full bg-black hover:bg-gray-900 text-white py-2 rounded-lg font-medium"disabled={Loading} onClick={EditProfile}>
      {Loading? <ClipLoader size={30}  color="white" />:'Update Lecture'}
    </button>
  </div>
</div>

    )
}

export default EditLectures