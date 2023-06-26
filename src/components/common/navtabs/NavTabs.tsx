'use client';

import { navTabsConfig } from '@/constants/navTabsConfig';
import React, { ReactElement, useState } from 'react';



interface NavTabsStateProps {
  tabName: string;
  style?: string;
  border?: string;
  onTabChange: (tabId: string) => void;
}

export const NavTabsState: React.FC<NavTabsStateProps> = ({ tabName, style, border, onTabChange }): ReactElement => {
  const tabs = navTabsConfig[tabName];
  const [activeTab, setActiveTab] = useState('countertops');

  const handleClick = (tabId) => {
    setActiveTab(tabId);
    onTabChange(tabId)
  };

  return (
    <div className={`flex gap-5 ${border ? border : 'border-b-2 border-solid border-additional2'} container`}>
      {tabs.map((tab) => {
        return (
          <div
            key={tab.id}
            onClick={(): void => handleClick(tab.id)}
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
