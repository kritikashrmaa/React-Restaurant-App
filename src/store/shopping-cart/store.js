import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import cartUISlice from "./cartUISlice";

const store=configureStore({
    reducer:{
        cart:cartSlice.reducer,
        cartUi:cartUISlice.reducer,
    },
})

export default store;
