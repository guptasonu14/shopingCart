import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productsReducer from "./slices/productsSlice";
import productsDataReducer from './slices/productdataslice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
        productdata:productsDataReducer
    }
});


export default store;