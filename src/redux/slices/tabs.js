import { createSlice } from "@reduxjs/toolkit";
import { TABS } from './../../constants/constants'

export const tabsSlice = createSlice({
  name: "tabs",
  initialState: {
    tabs: TABS
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
