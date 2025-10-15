import { createSlice } from "@reduxjs/toolkit";

const LectureSlice = createSlice({
    initialState:[],
    name:"Lectures",

    reducers:{
        AddLectures:(state , actions)=>{
         return  actions.payload
        },

        RemoveLecture:(state , actions)=>{
              return null
        }
    }
})


export const {AddLectures , RemoveLecture} = LectureSlice.actions
export default LectureSlice.reducer