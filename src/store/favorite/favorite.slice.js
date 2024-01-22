import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favotite",
  initialState: {
    favoriteList: JSON.parse(localStorage.getItem("favorite") || "[]"),
  },
  reducers: {
    addToFavorite: (state, action) => {
      state.favoriteList.push(action.payload);
      localStorage.setItem("favorite", JSON.stringify(state.favoriteList));
    },
    removeFromFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter(
        (id) => id !== action.payload,
      );
      localStorage.setItem("favorite", JSON.stringify(state.favoriteList));
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
