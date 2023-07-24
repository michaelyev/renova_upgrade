import { configureStore } from '@reduxjs/toolkit';

import blogDataReducer from '@/app/redux/features/blogDataSlice';
import checkBoxReducer from '@/app/redux/features/checkBoxSlice';
import { navTabCategoryReducer, navTabSortReducer } from '@/app/redux/features/navTabsSlice';
import productDataReducer from '@/app/redux/features/productDataSlice';
import selectedCardReducer from '@/app/redux/features/selectedCardSlice';

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
