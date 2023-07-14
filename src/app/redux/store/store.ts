import { configureStore } from '@reduxjs/toolkit';
import checkBoxReducer from '../features/checkBoxSlice';
import { navTabCategoryReducer, navTabSortReducer } from '../features/navTabsSlice';
import productDataReducer from '../features/productDataSlice';
import blogDataReducer from '../features/blogDataSlice';
import selectedCardReducer from '../features/selectedCardSlice';

export const store = configureStore({
  reducer: {
    checkbox: checkBoxReducer,
    navtabcategory: navTabCategoryReducer,
    navtabsort: navTabSortReducer,
    productData: productDataReducer,
    blogData: blogDataReducer,
    selectedCards: selectedCardReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
