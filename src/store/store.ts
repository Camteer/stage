import { combineReducers, configureStore } from "@reduxjs/toolkit";

import {
  TypedUseSelectorHook,
  useDispatch as dispatchHook,
  useSelector as selectorHook,
} from "react-redux";
import { filtersSliceReducer } from "./slices/filtersSlice";
import { productsSliceReducer } from "./slices/productSlice";
import { cartSliceReducer } from "./slices/cartSlice";
import { ordersSliceReducer } from "./slices/ordersSlice";

export const rootReducer = combineReducers({
  filters: filtersSliceReducer,
  products: productsSliceReducer,
  cart: cartSliceReducer,
  orders: ordersSliceReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store;
