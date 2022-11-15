import { combineReducers, configureStore } from "@reduxjs/toolkit";
import categoriesReduce from "../features/categories/categoriesSlice";
import productsReduce from "../features/products/productsSlice";
import usersReduce from "../features/users/usersSlice";
import cartsReduce from "../features/carts/cartsSlice";
import storage from "redux-persist/lib/storage";
import { PERSIST, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  categories: categoriesReduce,
  products: productsReduce,
  users: usersReduce,
  carts: cartsReduce,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: { persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});
