'use client';
import React, { FC } from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { inputConfig } from './inputconfig';

interface IInput {
  id: string;
  placeholder?: string;
  label?: string;
  type?: string;
}

export const Input: FC<IInput> = ({ id, placeholder, label, type }) => {
  const input = inputConfig[id];
  return (
    <label className="relative">
      {label}
      <input className={input.styles} type={input.type} placeholder={placeholder} />
      {input.button}
    </label>
  );
};
