import { configureStore } from "@reduxjs/toolkit";
import goodsReducer from "./slices/goodsReducer";
import loginReducer from "./slices/loginReducer";

export const store = configureStore({
  reducer: { login: loginReducer, goods: goodsReducer },
});
