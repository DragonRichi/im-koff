import { configureStore } from "@reduxjs/toolkit";

import authReducer from "../store/auth/auth.slice.js";
import categoriesReducer from "../store/categories/categories.slice.js";
import productReducer from "../store/product/product.js";
import productItemReducer from "../store/productItem/productItem.slice.js";
import cartReducer from "../store/cart/cart.slice.js";
import favoriteReducer from "../store/favorite/favorite.slice.js";
import { apiTokenErrorMiddleware } from "./middleware.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    product: productReducer,
    productItem: productItemReducer,
    // cart: cartReducer,
    favorite: favoriteReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiTokenErrorMiddleware),
});
