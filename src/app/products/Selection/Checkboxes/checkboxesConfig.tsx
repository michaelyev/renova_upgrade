import React from 'react';

interface ArrowDownProps {
  onClick(): void;
}

export const ArrowDown = ({ onClick }: ArrowDownProps) => (
  <svg onClick={onClick} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z" fill="#B28A87" />
  </svg>
);

export const checkboxesConfigCountertops = [
  {
    title: 'Manufacturers',
    isChecked: true,
    checkboxes: [
      {
        label: 'Ashland',
        isChecked: true,
      },
      {
        label: 'Benton',
      },
      {
        label: 'Boulder',
      },
    ],
  },
  {
    title: 'Types',
    isChecked: true,
    checkboxes: [
      {
        label: 'Countertop',
        isChecked: true,
      },
      {
        label: 'Wall',
      },
    ],
  },
  {
    title: 'Finish',
    checkboxes: [
      {
        label: 'Antique',
      },
      {
        label: 'Antique2',
      },
    ],
  },
];
