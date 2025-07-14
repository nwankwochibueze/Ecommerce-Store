import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../features/products/Products";

interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

interface AddToCartPayload extends Product {
  selectedSize: string;
  quantity: number;
  selectedColor: string;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<AddToCartPayload>) => {
      const existing = state.items.find(
        (item) =>
          item._id === action.payload._id &&
          item.selectedSize === action.payload.selectedSize
      );
      if (existing) {
        existing.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    // ...other cart actions
  },
});

export const { addToCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
