import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};

const cartsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const isFound = state.carts.find((cart) => cart.id === action.payload.id);
      if (isFound) {
        state.carts.map((cart) => {
          if (cart.id === action.payload.id) {
            return (cart.buyQty += 1);
          }
          return { ...state };
        });
      } else {
        state.carts.push({ ...action.payload, buyQty: 1 });
      }
    },
    deleteCart: (state, action) => {
      const index = state.carts.findIndex(
        (cart) => cart.id === action.payload.id
      );
      state.carts.splice(index, 1);
    },
    updateCart: (state, action) => {
      state.carts.map((cart) => {
        if (cart.id === action.payload.cart.id) {
          return cart.buyQty = action.payload.counter;
        }
        return { ...state };
      });
    },
    checkoutCart: (state) => {
      state.carts = []
    }
  },
});

export const { addCart, deleteCart, updateCart, checkoutCart } = cartsSlice.actions;

export default cartsSlice.reducer;
