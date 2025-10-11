import axios from "axios"
import { BaseUrl } from "../utils/constant"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addCourse } from "../Redux/CourseSlice"
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-toastify"
import { ClipLoader } from "react-spinners"

const Create_Courses = ()=>{

    const [course_title , setcourse_title] = useState('')
    const [course_Category , setcourse_Category] = useState('')
    const [Error , setError] = useState('')
    const [Loading , setLoading] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // handle crate course api

    const HandleCourse = async(e)=>{
              e.preventDefault()
              setLoading(true)
    try{
                
        const res = await axios.post(BaseUrl+'/create/course' , {
            course_title,
            course_Category
        } , {withCredentials:true})
        //console.log(res?.data);
        dispatch(addCourse(res?.data))
        setLoading(false)
        toast.success('Create Course Success')
        navigate('/create/courses')
    }catch(err){
        console.log(err?.response?.data || err?.message);
        setError(err?.response?.data || err?.message)
        setLoading(false)
        toast.error(err?.response?.data || err?.message)
    }
    }

    return(
        <div className="mt-20 mx-auto w-[80%] bg-white rounded-xl shadow-lg p-8">
  {/* Heading */}
    <h2 onClick={()=>navigate('/create/courses')} className="text-xl font-semibold text-gray-800 cursor-pointer -mx-2 my-2"><FaArrowLeft /></h2>
  <h2 className="text-2xl font-semibold text-gray-800 mb-6">Create Course</h2>
 
  {/* Course Title */}
  <div className="mb-5">
    <label className="block text-gray-700 font-medium mb-2">
      Course Title
    </label>
    <input
      type="text"
      value={course_title}
      onChange={(e)=>setcourse_title(e.target.value)}
      placeholder="Enter course title"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
    />
  </div>

  {/* Course Category */}
  <div className="mb-5">
    <label htmlFor="cat" className="block text-gray-700 font-medium mb-2">
      Course Category
    </label>
    <select id="cat"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      onChange={(e)=>setcourse_Category(e.target.value)}
    >
       <option value="">Select Category</option>
      <option value="web-development">Web Development</option>
      <option value="mobile-development">Mobile Development</option>
      <option value="data-science">Data Science</option>
      <option value="machine-learning">Machine Learning</option>
      <option value="artificial-intelligence">Artificial Intelligence</option>
      <option value="cloud-computing">Cloud Computing</option>
      <option value="cyber-security">Cyber Security</option>
      <option value="graphic-design">Graphic Design</option>
    </select>
  </div>
     <p className="text-red-500 my-[10px]">{Error}</p>
  {/* Submit Button */}
  <button className="bg-black text-white font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-900 hover:scale-105 transition-all duration-300" onClick={HandleCourse} disabled={Loading}>
    { Loading ? <ClipLoader size={30} color="white"/>   : 'Create'} 
  </button>
</div>

    )
}

export default Create_Courses
