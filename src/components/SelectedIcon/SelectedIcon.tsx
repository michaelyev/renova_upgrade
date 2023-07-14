import React, { FC } from 'react';
import { useAppDispatch } from '@/app/redux/hooks';
import Image from 'next/image';
import { handleSelectionClick } from '@/helpers/selectedClick';
import { ISelectedCard } from '@/interfaces/selectedCard';

interface ISelectedIconProps {
  id: number;
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
    <>
      <Image
        onClick={() => handleSelectionClick(id, selectedCards, productName, image, price, discountedPrice, dispatch)}
        alt=""
        src={
          !!selectedCards?.find((card) => card.id === Number(id))
            ? '/images/icons/discounts_like.svg'
            : '/images/icons/right_arrow.svg'
        }
        width={26}
        height={26}
      />
    </>
  );
};
