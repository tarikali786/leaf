import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leaf: [],
  activeTab: "Home",
};

const leafSlice = createSlice({
  name: "leaf",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setActiveTab } = leafSlice.actions;

export default leafSlice.reducer;
