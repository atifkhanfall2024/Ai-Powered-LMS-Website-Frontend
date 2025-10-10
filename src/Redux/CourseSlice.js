import { createSlice } from "@reduxjs/toolkit";

const CourseSlice = createSlice({
    initialState:[] ,
    name:'course',


    reducers:{
        addCourse:(state , action)=>{
                return action.payload
        },
         removeCourse:(state , action)=>{
            return null
        }
    }
})

export const{addCourse , removeCourse} = CourseSlice.actions
export default CourseSlice.reducer
