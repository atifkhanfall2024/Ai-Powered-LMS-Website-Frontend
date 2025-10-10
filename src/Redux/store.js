import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice"
import CourseSlice from './CourseSlice'
import SingleCourse from './SingleCourse'

const Store =  configureStore({
    reducer:{
        user : UserSlice,
        course:CourseSlice,
        single: SingleCourse
    }
})

export default Store