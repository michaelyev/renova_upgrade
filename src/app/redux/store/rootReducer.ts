import { combineReducers } from '@reduxjs/toolkit';
import checkBoxReducer from '../features/checkBoxSlice';
import {navTabCategoryReducer, navTabSortReducer,  } from '../features/navTabsSlice';
import productDataReducer from "../features/productDataSlice"// objects
import blogDataReducer from "../features/blogDataSlice"

const rootReducer = combineReducers({
  checkbox: checkBoxReducer,
  navtabsort: navTabSortReducer,
  navtabcategory: navTabCategoryReducer,
  productData: productDataReducer,
  blogData: blogDataReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
