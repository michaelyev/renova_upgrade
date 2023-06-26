import Image from 'next/image';
import Carousel from './Carousel';
import { FC, ReactElement } from 'react';
import { Button } from '../common';

export const Discounts: FC = (): ReactElement => {
  return (
    <section>
      <div className="container">
        <div className="flex-col justify-items-start mt-[128px]">
          <h2 className="font-darkGrotesque font-bold text-6xl leading-[1.3552] mb-[40px]">Special Deals</h2>
          <Button type="browse" imageName="right_arrow_discount" />
        </div>
      </div>

      <Carousel />
    </section>
  );
};
