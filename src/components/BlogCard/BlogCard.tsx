import Image from 'next/image';
import Link from 'next/link';
import type { FC, ReactElement } from 'react';

type BlogCardProps = {
  date: string;
  readingTime: string;
  id: number;
  title: string;
};

export const BlogCard: FC<BlogCardProps> = ({ date, readingTime, id, title }): ReactElement => (
  <div>
    <div className="w-[650px] max-h-[400px] relative">
      <div className="flex absolute left-0 right-0 top-5 px-5 text-main1">
        <p style={{ width: '50%' }}>{date}</p>
        <p style={{ width: '50%', textAlign: 'right' }}>{readingTime}</p>
      </div>
      <Image alt="" src="/images/products/alabaster-white-quartz.jpg" width={650} height={350} />
      <div className="h-[70px] px-[32px] py-[15px] bg-main1 h5">
        <Link href={`/blog/${id}`}>{title}</Link>
      </div>
    </div>
  </div>
);
