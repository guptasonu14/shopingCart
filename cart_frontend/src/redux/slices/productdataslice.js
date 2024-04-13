import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    items: [],
}


const productdataSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProductsdata: (state, action) => {
            state.items.push(action.payload);
        },
    }
});


export const { setProductsdata } = productdataSlice.actions;
export default productdataSlice.reducer;