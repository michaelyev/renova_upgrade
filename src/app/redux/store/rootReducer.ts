import { combineReducers } from '@reduxjs/toolkit';
import checkBoxReducer from '../features/checkBoxSlice';
import {navTabCategoryReducer, navTabSortReducer,  } from '../features/navTabsSlice';
import productDataReducer from "../features/productDataSlice"// objects


const rootReducer = combineReducers({
  checkbox: checkBoxReducer,
  navtabsort: navTabSortReducer,
  navtabcategory: navTabCategoryReducer,
  productData: productDataReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
