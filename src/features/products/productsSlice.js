import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  loading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    let url = `https://fakestoreapi.com/products`;
    const response = await axios.get(url);
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProduct: (state, action) => {
      state.products.map((product) => {
        if (product.id === action.payload.product.id) {
          return (product.qty = action.payload.value);
        }
        return { ...state };
      });
    },
    checkoutProduct: (state, action) => {
      const isFound = state.products.find(
        (product) => product.id === action.payload.id
      );
      if (isFound) {
        state.products.map((product) => {
          if (product.id === action.payload.id) {
            return (product.sold += action.payload.buyQty);
          }
          return { ...state };
        });
      } else {
        state.products.push(action.payload);
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        return { ...state, loading: true };
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (state.length) {
          const products = action.payload.map((product) => {
            return { ...product, qty: 20, sold: 0 };
          });
          return {
            ...state,
            products: products,
            loading: false,
            error: "",
          };
        }
        return { ...state };
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        return { ...state, loading: false, error: action.error.message };
      });
  },
});

export const { updateProduct, checkoutProduct } = productsSlice.actions;

export default productsSlice.reducer;
