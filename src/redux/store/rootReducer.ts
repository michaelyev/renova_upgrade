// objects
import { combineReducers } from '@reduxjs/toolkit';

import blogDataReducer from '@/redux/features/blogDataSlice';
import checkBoxReducer from '@/redux/features/checkBoxSlice';
import { navTabCategoryReducer, navTabSortReducer } from '@/redux/features/navTabsSlice';
import productDataReducer from '@/redux/features/productDataSlice';
import selectedCardReducer from '@/redux/features/selectedCardSlice';

const rootReducer = combineReducers({
  checkbox: checkBoxReducer,
  navtabsort: navTabSortReducer,
  navtabcategory: navTabCategoryReducer,
  productData: productDataReducer,
  blogData: blogDataReducer,
  selectecards: selectedCardReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
