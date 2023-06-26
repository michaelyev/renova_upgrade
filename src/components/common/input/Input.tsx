'use client';
import React, { FC, ReactElement } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { inputConfig } from '@/constants/inputConfig';
import { IInputType } from '@/interfaces/inputConfig';

interface IInput {
  id: keyof IInputType;
  placeholder?: string;
  label?: string;
  type?: string;
}

export const Input: FC<IInput> = ({ id, placeholder, label, type }): ReactElement => {
  const input = inputConfig[id];
  return (
    <label className="relative">
      {label}
      <input className={input?.styles} type={input?.type} placeholder={placeholder} />
      {input?.button}
    </label>
  );
};
