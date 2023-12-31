import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';

import * as fetchBlogData from '@/redux/features/asyncActions/fetchBlogData';
import * as fetchProductData from '@/redux/features/asyncActions/fetchProductData';
import { useAppDispatch } from '@/redux/hooks';

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
