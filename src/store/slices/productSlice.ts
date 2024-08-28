import { getProductsApi } from "@/lib/api";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const PRODUCT_SLICES_NAME = "products";

interface IProducts {
  products: any;
  isLoading: boolean;
  error: string | null;
}

const initialState: IProducts = {
  isLoading: false,
  error: null,
  products: undefined,
};

export const fetchProducts = createAsyncThunk(
  `${PRODUCT_SLICES_NAME}/fetchProducts`,
  async () => getProductsApi()
);

const productsSlice = createSlice({
  name: `${PRODUCT_SLICES_NAME}`,
  initialState,
  reducers: {},
  selectors: {
    getProducts: (state) => state.products,
    getIsLoading: (state) => state.isLoading,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = "Не удалось получить filters";
      });
  },
});

export const productsSliceReducer = productsSlice.reducer;
export const { getProducts, getIsLoading } = productsSlice.selectors;
