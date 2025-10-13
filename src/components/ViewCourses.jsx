import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../utils/constant";
const ViewCourses = ()=>{

    const navigate = useNavigate()
    const [courses , setcourses] = useState([])
    const [category , setcategory] = useState([])
    const [applyfilter , setapplyfilter] = useState([])

    // use logics for category

const toggleCategory = (e) => {
  setcategory([e.target.value])  // Always keep only one selected category
}



 // now filter those one which checked

const applydata = ()=>{
    let copydata = courses?.slice()
      if(category.length>0){
        copydata = copydata.filter(c=>category.includes(c.course_Category))
      }
      setapplyfilter(copydata)
}

   useEffect(()=>{
    setapplyfilter(courses)
   },[courses])

   useEffect(()=>{
    applydata()
   } ,[category])

   console.log( applyfilter);

  const PublishedApi = async()=>{

      try{
          const res = await axios.get(BaseUrl+'/getpublished/course' , {withCredentials:true})
          console.log(res?.data);
          setcourses(res?.data)
      }catch(err){
        console.log(err?.response?.data || err?.message);
      }

        
    }

    useEffect(()=>{
        PublishedApi()
    } , [])
    return(
<div className="flex w-full min-h-screen bg-gray-100">
  {/* Sidebar */}
  <div className="w-64 h-full bg-black shadow-md rounded-xl p-5 text-white sticky top-20">
    <h2
      onClick={() => navigate('/feed')}
      className="text-xl font-semibold text-white cursor-pointer -translate-x-[5%] translate-y-[80%]"
    >
      <FaArrowLeft />
    </h2>
    <h2 className="text-xl font-semibold mb-4 translate-x-[10%] -translate-y-[30%]">
      Search by Category
    </h2>

    <div className="mb-6">
      <input
        type="text"
        placeholder="Type your query..."
        className="w-full border border-gray-600 bg-gray-800 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <div>
      <h3 className="font-medium mb-3 text-gray-300">Categories</h3>
      <div className="space-y-2">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="radio" name="category" onChange={toggleCategory} value='Web Development' className="text-blue-500" />
          <span>Web Development</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="radio" name="category" onChange={toggleCategory} value='mobile-development' className="text-blue-500" />
          <span>Mobile Development</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="radio" name="category" onChange={toggleCategory} value='data-science' className="text-blue-500" />
          <span>Data Science</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="radio" value='machine-learning' onChange={toggleCategory} name="category" className="text-blue-500" />
          <span>Machine Learning</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="radio" value='cyber-security' onChange={toggleCategory} name="category" className="text-blue-500" />
          <span>cyber-security</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="radio" name="category" onChange={toggleCategory} value='Artificial Intelligence' className="text-blue-500" />
          <span>Artificial Intelligence</span>
        </label>
          <label className="flex items-center space-x-2 cursor-pointer">
          <input type="radio" name="category" onChange={toggleCategory} value='Graphic Designing' className="text-blue-500" />
          <span>Graphic Designing</span>
        </label>
          <label className="flex items-center space-x-2 cursor-pointer">
          <input type="radio" name="category" onChange={toggleCategory} value='Cloud Computing' className="text-blue-500" />
          <span>cloud-computing</span>
        </label>
          <label className="flex items-center space-x-2 cursor-pointer">
          <input type="radio" name="category" onChange={toggleCategory} value='Other' className="text-blue-500" />
          <span>Other</span>
        </label>
      </div>
    </div>
  </div>

 <div className="flex flex-wrap justify-center gap-6 p-10 mt-10">
  {applyfilter.map((c, index) => (
    <div
      key={index}
      className="w-64 h-64 bg-white rounded-xl shadow-md p-4 flex flex-col justify-between hover:scale-105 transition"
    >
      <img
        src={c.course_Thumbnails}
        alt="Course"
        className="w-full h-32 object-cover rounded-lg"
      />
      <div className="text-center">
        <h3 className="text-lg font-semibold">{c.course_title || "Course Title"}</h3>
        <p className="text-sm text-gray-500">{c.course_Category || "Web Development"}</p>
        <p className="text-base font-medium text-gray-800">PKR: {c.course_price || "29.99"}</p>
      </div>
      <div className="text-yellow-500 text-center">★★★★☆</div>
    </div>
  ))}
</div>

</div>


    )
}

export default ViewCourses