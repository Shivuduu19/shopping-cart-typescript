import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface loginState {
  value: true | false;
}
const initialState = {
  value: false,
} as loginState;

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});
export const { setLogin } = loginSlice.actions;
export default loginSlice.reducer;
