import Image from 'next/image';
import type { FC, ReactElement } from 'react';

import { buttonConfig } from '@/constants/buttonConfig';
import type { IButtonType } from '@/interfaces/buttonType';

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
