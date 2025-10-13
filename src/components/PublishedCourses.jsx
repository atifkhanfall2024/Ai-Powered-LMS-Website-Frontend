import axios from "axios"
import { BaseUrl } from "../utils/constant"
import { useEffect, useState } from "react"
import Cards from "./Cards"

const PublishedCourses = ()=>{

    const [Courses  , setCourses] = useState([])

    const PublishedApi = async()=>{

      try{
          const res = await axios.get(BaseUrl+'/getpublished/course' , {withCredentials:true})
          console.log(res?.data);
          setCourses(res?.data)
      }catch(err){
        console.log(err?.response?.data || err?.message);
      }

        
    }

    useEffect(()=>{
        PublishedApi()
    } , [])


  return (
  <div className="px-6 my-10">
  <h2 className="text-3xl font-bold text-center mb-3">Explore Our Popular Courses</h2>
  <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6">
    Discover a wide range of high-quality courses designed to boost your skills and advance your career.
  </p>

  <div className="w-full flex justify-center">
    <div className="w-[100%] flex flex-wrap gap-6 justify-start items-start">
      {Courses.slice(0,4).map((course, index) => (
        <Cards key={index} data={course} />
      ))}
    </div>
  </div>
</div>

  );
}

export default PublishedCourses