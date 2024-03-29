import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../pages/products/ProductSlice";
import CartReducer from "../pages/cart/CartSlice";
import CartOpenReducer from "../pages/cart/CartOpenSlice";
import loginReducer from "../pages/login/LoginSlice";

const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
    cartOpen: CartOpenReducer,
    login: loginReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
