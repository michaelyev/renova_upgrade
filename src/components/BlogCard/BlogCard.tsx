import Image from 'next/image';
import Link from 'next/link';
import React, { FC, ReactElement } from 'react'



export const BlogCard: FC<{ date: string; readingTime: string; id: string; title: string }> = (props) => {
    return (
      <div>
        <div className="w-[650px] max-h-[400px] relative">
          <div className="flex absolute left-0 right-0 top-5 px-5 text-main1">
            <p style={{ width: '50%' }}>{props.date}</p>
            <p style={{ width: '50%', textAlign: 'right' }}>{props.readingTime}</p>
          </div>
          <Image alt="" src="/images/products/alabaster-white-quartz.jpg" width={650} height={350} />
          <div className="h-[70px] px-[32px] py-[15px] bg-main1 h5">
            <Link  href={`/blog/${props.id}`}>{props.title}</Link>
          </div>
        </div>
      </div>
    );
  };