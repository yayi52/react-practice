import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({    
    name:'todos',
    initialState:[
        {
            id:1,
            text:"副本文字",
        },
    ],
    reducers:{
        createTodo(state, action){
            console.log('state',state[0].id, state[0].text,'aciotns',action);
            state.push(action.payload);
        }
    }
});

export const {createTodo} = todoSlice.actions;
export default todoSlice.reducer;