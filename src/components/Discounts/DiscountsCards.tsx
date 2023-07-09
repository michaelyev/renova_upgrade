import Image from 'next/image';
import React from 'react';
import { SwiperSlide } from 'swiper/react';

export const DiscountsCards = ({ discountCard, selectedCards, setSelectedCards }) => {
  const { id, productName, image, price, discountedPrice } = discountCard;

  const handleSelectionClick = () => {
    if (selectedCards.find((card) => card.id === id)) return;
    const newSelectedCards = [...selectedCards, { id, productName, image, price, discountedPrice }];
    setSelectedCards(newSelectedCards);
    localStorage.setItem('selectedCard', JSON.stringify(newSelectedCards));
  };

  return (
    <SwiperSlide>
      <div className=" h-[428px] w-[374px]">
        <div className="flex justify-center text-main1 text-5xl bg-accent h-[80px] w-[203px] items-center">-20 %</div>
        <Image src={discountCard?.image} width={374} height={428} />
        <div className="h-[171px] w-[374px] bg-main1 px-[24px]">
          <h3 className="font-inter font-normal text-base leading-[1.21] text-left  pt-[16px]">
            {discountCard.description}
          </h3>
          <div className="flex justify-between items-center mt-[28px]">
            <h4 className="font-darkGrotesque text-4xl text-main ">{discountCard.price}</h4>
            <h4 className="text-additional2">{discountCard?.discountedPrice}</h4>
            {selectedCards?.find((card) => card.id === id) ? (
              'selected'
            ) : (
              <Image
                onClick={handleSelectionClick}
                alt=""
                src="/images/icons/discounts_like.svg"
                width={33}
                height={33}
              />
            )}
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
}
