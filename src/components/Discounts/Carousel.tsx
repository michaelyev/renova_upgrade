import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import SwiperCore, { Navigation } from 'swiper';
import { FC, ReactElement } from 'react';
import { DiscountsCard } from './DiscountsCards';
import { useSelector } from 'react-redux';
import { IProduct } from '@/interfaces/productsType';
import { RootState } from '@/app/redux/store/store';

SwiperCore.use([Navigation]);

interface CarouselProps {
  discounts: IProduct[];
}

const Carousel: FC<CarouselProps> = ({ discounts }): ReactElement => {
  const selectedCards = useSelector((state: RootState) => state.selectedCards.selectedCards);

  if (!discounts || !selectedCards) {
    return <>Loading...</>; // Render a loading state or placeholder
  }

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
        <div className="">
          {discounts.map((discountCard) => (
            <SwiperSlide key={discountCard.id}>
              <DiscountsCard discountCard={discountCard} selectedCards={selectedCards} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="swiper-button-next absolute right-0">
        <Image alt="Next" src="/images/icons/right_arrow_discount.svg" width={80} height={80} />
      </div>
    </section>
  );
};

export default Carousel;
