'use client';

import axios from 'axios';
import NextImage from 'next/image';
import { type FC, useEffect, useState } from 'react';
import useSWR from 'swr';

import { Button } from '@/components/common';

interface ImageData {
  width: number;
  height: number;
  src: string;
}

const fetchImages = async (url: string): Promise<ImageData[]> => {
  const response = await axios.get(url);
  const dataResponse = response.data;
  const images = dataResponse?.message?.slice(0, 5);

  return images.map((src: string) => ({
    width: 0,
    height: 0,
    src,
  }));
};

export const Portfolio: FC = () => {
  const { data } = useSWR<ImageData[]>('https://dog.ceo/api/breed/husky/images', fetchImages);
  const [imageData, setImageData] = useState<ImageData[]>([]);

  useEffect(() => {
    if (data) {
      const updatedImageData = data.map((imgProps: ImageData) => {
        const img = new Image();
        img.src = imgProps.src;
        img.onload = () => {
          const updatedImgProps: ImageData = {
            ...imgProps,
            width: img.naturalWidth,
            height: img.naturalHeight,
          };
          setImageData((prevImageData) =>
            prevImageData.map((prevImgProps) => (prevImgProps.src === imgProps.src ? updatedImgProps : prevImgProps))
          );
        };

        return imgProps;
      });
      setImageData(updatedImageData);
    }
  }, [data]);

  return (
    <section className="container">
      <div className="mt-[128px]">
        <h3 className="font-darkGrotesque font-bold text-4xl leading-tight mb-[40px]">Dive Into Our Work</h3>
        <p className="pb-[24px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio consequuntur obcaecati deleniti
          alias vero ab deserunt dolores impedit mollitia. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div className="flex flex-wrap justify-between items-center ">
        {imageData.map((imgProps: ImageData) => (
          <div key={imgProps.src} className="mb-[24px]">
            <NextImage alt="" className="object-cover w-full h-[320px]" {...imgProps} />
          </div>
        ))}
        <div className="min-w-[400px] flex justify-center items-center ">
          <Button type="browse" imageName="right_arrow" />
        </div>
      </div>
    </section>
  );
};
