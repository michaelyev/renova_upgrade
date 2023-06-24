import Image from 'next/image';
import Carousel from './Carousel';
import { FC, ReactElement } from 'react';

export const Discounts: FC = (): ReactElement => {
  return (
    <section>
      <div className="container">
        <div className="flex-col justify-items-start mt-[128px]">
          <h2 className="font-darkGrotesque font-bold text-6xl leading-[1.3552] mb-[40px]">Special Deals</h2>
          button className="items-center flex border-2 border-additional1 border-solid py-[8px] px-[24px] mb-[24px] ">
            Browse catalog
            <Image
              alt="asfasd"
              className="pl-[8px] flex-row-reverse"
              src="/images/icons/right_arrow.svg"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      <Carousel />
    </section>
  );
};
