import Image from 'next/image';
import React, { type FC } from 'react';

import { handleSelectionClick } from '@/helpers/selectedClick';
import type { ISelectedCard } from '@/interfaces/selectedCard';
import { useAppDispatch } from '@/redux/hooks';

interface ISelectedIconProps {
  id: string;
  selectedCards: ISelectedCard[];
  productName: string;
  image: string;
  price: string | number;
  discountedPrice: number;
}
export const SelectedIcon: FC<ISelectedIconProps> = ({
  id,
  selectedCards,
  productName,
  image,
  price,
  discountedPrice,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Image
      onClick={() => handleSelectionClick(id, selectedCards, productName, image, price, discountedPrice, dispatch)}
      alt=""
      src={
        selectedCards?.find((card) => card.id === id)
          ? '/images/icons/discounts_like.svg'
          : '/images/icons/right_arrow.svg'
      }
      width={26}
      height={26}
    />
  );
};
