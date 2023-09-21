import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productReducer from "../features/products/productSlice";
import quickReducer from "../features/modals/QuickViewSlice";
import cartReducer from "../features/cart/cartSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        quickModal: quickReducer,
        cartItems : cartReducer
    }
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;