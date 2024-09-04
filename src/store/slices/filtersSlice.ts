import { getFiltersApi } from "@/lib/api";
import { TBrands, TFiltersResponse } from "@/lib/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const FILTERS_SLICES_NAME = "filters";

interface IFilters {
  filters: TFiltersResponse;
  isLoading: boolean;
  brands: TBrands[];
  error: string | null;
}

const initialState: IFilters = {
  isLoading: false,
  error: null,
  brands: [],
  filters: {
    sizes: [],
    types: [],
    brands: [],
    colors: [],
    seasons: [],
  },
};

export const fetchFilters = createAsyncThunk(
  `${FILTERS_SLICES_NAME}/fetchFilters`,
  async () => getFiltersApi()
);

export const fetchBrands = createAsyncThunk(
  `${FILTERS_SLICES_NAME}/fetchBrands`,
  async () => getFiltersApi()
);

const filtersSlice = createSlice({
  name: `${FILTERS_SLICES_NAME}`,
  initialState,
  reducers: {},
  selectors: {
    getFilters: (state) => state.filters,
    getIsLoading: (state) => state.isLoading,
    getBrands: (state) => state.brands,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filters = action.payload;
      })
      .addCase(fetchFilters.rejected, (state) => {
        state.isLoading = false;
        state.error = "Не удалось получить filters";
      })
      .addCase(fetchBrands.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.isLoading = false;
        state.brands = action.payload.brands;
      })
      .addCase(fetchBrands.rejected, (state) => {
        state.isLoading = false;
        state.error = "Не удалось получить filters";
      });
  },
});

export const filtersSliceReducer = filtersSlice.reducer;
export const { getFilters, getIsLoading, getBrands } = filtersSlice.selectors;
