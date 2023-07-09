import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import SwiperCore, { Navigation } from 'swiper';
import { FC, ReactElement } from 'react';

SwiperCore.use([Navigation]);

const Carousel: FC = ({ discounts, selectedCards, setSelectedCards }): ReactElement => {

  const handleSelectionClick = (discountCard) => {
    if (selectedCards.find((card) => card.id === discountCard.id)) return;
    const newSelectedCards = [...selectedCards, discountCard];
    setSelectedCards(newSelectedCards);
    localStorage.setItem('selectedCard', JSON.stringify(newSelectedCards));
  };

  return (
    <section className="flex items-center">
      <div className="swiper-button-prev absolute left-0">
        <Image alt="Prev" src="/images/icons/left_arrow_discount.svg" width={80} height={80} />
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={50}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="mySwiper max-w-[1300px]"
      >
        {discounts.map((discountCard) => (
          <SwiperSlide key={discountCard.id}>
            <div className="h-[428px] w-[374px]">
              <div className="flex justify-center text-main1 text-5xl bg-accent h-[80px] w-[203px] items-center">-20 %</div>
              <Image src={discountCard?.image} width={374} height={428} />
              <div className="h-[171px] w-[374px] bg-main1 px-[24px]">
                <h3 className="font-inter font-normal text-base leading-[1.21] text-left pt-[16px]">
                  {discountCard.description}
                </h3>
                <div className="flex justify-between items-center mt-[28px]">
                  <h4 className="font-darkGrotesque text-4xl text-main ">{discountCard.price}</h4>
                  <h4 className="text-additional2">{discountCard?.discountedPrice}</h4>
                  {selectedCards?.find((card) => card.id === discountCard.id) ? (
                    'selected'
                  ) : (
                    <Image
                      onClick={() => handleSelectionClick(discountCard)}
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
        ))}
      </Swiper>
      <div className="swiper-button-next absolute right-0">
        <Image alt="Next" src="/images/icons/right_arrow_discount.svg" width={80} height={80} />
      </div>
    </section>
  );
}

export default Carousel;
