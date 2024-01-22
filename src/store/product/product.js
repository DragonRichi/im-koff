import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../../const";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (param, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    const queryParams = new URLSearchParams();

    if (param) {
      for (const key in param) {
        if (Object.hasOwnProperty.call(param, key) && param[key]) {
          queryParams.append(key, param[key]);
        }
      }
    }

    const response = await fetch(`${API_URL}/api/products?${queryParams}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      if (response.status === "401") {
        return thunkAPI.rejectWithValue({
          status: response.status,
          error: "Не удалось загрузить продукты!",
        });
      }
      throw new Error("Не удалось загрузить продукты!");
    }
    return response.json();
  },
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    loading: false,
    error: null,
    pagination: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.pagination = null;
        state.data = [];
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.data = action.payload;
          state.pagination = null;
        } else {
          state.data = action.payload.data;
          state.pagination = action.payload.pagination;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
