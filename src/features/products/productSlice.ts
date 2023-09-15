import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"; 
import axios from "axios";

//define a type for the slice
interface productType {
    products: [];
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
}


const initialState:productType = {
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

//Get Goals
export const getProducts = createAsyncThunk('products/getProducts', async()=>{
    try {
        const myProducts = await axios.get('/api/products')
        return myProducts.data
    } catch (error) {
        if(error instanceof Error){
            return (error.message);
        }
    }
})


export const productSlice:any = createSlice({
    name: 'products',
    initialState,
    reducers: {
        reset:()=>{
            initialState
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(getProducts.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.products = action.payload
        })
        .addCase(getProducts.rejected, (state, action:any)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.products = []
        })
    }
})

export const { reset } = productSlice.actions
export default productSlice.reducer