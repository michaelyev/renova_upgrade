import React, { FC, ReactElement } from 'react';
import Image from 'next/image';
import { buttonConfig } from '@/constants/buttonConfig';
import { IButtonTypeData } from '@/interfaces/buttonType';

type buttonType = 'feedback' | 'request' | 'browseRight' | 'browseLeft' | 'browse'

interface IButtonType {
  type: buttonType;
  imageName?: string;
}

export const Button: FC<IButtonType> = ({ type, imageName }): ReactElement => {
  const btn = buttonConfig[type];
  
  return (
    <button className={btn?.style}>
      {btn?.text}
      {btn?.icon && (
        <Image className="pl-[8px]" src={`/images/icons/${imageName}.svg`} width={24} height={24} alt="dsfvs" />
      )}
    </button>
  );
};
