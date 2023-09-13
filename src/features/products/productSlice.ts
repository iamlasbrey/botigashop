import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"; 

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
export const getProducts = createAsyncThunk('products/getProducts', async(_:any, thunkAPI)=>{
    try {
        
    } catch (error) {
        if(error instanceof Error){
            return thunkAPI.rejectWithValue(error.message);
        }
    }
})




export const productSlice:any = createSlice({
    name: 'products',
    initialState,
    reducers: {
       
    },
    extraReducers: (builder) => {
        
    }
})

export const {  } = productSlice.actions
export default productSlice.reducer