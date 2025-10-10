import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom"
import { BaseUrl } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addSingleUser } from "../Redux/SingleCourse";
const EditCourses = () => {

    // get data by course
    const dispatch = useDispatch()
   
    const {id} = useParams()
    const [isPublished , setisPublished] = useState(true)
    const [course_title ,  setcourse_title] = useState('')
    const [course_subtitle ,  setcourse_subtitle] = useState('')
    const [course_Category , setcourse_Category] = useState('')
    const [course_level , setcourse_level] = useState('')
    const [description , setDescription] = useState('')
    const[course_price , setcourse_price] = useState()
    
    const [course_Thumbnails , setcourse_Thumbnails] = useState()
    let thumb = useRef()
    const navigate = useNavigate()
 const user = useSelector(store=>store?.user)
   // console.log('ispublished'+ isPublished);
 const getcourse = async()=>{
        try{
           
            const res = await axios.get(`${BaseUrl}/getcourse/${id}`, {withCredentials:true})
            console.log(res?.data);
              dispatch(addSingleUser(res?.data))
        }catch(err){
              console.log(err?.message);
        }
    }
    useEffect(()=>{
    getcourse()
    } ,[])
 const singlecourse = useSelector(store=>store?.single)
 
   // console.log(singlecourse);
   // console.log(id);
   
  return (
    <div className="w-full min-h-screen flex justify-center items-start bg-gray-100 pt-20">
      <div className="bg-white w-[80%] md:w-[70%] lg:w-[60%] rounded-2xl shadow-lg p-8 relative">
        {/* Top buttons */}
        <div className="flex justify-between items-center mb-6">
              <h2 onClick={()=>navigate('/create/courses')} className="text-xl font-semibold text-gray-800 cursor-pointer"><FaArrowLeft /></h2>
          <h2 className="text-xl font-semibold">
             
            Add detail information regarding course
          </h2>
          <button className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800" onClick={()=> navigate('/lectures')}>
            Go to lectures page
          </button>
        </div>

        <h3 className="text-lg font-semibold mb-3">Basic Course Information</h3>

        <div className="flex flex-wrap gap-4 mb-5">
         {isPublished ? <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"  onClick={()=>setisPublished(prev=>!prev)}>
            Click to Publish
          </button>:  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-green-600"  onClick={()=>setisPublished(prev=>!prev)}>
            Click to UnPublish
          </button>}
          
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600" value={false}>
            Remove Course
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e)=>e.preventDefault()}>
          <input
            type="text"
            value={course_title}
            onChange={(e)=>setcourse_title(e.target.value)}
            placeholder="Course Title"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <input
            type="text"
            placeholder="Subtitle"
             value={course_subtitle}
            onChange={(e)=>setcourse_subtitle(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <textarea
            rows="3"
            placeholder="Course description"
            value={description}
              onChange={(e)=>setDescription(e.target.value)}  
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
          ></textarea>

          {/* Category / Level / Price */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <select id="cat"
      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      onChange={(e)=>setcourse_level(e.target.value)}
    >
       <option value="">Select Level</option>
      <option value="web-development">Beginner</option>
      <option value="mobile-development">Intermediate</option>
      <option value="data-science">Advanced</option>
   
    </select>
            <input
              type="number"
              value={course_price}
              onChange={(e)=>setcourse_price(e.target.value)}
              placeholder="Price (PKR)"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

      <div 
  className="border-2 border-dashed border-gray-300 rounded-md flex flex-col justify-center items-center py-10 cursor-pointer"
  onClick={() => thumb.current.click()}
>
  <input type="file" hidden ref={thumb} accept="image/*" />
  <img src="" alt="" />
  <p className="text-gray-500 mt-2">Course Thumbnail</p>
</div>


          {/* Buttons */}
          <div className="flex justify-end gap-4 mt-5">
            <button className="bg-gray-300 text-black px-5 py-2 rounded-md hover:bg-gray-400" onClick={navigate('/create/courses')}>
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCourses;
