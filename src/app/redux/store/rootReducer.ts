// objects
import { combineReducers } from '@reduxjs/toolkit';

import blogDataReducer from '@/app/redux/features/blogDataSlice';
import checkBoxReducer from '@/app/redux/features/checkBoxSlice';
import { navTabCategoryReducer, navTabSortReducer } from '@/app/redux/features/navTabsSlice';
import productDataReducer from '@/app/redux/features/productDataSlice';
import selectedCardReducer from '@/app/redux/features/selectedCardSlice';

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
