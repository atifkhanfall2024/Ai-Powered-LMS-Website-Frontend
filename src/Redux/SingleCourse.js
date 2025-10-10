import { createSlice } from "@reduxjs/toolkit";

const Course = createSlice({
    name:"User",
    initialState:null,

    reducers:{
        addSingleUser:(state , action)=>{
            return action.payload
        },
        removeSingleUser:(state , action)=>{
            return null
        }
    }
})

export const{addSingleUser , removeSingleUser} = Course.actions
export default Course.reducer