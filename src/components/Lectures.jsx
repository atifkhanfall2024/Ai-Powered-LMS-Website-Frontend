import axios from "axios"
import { useEffect, useState } from "react"
import { BaseUrl } from "../utils/constant"
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners"
import { useDispatch } from "react-redux"
import { AddLectures } from "../Redux/LectureSlice"

const Lectures = ()=>{

    const [Addcourse , setAddcourse] = useState([])
    const [title , settitle] = useState('')
    const [Loading , setLoading] = useState(false)
    const {courseid} = useParams()
    console.log(useParams());
    const navigate = useNavigate()
    const dispatch = useDispatch()

    
   // get all lectures from database

 

    // calling create course api

   const HandleCreateCourse = async(e)=>{
            e.preventDefault()
            setLoading(true)
    try{
        const res = await axios.post(BaseUrl+'/create/lecture/'+courseid , {title} , {withCredentials:true})
        //setcreatecourse(res?.data)
        setLoading(false)
        settitle('')
        toast.success('Create Lecture Success')
      

    }catch(err){
    
          console.log(err?.response?.data || err?.message);
           setLoading(false)
          toast.error('Error to Create Course')
        
    }

   }

  useEffect(()=>{

    const GetData = async()=>{

       try{
         const res = await axios.get(BaseUrl+"/get/lecture/"+courseid , {withCredentials:true})

       console.log(res?.data?.Lectures);
        dispatch(AddLectures(res?.data?.Lectures))
        setAddcourse(res?.data?.Lectures)

       }catch(err){
        console.log(err?.response?.data || err?.message);
       }
    }
           GetData()
   } , [])

    return(
       <div className="min-h-screen flex justify-center items-center bg-gray-100">
  <div className="w-[600px] bg-white shadow-lg rounded-xl p-8">
    {/* Heading */}
    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Let's Add a Lecture</h2>
    <p className="text-gray-500 mb-5">
      Enter the title and add your video lectures to enhance your course content.
    </p>

    {/* Input field */}
    <input
      type="text"
      value={title}
      onChange={(e)=>settitle(e.target.value)}
      placeholder="e.g. Introduction to Mern Stack"
      className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-black"
    />

    {/* Buttons */}
    <div className="flex justify-between items-center mb-6">
      <button className="flex items-center gap-2 border border-gray-400 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition" onClick={()=> navigate('/create/courses')}>
        ← Back to Course
      </button>
      <button className="bg-black text-white px-5 py-2 rounded-lg font-medium hover:scale-105 transition-all duration-300" disabled={Loading} onClick={HandleCreateCourse}>
       {Loading ? <ClipLoader size={30} color="white"/> : '+ Create Lecture'}
      </button>
    </div>

   <div className="space-y-3 flex flex-col">
  {Addcourse.map((c , index)=>(
    <div key={index} className="flex justify-between items-center bg-gray-100 px-4 py-3 gap-2 rounded-lg">
      <p className="text-gray-800 font-medium">Lecture - { index+1 } : { c.title }</p>
      <button className="text-gray-700 hover:text-black cursor-pointer text-2xl" onClick={()=>navigate(`/editlectures/${courseid}/${c._id}`)}>✎</button>
    </div>
  ))}
</div>

  </div>
</div>

    )
}

export default Lectures