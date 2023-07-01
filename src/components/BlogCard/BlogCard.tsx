import Image from 'next/image';
import React, { FC, ReactElement } from 'react'

export const BlogCard:FC = ():ReactElement => {
  return (
    <div>
      <div className=" w-[650px] max-h-[400px] relative  ">
        <div>
          <p>{date}</p>
          <p>{readingTime}</p>
        </div>
        <Image src="/images/products/alabaster-white-quartz.jpg" width={650} height={350} />
        <div className="h-[70px] px-[32px] py-[15px] bg-main1 h5">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}
