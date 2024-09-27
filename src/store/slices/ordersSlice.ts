import { getUserOrderApi } from "@/lib/api";
import { UserOrders } from "@/lib/types";


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const ORDERS_SLICES_NAME = "orders";


interface IOrders {
  userOrders: UserOrders;
  isLoading: boolean;
  error: string | null;
}

const initialState: IOrders = {
  isLoading: false,
  error: null,
  userOrders: {
    orders: [],
  },
};

export const fetchOrders = createAsyncThunk(
  `${ORDERS_SLICES_NAME}/fetchOrders`,
  async () => getUserOrderApi()
);

const ordersSlice = createSlice({
  name: `${ORDERS_SLICES_NAME}`,
  initialState,
  reducers: {},

  selectors: {
    getIsLoading: (state) => state.isLoading,
    getOrders: (state) => state.userOrders,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        const transformedOrders = action.payload.orders.map(order => ({
          ...order,
          items : JSON.parse(order.items)  
        }));

        state.userOrders.orders = transformedOrders;
      
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.isLoading = false;
        state.error = "Не удалось получить orders";
      });
  },
});

export const ordersSliceReducer = ordersSlice.reducer;
export const { getIsLoading, getOrders } = ordersSlice.selectors;
