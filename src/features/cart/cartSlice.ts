import { createSlice} from "@reduxjs/toolkit"; 


//define a type for the slice
interface cartState {
    cartItems: [],
    quantity: number,
    total: number,
    }

const initialState:cartState = {
    cartItems: [],
    quantity: 0,
    total: 0,
}


export const cartSlice:any = createSlice({
    name: 'cart',
    initialState,
    reducers: {
       addCart:(state:any, action:any)=>{
            state.quantity += 1
            state.cartItems.push(action.payload)
            state.total += action.payload.price * action.payload.quantity
       },
       removeItem:(state:any, action:any)=>{
           state.cartItems =  state.cartItems.filter((item:any)=>item._id !== action.payload)
       },
       increaseItem:(state:any, action:any)=>{
        const cartItem = state.cartItems.find((item:any) => item._id === action.payload)
        cartItem.quantity = cartItem.quantity + 1
       },
       decreaseItem:(state:any, action:any)=>{
        const cartItem = state.cartItems.find((item:any) => item._id === action.payload)
        cartItem.quantity === 1 ? cartItem.quantity :  cartItem.quantity = cartItem.quantity - 1
       },
       calculateTotal:(state:any)=>{        
            let quantity = 0
            let total = 0

           state.cartItems.forEach((item:any)=>{
                quantity += item.quantity
                total += item.quantity * item.price 
           })

           state.quantity = quantity
           state.total = total
       }

    },
})

export const {addCart, removeItem, increaseItem, decreaseItem, calculateTotal, fixItemQuantity} = cartSlice.actions
export default cartSlice.reducer