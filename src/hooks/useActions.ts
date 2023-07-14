import { bindActionCreators } from '@reduxjs/toolkit';

import * as fetchBlogData from '@/app/redux/features/asyncActions/fetchBlogData';
import * as fetchProductData from '@/app/redux/features/asyncActions/fetchProductData';

import { useAppDispatch } from '@/app/redux/hooks';
import { useMemo } from 'react';

type actionsType = typeof fetchBlogData & typeof fetchProductData;

export const useActions = (): actionsType => {
  const dispatch = useAppDispatch();
  return useMemo((): actionsType => {
    const activeActions: actionsType = {
      ...fetchBlogData,
      ...fetchProductData,
    };
    return bindActionCreators(activeActions, dispatch);
  }, [dispatch]);
};
