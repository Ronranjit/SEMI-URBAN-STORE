import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";
import authReducer from "../features/auth/authSlice";
import messageReducer from "../features/message/messageSlice";

export const store = configureStore({
  reducer: {
    cloth: productReducer,
    shoppingCart: cartReducer,
    auth: authReducer,
    messageAuth: messageReducer,
  },
});
