import { createSlice } from "@reduxjs/toolkit";

const LectureSlice = createSlice({
    initialState:[],
    name:"Lectures",

    reducers:{
        AddLectures:(state , actions)=>{
         return  actions.payload
        },

    }
})


export const {AddLectures } = LectureSlice.actions
export default LectureSlice.reducer