'use client';

import { type FC, type ReactElement, useState } from 'react';

import { CheckIcon } from '@/components';

export const StyledCheckbox: FC = (): ReactElement => {
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleCheckboxChange = (): void => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="inline-flex items-center">
      <label
        htmlFor="styled-checkbox"
        className="relative flex cursor-pointer items-center rounded-full p-3"
        data-ripple-dark="true"
      >
        <input
          id="styled-checkbox"
          type="checkbox"
          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none  border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-accent checked:bg-additional1 checked:before:bg-pink-500 hover:before:opacity-10"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
          <CheckIcon />
        </div>
      </label>
    </div>
  );
};
