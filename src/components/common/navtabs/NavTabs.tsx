'use client';

import { type ReactElement, useState } from 'react';

import { navTabsConfig } from '@/constants/navTabsConfig';
import type { BrandLogosType } from '@/interfaces/brandLogosType';
import type { INavTabsConfig } from '@/interfaces/navTabs';

interface NavTabsStateProps {
  tabName: keyof INavTabsConfig;
  style?: string;
  border?: string;
  onTabChange(tabId: BrandLogosType): void;
}

export const NavTabsState: React.FC<NavTabsStateProps> = ({ tabName, style, border, onTabChange }): ReactElement => {
  const tabs = navTabsConfig[tabName];
  const [activeTab, setActiveTab] = useState<BrandLogosType>('countertops');

  const handleClick = (tabId: BrandLogosType) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <div className={`flex gap-5 ${border || 'border-b-2 border-solid border-additional2'} container`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={(): void => handleClick(tab.id as BrandLogosType)}
          className={`${style || 'py-[16px] px-[24px]'}  ${
            activeTab === tab.id ? 'bg-additional2 text-main1' : 'bg-main1 text-additional2'
          } `}
        >
          {tab.text}
        </button>
      ))}
    </div>
  );
};
