'use client';
import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { SelectedIcon } from '@/components/SelectedIcon/SelectedIcon';
import { IProduct } from '@/interfaces/productsType';
import { ISelectedCard } from '@/interfaces/selectedCard';

interface IProductCard extends IProduct {
  selectedCards: ISelectedCard[];
}

const ProductCard: FC<IProductCard> = (props) => {
  if (!props) {
    return <>Loading...</>; // Render a loading state or placeholder
  }

  const {
    id,
    productName,
    title,
    productCode,
    image,
    status,
    description,
    rating,
    price,
    discountedPrice,
    characteristics,
    selectedCards,
  } = props;

  return (
    <li>
      <div>
        <div className=" h-[280px] w-[280px]  ">
          <Image alt="" src={props.image} width={280} height={280} />
          <div className=" flex justify-center text-main1 text-5xl bg-accent h-[80px] w-[203px] items-center">
            {/* {selected ? ( */}
            <strong>-20 %</strong>
            {/* ) : null} */}
          </div>
        </div>
        <div className="h-[99px] w-[280px] bg-main1 px-[24px]">
          <h3 className="font-inter font-normal text-base leading-[1.21] text-left  pt-[8px]">
            <Link href={`/products/${encodeURIComponent(props.id)}`}>{props.title}</Link>
          </h3>

          <div className="flex justify-between items-center mt-[8px]">
            <h4 className="font-darkGrotesque text-4xl text-main ">20$/m2</h4>
            <h4 className="text-additional2">25$/m2</h4>
            <SelectedIcon
              id={id}
              productName={productName}
              image={image}
              price={price}
              discountedPrice={discountedPrice}
              selectedCards={selectedCards}
            />
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProductCard;
