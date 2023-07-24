import Image from 'next/image';
import type { FC, ReactElement } from 'react';

import { ratings } from '@/constants/ratings';

export const Ratings: FC = (): ReactElement => (
  <section>
    <div className="container">
      <div className="mt-[128px]">
        <h3 className="font-darkGrotesque font-bold text-4xl leading-tight mb-[40px]">Manufacturers</h3>
        <p className="pb-[24px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio consequuntur obcaecati deleniti
          alias vero ab deserunt dolores impedit mollitia. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div className="flex flex-wrap justify-around items-center gap-5 mt-[67px]">
        {ratings.map(({ logo, link }, i) => (
          <a key={i} href={link}>
            {' '}
            <Image alt="" src={logo} width={315} height={0} />{' '}
          </a>
        ))}
      </div>
    </div>
  </section>
);
