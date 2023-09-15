import { createSlice } from "@reduxjs/toolkit"; 


//define a type for the slice
interface visibleType {
    visible: boolean;
}

const initialState:visibleType = {
    visible: false,
}

export const QuickViewSlice:any = createSlice({
    name: 'quickStatus',
    initialState,
    reducers: {
        open:(state)=>{
            state.visible = true
        },
        close:(state)=>{
            state.visible = false
        },
    },
    extraReducers:()=>{
    }
})

export const { open, close } = QuickViewSlice.actions
export default QuickViewSlice.reducer