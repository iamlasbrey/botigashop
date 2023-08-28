import { createSlice , createAsyncThunk} from "@reduxjs/toolkit"; 
import authService from "./authService";
import { RootState } from "../../app/store";

//define a type for the slice
interface authState {
    user: string | null;
    isError: boolean;
    isSuccess: boolean;
    isLoading: boolean;
    message: string;
    }

//Get User from localstorage
const user = JSON.parse(`${localStorage.getItem('user')}`);

const initialState:authState = {
    user: user ? user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

//register user
export const register = createAsyncThunk('auth/register', async(user:any, thunkAPI)=>{
    try {
        return await authService.register(user);
    } catch (error) {
        if(error instanceof Error){
            return thunkAPI.rejectWithValue(error.message);
        }
        
    }
})


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset:(state)=>{
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(register.pending, (state)=>{
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(register.rejected, (state, action:any)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer