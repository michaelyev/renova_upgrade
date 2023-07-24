import type { FC, ReactElement } from 'react';

import { inputConfig } from '@/constants/inputConfig';
import type { IInputType } from '@/interfaces/inputConfig';

interface IInput {
  id: keyof IInputType;
  placeholder?: string;
  label?: string;
  type?: string;
}

export const Input: FC<IInput> = ({ id, placeholder, label }): ReactElement => {
  const input = inputConfig[id];

  return (
    <label className="relative" htmlFor={id}>
      {label}
      <input id={id} className={input?.styles} type={input?.type} placeholder={placeholder} />
      {input?.button}
    </label>
  );
};
