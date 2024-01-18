import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const fetchProductItem = createAsyncThunk(
  "productItem/fetchProductItem",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    const response = await fetch(`${API_URL}/api/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      if (response.status === "401") {
        return thunkAPI.rejectWithValue({
          status: response.status,
          error: "Не удалось получить данные о товаре!",
        });
      }
      throw new Error("Не удалось получить данные о товаре!");
    }
    return response.json();
  },
);

const productItem = createSlice({
  name: "productItem",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductItem.pending, (state) => {
        state.data = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductItem.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProductItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productItem.reducer;
