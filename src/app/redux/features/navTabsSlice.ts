"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const navTabCategorySlice = createSlice({
  name: "navtabcategory",
  initialState: { activeTab: "discounts" },
  reducers: {
    setActiveTab: (state, { payload }: PayloadAction<string>) => {
      state.activeTab = payload;
    },
  },
});

const navTabSortSlice = createSlice({
  name: "navtabsort",
  initialState: { activeTab: "popular" },
  reducers: {
    setActiveTab: (state, { payload }: PayloadAction<string>) => {
      state.activeTab = payload;
    },
  },
});

const { setActiveTab: setActiveTabCategory } = navTabCategorySlice.actions;


const { setActiveTab: setActiveTabSort } = navTabSortSlice.actions;


export { setActiveTabCategory, setActiveTabSort };

// Exporting renamed reducers
export const navTabCategoryReducer = navTabCategorySlice.reducer;
export const navTabSortReducer = navTabSortSlice.reducer;


