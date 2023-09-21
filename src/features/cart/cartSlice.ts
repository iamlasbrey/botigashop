import { createSlice} from "@reduxjs/toolkit"; 


//define a type for the slice
interface cartState {
    products: [],
    quantity: Number,
    total: number,
    }

const initialState:cartState = {
    products: [],
    quantity: 0,
    total: 0,
}


export const cartSlice:any = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct:(state:any, action:any)=>{
            state.quantity += 1,
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
        }
    },
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer