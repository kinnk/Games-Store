import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart(state, action){
      state.items.push(action.payload);
    },
    deleteFromCart(state, action){
      state.items = state.items.filter(game => game.id !== action.payload)
    },
  },
});


export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;