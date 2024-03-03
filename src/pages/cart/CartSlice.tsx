import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types/CartItem";

interface cartState {
  value: CartItem[];
}
const initialState: cartState = {
  value: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const isInCart = state.value.find(
        (item) => item.id === action.payload.id
      );
      isInCart
        ? (isInCart.quantity += 1)
        : state.value.push({ ...action.payload, quantity: 1 });
    },

    removeItem: (state, action) => {
      const isIncart = state.value.find(
        (item) => item.id === action.payload.id
      );
      if (isIncart) {
        if (isIncart.quantity === 1) {
          state.value = state.value.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          isIncart.quantity -= 1;
        }
      }
    },
  },
});
export const { addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
