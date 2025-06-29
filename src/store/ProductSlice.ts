import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../features/products/Products";
import type { Product } from "../features/products/Products";

// Async thunk for fetching products
export const fetchProductsThunk = createAsyncThunk(
  "products/fetchAll",
  async () => {
    return await fetchProducts();
  }
);

// You can add more thunks for createProduct, deleteProductById, etc.

export interface Products {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}
export interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const productReducer = ProductSlice.reducer;
