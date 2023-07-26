import { configureStore } from '@reduxjs/toolkit';

import blogDataReducer from '@/redux/features/blogDataSlice';
import checkBoxReducer from '@/redux/features/checkBoxSlice';
import { navTabCategoryReducer, navTabSortReducer } from '@/redux/features/navTabsSlice';
import productDataReducer from '@/redux/features/productDataSlice';
import selectedCardReducer from '@/redux/features/selectedCardSlice';

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
