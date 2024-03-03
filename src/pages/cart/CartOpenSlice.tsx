import { createSlice } from "@reduxjs/toolkit";

interface cartOpenState {
  value: true | false;
}
const initialState = {
  value: false,
} as cartOpenState;

export const CartOpenSlice = createSlice({
  name: "isopen",
  initialState,
  reducers: {
    openCart: (state) => {
      state.value = true;
    },
    closeCart: (state) => {
      state.value = false;
    },
  },
});
export const { openCart, closeCart } = CartOpenSlice.actions;
export default CartOpenSlice.reducer;
