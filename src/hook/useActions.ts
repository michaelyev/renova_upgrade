import { bindActionCreators } from '@reduxjs/toolkit';

import * as blogData from '@/app/redux/features/blogDataSlice';
import * as productData from '@/app/redux/features/productDataSlice';
import { useAppDispatch } from '@/app/redux/hooks';

type actionsType = typeof blogData | typeof productData 

export const useActions = (): actionsType => {
  const dispatch = useAppDispatch();

  return bindActionCreators({ ...blogData, ...productData, }, dispatch);
};
