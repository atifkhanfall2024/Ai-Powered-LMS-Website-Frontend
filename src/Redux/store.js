import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice"
import CourseSlice from './CourseSlice'

const Store =  configureStore({
    reducer:{
        user : UserSlice,
        course:CourseSlice
    }
})

export default Store