// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = action.payload;
      const existingItem = state.find((item) => item.id === itemToAdd.id);

      if (existingItem) {
        // If the item is already in the cart, increase the quantity
        existingItem.quantity += itemToAdd.quantity;
      } else {
        // If the item is not in the cart, add it to the cart
        state.push(itemToAdd);
      }
    },
    removeFromCart: (state, action) => {
      const itemIdToRemove = action.payload;
      return state.filter((item) => item.id !== itemIdToRemove);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
