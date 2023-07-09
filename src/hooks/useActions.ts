import { bindActionCreators } from '@reduxjs/toolkit';

import * as blogData from '@/app/redux/features/blogDataSlice';
import * as productData from '@/app/redux/features/productDataSlice';
import * as selectedCard from '@/app/redux/features/selectedCardSlice'

import { useAppDispatch } from '@/app/redux/hooks';

type actionsType = typeof blogData | typeof productData | typeof selectedCard

export const useActions = (): actionsType => {
  const dispatch = useAppDispatch();

  return bindActionCreators({ ...blogData, ...productData, }, dispatch);
};
