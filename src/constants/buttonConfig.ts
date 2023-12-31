import type { IButtonTypeData } from '@/interfaces/buttonType';

interface ButtonConfigObject {
  [key: string]: IButtonTypeData;
}

export const buttonConfig: ButtonConfigObject = {
  browse: {
    text: 'Browse catalog',
    icon: true,
    style: 'items-center flex border-2 border-additional1 border-solid py-[8px] px-[24px]',
  },
  browseRight: {
    text: 'Browse catalog',
    icon: true,
    style: 'items-center flex border-2 border-additional1 border-solid py-[8px] px-[24px] ml-auto',
  },
  browseLeft: {
    text: 'Browse catalog',
    icon: true,
    style: 'items-center flex border-2 border-additional1 border-solid py-[8px] px-[24px] mr-auto',
  },

  feedback: {
    text: 'Leave feedback',
    icon: false,
    style: 'border-2 border-additional1 border-solid py-[8px] px-[24px]',
  },
};
