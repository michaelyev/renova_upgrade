'use client';
import Carousel from './Carousel';
import { FC, ReactElement, useEffect, useState } from 'react';
import { Button } from '../common';
import { getData } from '@/helpers/getData';
import { IProduct } from '@/interfaces/productsType';

export const Discounts: FC = (): ReactElement => {
  const [discounts, setDiscounts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getDiscounts = async () => {
      const data = await getData('/discounts.json');
      setDiscounts(data);
    };
    getDiscounts();
  }, []);

  return (
    <section>
      <div className="container">
        <div className="flex-col justify-items-start mt-[128px] mb-[24px]">
          <h2 className="font-darkGrotesque font-bold text-6xl leading-[1.3552] mb-[40px]">Special Deals</h2>
          <Button type="browse" imageName="right_arrow" />
        </div>
      </div>
      <Carousel discounts={discounts} />
    </section>
  );
};
