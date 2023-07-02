'use client';

import { navTabsConfig } from '@/constants/navTabsConfig';
import { BrandLogosType } from '@/interfaces/brandLogosType';
import { BrandLogos } from '@/interfaces/manufacturers';
import { INavTabsConfig } from '@/interfaces/navTabs';
import React, { ReactElement, useState } from 'react';

interface NavTabsStateProps {
  tabName: keyof INavTabsConfig;
  style?: string;
  border?: string;
  onTabChange: (tabId: BrandLogosType) => void;
}

export const NavTabsState: React.FC<NavTabsStateProps> = ({ tabName, style, border, onTabChange }): ReactElement => {
  const tabs = navTabsConfig[tabName];
  const [activeTab, setActiveTab] = useState<BrandLogosType>('countertops');

  const handleClick = (tabId: BrandLogosType) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <div className={`flex gap-5 ${border ? border : 'border-b-2 border-solid border-additional2'} container`}>
      {tabs.map((tab) => {
        return (
          <div
            key={tab.id}
            onClick={(): void => handleClick(tab.id as BrandLogosType)}
            className={`${style ? style : 'py-[16px] px-[24px]'}  ${
              activeTab === tab.id ? 'bg-additional2 text-main1' : 'bg-main1 text-additional2'
            } `}
          >
            {tab.text}
          </div>
        );
      })}
    </div>
  );
};
