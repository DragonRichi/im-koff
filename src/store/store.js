import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../store/auth/auth.slice.js";
import categoriesReducer from "../store/categories/categories.slice.js";
import productReducer from "../store/product/product.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    product: productReducer,
  },
});
