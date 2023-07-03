'use client';
import { blogData, fetchBlogData } from '@/app/redux/features/blogDataSlice';
import { useActions } from '@/hook/useActions';
import Image from 'next/image';
import React, { FC, ReactElement, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const Blog: FC = (): ReactElement => {
  const { blog } = useSelector(blogData);
  const { fetchBlogData } = useActions();

  useEffect(() => {
    fetchBlogData();
  }, []);

  console.log(blog.length);

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

        <div className="flex justify-around">
          <div>
            <div>
              <Image alt="" src="/images/blog_image.jpeg" height={320} width={650} />
            </div>
            <div className="bg-main1 w-[650px] h-[80px] text-left ">
              <h4> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, id! </h4>
            </div>
          </div>

          <div>
            <div className="border-b-2 border-solid border-additional1 mb-[40px]">
              <span className="flex items-center gap-10 mb-[16px]">
                <h4> Sat, 10 Jun 2023 </h4>
                <span className="flex items-center justify-between gap-10">
                  <span className="flex items-center">
                    <Image alt="" src="/images/icons/ic_outline-remove-red-eye.svg" width={24} height={24} />{' '}
                    <h3 className="ml-2">311</h3>
                  </span>{' '}
                  <h3 className="">{blog.title}</h3>
                </span>
              </span>
              <h3 className="font-inter font-bold text-xl leading-[1.2104] pb-[40px]">
                Which stone is right for your kitchen?
              </h3>
            </div>

            <div className="border-b-2 border-solid border-additional1 mb-[40px]">
              <span className="flex items-center gap-10 mb-[16px] ">
                <h4> Sat, 10 Jun 2023 </h4>
                <span className="flex items-center justify-between gap-10">
                  {' '}
                  <span className="flex items-center">
                    {' '}
                    <Image alt="" src="/images/icons/ic_outline-remove-red-eye.svg" width={24} height={24} />{' '}
                    <h3 className="ml-2">311</h3>{' '}
                  </span>{' '}
                  <h3 className="">5 min. for reading</h3>{' '}
                </span>
              </span>
              <h3 className="font-inter font-bold text-xl leading-[1.2104] pb-[40px]">
                Which stone is right for your kitchen?
              </h3>
            </div>

            <button className="items-center flex border-2 border-additional1 border-solid py-[8px] px-[24px] mr-auto">
              Browse catalog
              <Image className="pl-[8px]" src="/images/icons/right_arrow.svg" width={24} height={24} alt="dsfvs" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
