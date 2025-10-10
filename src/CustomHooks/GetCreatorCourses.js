import axios from "axios"
import { useEffect } from "react"
import { BaseUrl } from "../utils/constant"
import { useDispatch, useSelector } from "react-redux"
import { addCourse } from "../Redux/CourseSlice"

const GetCreatorCourses = ()=>{
    const user = useSelector(store=>store?.user)
    const dispatch = useDispatch()


   return(
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
   )
}

export default GetCreatorCourses