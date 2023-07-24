import { configureStore } from '@reduxjs/toolkit';

import blogDataReducer from '@/store/features/blogDataSlice';
import checkBoxReducer from '@/store/features/checkBoxSlice';
import { navTabCategoryReducer, navTabSortReducer } from '@/store/features/navTabsSlice';
import productDataReducer from '@/store/features/productDataSlice';
import selectedCardReducer from '@/store/features/selectedCardSlice';

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
