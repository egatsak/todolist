import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const tabsSlice = createSlice({
  name: "tabs",
  initialState: {
    tabs: [
      { name: "All", id: uuidv4(), isActive: true },
      { name: "Active", id: uuidv4(), isActive: false },
      { name: "Completed", id: uuidv4(), isActive: false },
    ],
  },
  reducers: {
    setIsActive: (state, action) => {
      state.tabs = state.tabs.map((tab) => {
        if (tab.isActive) {
          tab.isActive = false;
        }
        if (tab.id === action.payload) {
          tab.isActive = true;
        }
        return tab;
      });
    },
  },
});

export const { setIsActive } = tabsSlice.actions;

export default tabsSlice.reducer;
