'use client';

import Image from 'next/image';
import Link from 'next/link';
import { type FC, type ReactElement, useState } from 'react';

import { NavTabsState } from '@/components/common/navtabs/NavTabs';
import { brandLogos } from '@/constants/manufacturers';
import type { BrandLogosType } from '@/interfaces/brandLogosType';

export const Manufacturers: FC = (): ReactElement => {
  const [activeTrade, setActiveTrade] = useState<BrandLogosType>('countertops');

  return (
    <section>
      <div className="container">
        <div className="mt-[128px]">
          <h3 className="font-darkGrotesque font-bold text-4xl leading-tight mb-[40px]">Manufacturers</h3>
          <p className="pb-[24px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio consequuntur obcaecati deleniti
            alias vero ab deserunt dolores impedit mollitia. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
        </div>

        <NavTabsState tabName="manufacturers" onTabChange={setActiveTrade} />

        <div className="flex max-w-[1096px] mx-auto items-center justify-around flex-wrap mt-[57px]">
          {brandLogos[activeTrade].map((brand, index) => (
            <Link href={brand.link} key={index}>
              <Image src={brand.logo} alt="Brand Logo" width={315} height={160} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
