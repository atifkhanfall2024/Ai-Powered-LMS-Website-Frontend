import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BaseUrl } from "../utils/constant";
import { addCourse } from "../Redux/CourseSlice";
import axios from "axios";
const Create_Courses = ()=>{

    const navigate = useNavigate()
    const courses = useSelector(store=>store?.course)
    const user = useSelector(store=>store?.user)
    const dispatch = useDispatch()
        useEffect(()=>{
         if (!user || Object.keys(user).length === 0) return;

        const creator_courses = async()=>{
           
            try{
                 const res = await axios.get(BaseUrl+'/getcreator/courses' , {withCredentials:true})
          
            dispatch(addCourse(res?.data))
            }catch(err){
                console.log(err?.response?.data || err?.message);
            }
            

        }
      
       creator_courses()
    } , [user])
    return(
<div className="mt-20 mx-auto w-[80%] bg-white  rounded-xl shadow-lg p-5">
  {/* Top Section - Button */}
  <div className="flex justify-between items-center mb-5">
    <h2 onClick={()=>navigate('/dash')} className="text-xl font-semibold text-gray-800 cursor-pointer"><FaArrowLeft /></h2>
    <button className="bg-black text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-900 hover:scale-105 transition-all duration-300" onClick={()=>navigate('/create/course')}>
      Create Course
    </button>
  </div>

  {/* Table Header */}
  <div className="grid grid-cols-4 text-gray-600 font-semibold border-b pb-2 mb-3 text-sm">
    <span>Course</span>
    <span>Price</span>
    <span>Status</span>
    <span>Action</span>
  </div>

  {/* Course Row */}
  {Array.isArray(courses) && courses.length > 0 ? (courses.map((items , index)=>(
  <div key={index} className="grid grid-cols-4 items-center py-3 border-b hover:bg-gray-50 transition text-sm">
    {/* Course image + name */}
    <div className="flex items-center space-x-3">
      <img
        src={items?.course_Thumbnails}
        alt="Course"
        className="w-12 h-12 rounded-md object-cover"
      />
      <h3 className="font-medium text-gray-800">{items?.course_title}</h3>
    </div>

    {/* Price */}
    <div className="font-semibold text-gray-700">PKR : {items?.course_price}</div>

    {/* Status */}
    <div>
      <span className={`px-3 py-1 text-xs rounded-full  ${items.isPublished ? 'bg-green-100  text-green-700' :'bg-red-100  text-red-700' } font-medium`}>
        {items.isPublished? 'Published ' : 'Draft'}
      </span>
    </div>

    {/* Actions */}
    <div className="flex gap-2">
     <FaEdit 
  className="text-black text-2xl hover:underline cursor-pointer" 
  onClick={() => navigate(`/edit/course/${items?._id}`)} 
/>
    
    </div>
  </div>))):(
  <p className="text-gray-500 text-center py-4">No courses found</p>
)}

</div>


    )
}

export default Create_Courses