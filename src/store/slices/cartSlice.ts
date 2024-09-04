import { CartItemApi, changeCartItemCountApi, getCartApi } from "@/lib/api";
import { CartUI, CreateCartItemValues } from "@/lib/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const CART_SLICES_NAME = "cart";

interface ICart {
  cart: CartUI;
  isLoading: boolean;
  error: string | null;
}

const initialState: ICart = {
  cart: {
    id: null,
    userId: null,
    totalAmount: 0,
    items: [],
  },
  isLoading: false,
  error: null,
};

export const fetchCart = createAsyncThunk(
  `${CART_SLICES_NAME}/fetchCart`,
  async () => getCartApi()
);
export const fetchCartAdd = createAsyncThunk(
  `${CART_SLICES_NAME}/fetchCartAdd`,
  async (data: CreateCartItemValues) => CartItemApi(data)
);

export const fetchChangeCartItemCountApi = createAsyncThunk(
  `${CART_SLICES_NAME}/fetchChangeCartItemCountApi`,
  async (data: {id: number, quantity: number}) => changeCartItemCountApi(data)
);

const cartSlice = createSlice({
  name: `${CART_SLICES_NAME}`,
  initialState,
  reducers: {},
  selectors: {
    getCartItems: (state) => state.cart,
    getIsLoading: (state) => state.isLoading,
    getTotalAmount: (state) => state.cart.totalAmount,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;
      })
      .addCase(fetchCart.rejected, (state) => {
        state.isLoading = false;
        state.error = "Не удалось получить cart";
      })
      .addCase(fetchCartAdd.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCartAdd.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;
      })
      .addCase(fetchCartAdd.rejected, (state) => {
        state.isLoading = false;
        state.error = "Не удалось получить cart";
      })
      .addCase(fetchChangeCartItemCountApi.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchChangeCartItemCountApi.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;
      })
      .addCase(fetchChangeCartItemCountApi.rejected, (state) => {
        state.isLoading = false;
        state.error = "Не удалось получить cart";
      })
  },
});

export const cartSliceReducer = cartSlice.reducer;
export const { getCartItems, getIsLoading, getTotalAmount } =
  cartSlice.selectors;
