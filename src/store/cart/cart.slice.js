import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const fetchAddToCart = createAsyncThunk(
  "cart/fetchAddToCart",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    console.log(data, "data");

    const response = await fetch(`${API_URL}/api/cart/products`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        ContentType: `application/json;charset=utf-8`,
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Не удалось добавить товар в корзину!");
    }
    return response.json();
  },
);

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    const response = await fetch(`${API_URL}/api/cart`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Не удалось получить содержимое корзины!");
    }
    return response.json();
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddToCart.pending, (state) => {
        state.data = [];
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddToCart.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAddToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchCart.pending, (state) => {
        state.data = [];
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
