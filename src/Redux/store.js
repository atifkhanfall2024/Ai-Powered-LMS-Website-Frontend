import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice"
import CourseSlice from './CourseSlice'
import SingleCourse from './SingleCourse'
import LectureSlice from "./LectureSlice";

const Store =  configureStore({
    reducer:{
        user : UserSlice,
        course:CourseSlice,
        single: SingleCourse,
        Lectures:LectureSlice
    }
})

export default Store