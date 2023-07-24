import Image from 'next/image';
import type { ReactElement } from 'react';

export const ProductsCard = (): ReactElement => (
  <div>
    <div className=" h-[428px] w-[374px] bg-slate-600 ">
      <div className=" flex justify-center text-main1 text-5xl bg-accent h-[80px] w-[203px] items-center">-20 %</div>
    </div>
    <div className="h-[171px] w-[374px] bg-main1 px-[24px]">
      <h3 className="font-inter font-normal text-base leading-[1.21] text-left  pt-[16px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </h3>

      <div className="flex justify-between items-center mt-[28px]">
        <h4 className="font-darkGrotesque text-4xl text-main ">20$/m2</h4>
        <h4 className="text-additional2">25$/m2</h4>
        <Image alt="" src="/images/icons/discounts_like.svg" width={33} height={33} />
      </div>
    </div>
  </div>
);
