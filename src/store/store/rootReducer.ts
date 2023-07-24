// objects
import { combineReducers } from '@reduxjs/toolkit';

import blogDataReducer from '@/store/features/blogDataSlice';
import checkBoxReducer from '@/store/features/checkBoxSlice';
import { navTabCategoryReducer, navTabSortReducer } from '@/store/features/navTabsSlice';
import productDataReducer from '@/store/features/productDataSlice';
import selectedCardReducer from '@/store/features/selectedCardSlice';

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
