'use client';

import type { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyledCheckbox } from '@/components/common/styledCheckbox/StyledCheckbox';
import { toggleIndex } from '@/redux/features/checkBoxSlice';
import type { RootState } from '@/redux/store/store';

interface ArrowDownProps {
  onClick(): void;
}

const ArrowDown = ({ onClick }: ArrowDownProps): ReactElement => (
  <svg onClick={onClick} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.59 0.294922L6 4.87492L1.41 0.294922L0 1.70492L6 7.70492L12 1.70492L10.59 0.294922Z" fill="#B28A87" />
  </svg>
);

const checkboxesConfigCountertops = [
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

export default function Checkboxes(): ReactElement {
  const expandedIndexes = useSelector((state: RootState): number[] => state.checkbox.expandedIndexes);
  const dispatch = useDispatch();

  const handleToggle = (index: number): void => {
    dispatch(toggleIndex(index));
  };

  return (
    <>
      {checkboxesConfigCountertops.map(
        (config, index): ReactElement => (
          <div className="mb-[35px]" key={config.title}>
            <div className="flex items-center justify-between">
              <h3 className="mb-[18px]">{config.title}</h3>
              <ArrowDown onClick={(): void => handleToggle(index)} />
            </div>

            {expandedIndexes.includes(index) && (
              <div className="flex flex-col ">
                {config.checkboxes.map(
                  (checkbox): ReactElement => (
                    <div className="flex items-center" key={checkbox.label}>
                      <StyledCheckbox />
                      <label htmlFor={`checkbox-${checkbox.label}`} className="ml-2 text-gray-700">
                        {checkbox.label}
                      </label>
                    </div>
                  )
                )}
                <div className="flex items-center mt-[18px]">
                  <h3 className="mr-[13px]">See more</h3>
                  <ArrowDown onClick={(): void => handleToggle(index)} />
                </div>
              </div>
            )}
          </div>
        )
      )}
    </>
  );
}
