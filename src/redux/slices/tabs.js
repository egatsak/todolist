import { createSlice } from "@reduxjs/toolkit";

export const tabsSlice = createSlice({
  name: "tabs",
  initialState: {
    tabs:
    [
        { name: "All", id: 0, isActive: true },
        { name: "Active", id: 1, isActive: false },
        { name: "Completed", id: 2, isActive: false },
    ]
  },
  reducers: {
    setIsActive: (state, action) => {
      state.tabs = 
      state.tabs.map((tab) => {
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
