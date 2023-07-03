import { combineReducers } from '@reduxjs/toolkit';
import checkBoxReducer from '../features/checkBoxSlice';
import { navTabCategoryReducer, navTabSortReducer } from '../features/navTabsSlice';
import productDataReducer from '../features/productDataSlice'; // objects
import blogDataReducer from '../features/blogDataSlice';
import selectedCardReducer from '../features/selectedCardSlice'

const rootReducer = combineReducers({
  checkbox: checkBoxReducer,
  navtabsort: navTabSortReducer,
  navtabcategory: navTabCategoryReducer,
  productData: productDataReducer,
  blogData: blogDataReducer,
  selectedCard: selectedCardReducer

});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
