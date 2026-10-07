import {   createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItemToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeItemFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        clearCart: (state) => {
            state.items.length = 0;
            //return {items:[]}; either mutate the existing state or return a new state. Do not do both. If you return a new state, the existing state will be discarded and replaced with the new state. If you mutate the existing state, the existing state will be updated in place and the new state will be discarded.
            console.log("Cart cleared", current(state));//reducer does not allow us to read the state directly. so use current(state)
        }
    },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;