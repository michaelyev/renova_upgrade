import Image from 'next/image';
import type { FC, ReactElement } from 'react';

import { SelectedIcon } from '@/components/SelectedIcon/SelectedIcon';
import type { IProduct } from '@/interfaces/productsType';
import type { ISelectedCard } from '@/interfaces/selectedCard';

interface IDicsoundCards {
  discountCard: IProduct;
  selectedCards: ISelectedCard[];
}

export const DiscountsCard: FC<IDicsoundCards> = ({ discountCard, selectedCards }): ReactElement => (
  <div className="h-[428px] w-[374px]">
    <div className="flex justify-center text-main1 text-5xl bg-accent h-[80px] w-[203px] items-center">-20 %</div>
    <Image alt="" src={discountCard.image} width={374} height={428} />
    <div className="h-[171px] w-[374px] bg-main1 px-[24px]">
      <h3 className="font-inter font-normal text-base leading-[1.21] text-left pt-[16px]">
        {discountCard.description}
      </h3>
      <div className="flex justify-between items-center mt-[28px]">
        <h4 className="font-darkGrotesque text-4xl text-main ">{discountCard.price}</h4>
        <h4 className="text-additional2">{discountCard?.discountedPrice}</h4>
        <SelectedIcon
          id={discountCard.id}
          productName={discountCard.productName}
          image={discountCard.image}
          price={discountCard.price}
          discountedPrice={discountCard.discountedPrice}
          selectedCards={selectedCards}
        />
      </div>
    </div>
  </div>
);
