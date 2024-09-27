import { getProductIdApi, getProductsApi } from "@/lib/api";
import { TCard } from "@/lib/types";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const PRODUCT_SLICES_NAME = "products";

interface IProducts {
  products: TCard[];
  productsCarousel: TCard[];
  isLoading: boolean;
  error: string | null;
  productId: TCard;
  total: number;
}

const initialState: IProducts = {
  isLoading: false,
  error: null,
  products: [],
  total: 0,
  productId: {
    id: 0,
    image: [],
    name: "",
    description: "",
    price: 0,
    categoryId: 0,
    seasonId: 0,
    brandId: 0,
    sale: false,
    StatusLike: false,
    season: {
      id: 0,
      name: "",
    },
    size: [],
    brand: {
      id: 0,
      name: "",
    },
    type: [],
    color: [],
    categories: 1,
  },
  productsCarousel: [],
};

export const fetchProducts = createAsyncThunk(
  `${PRODUCT_SLICES_NAME}/fetchProducts`,
  async (query?: string) => getProductsApi(query)
);

export const fetchProductsCarosel = createAsyncThunk(
  `${PRODUCT_SLICES_NAME}/fetchProductsCarosel`,
  async (query?: string) => getProductsApi(query)
);

export const fetchProductId = createAsyncThunk(
  `${PRODUCT_SLICES_NAME}/fetchProductId`,
  async (id: number) => getProductIdApi(id)
);

const productsSlice = createSlice({
  name: `${PRODUCT_SLICES_NAME}`,
  initialState,
  reducers: {},
  selectors: {
    getProducts: (state) => state.products,
    getIsLoading: (state) => state.isLoading,
    getProductId: (state) => state.productId,
    getProductCarousel: (state) => state.productsCarousel,
    getTotal: (state) => state.total,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.product;
        state.total = action.payload.count;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = "Не удалось получить products";
      })
      .addCase(fetchProductId.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productId = action.payload;
      })
      .addCase(fetchProductId.rejected, (state) => {
        state.isLoading = false;
        state.error = "Не удалось получить productId";
      })
      .addCase(fetchProductsCarosel.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductsCarosel.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productsCarousel = action.payload.product;
      })
      .addCase(fetchProductsCarosel.rejected, (state) => {
        state.isLoading = false;
        state.error = "Не удалось получить productId";
      });
  },
});

export const productsSliceReducer = productsSlice.reducer;
export const {
  getProducts,
  getIsLoading,
  getProductId,
  getProductCarousel,
  getTotal,
} = productsSlice.selectors;
