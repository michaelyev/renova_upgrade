import Image from 'next/image';
import { Button } from '../common';
import { FC, ReactElement } from 'react';

export const Products: FC = (): ReactElement => {
  return (
    <section className="mt-[128px]">
      <div className="container ">
        <h3 className="font-darkGrotesque font-bold text-4xl leading-tight">Heading Text</h3>

        <div className="flex justify-center">
          <div className=" w-1/2 text-right">
            <div className="border-b-2 border-additional1 border-solid pb-[8px] mb-[24px]">
              <h2 className="mt-[98px] font-inter font-bold text-xl leading-[1.2104]">Countertops</h2>
            </div>
            <p className="font-inter font-normal text-base leading-[1.21] text-right mb-[32px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. A?
            </p>

            <Button type="browseRight" imageName="right_arrow" />
          </div>
          <div className=" w-1/2 mt-[40px] ml-[20px]">
            <Image src="/images/products_countertops.jpg" width={650} height={296} alt="count" />
          </div>
        </div>

        <div className="flex justify-center items-center mt-[24px]">
          <div className="w-1/2">
            <Image src="/images/products_countertops.jpg" width={650} height={296} alt="count" />
          </div>

          <div className="ml-[20px] w-1/2">
            <div className="border-b-2 border-additional1 border-solid pb-[8px] mb-[24px] ">
              <h2 className=" font-inter font-bold text-xl leading-[1.2104]">Countertops</h2>
            </div>
            <p className="font-inter font-normal text-base leading-[1.21] text-left mb-[32px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. A?
            </p>
            <Button type="browseLeft" imageName="right_arrow" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-1/2 text-right ">
            <div className="border-b-2 border-additional1 border-solid pb-[8px] mb-[24px]">
              <h2 className="mt-[98px] font-inter font-bold text-xl leading-[1.2104]">Countertops</h2>
            </div>
            <p className="font-inter font-normal text-base leading-[1.21] text-right mb-[32px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. A?
            </p>

            <Button type="browseRight" imageName="right_arrow" />
          </div>
          <div className=" w-1/2 mt-[40px] ml-[20px]">
            <Image src="/images/products_countertops.jpg" width={650} height={296} alt="count" />
          </div>
        </div>
      </div>
    </section>
  );
};
