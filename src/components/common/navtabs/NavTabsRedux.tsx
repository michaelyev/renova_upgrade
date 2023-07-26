import type { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { navTabsConfig } from '@/constants/navTabsConfig';
import type { NavTabRedux } from '@/interfaces/navTabRedux';
import { setActiveTabCategory, setActiveTabSort } from '@/redux/features/navTabsSlice';
import type { RootState } from '@/redux/store/store';

const NavTabsRedux: FC<NavTabRedux> = ({ tabName, style, border }): ReactElement => {
  const tabs = navTabsConfig[tabName];

  const activeTabCategory = useSelector((state: RootState) => state.navtabcategory.activeTab);
  const activeTabSort = useSelector((state: RootState) => state.navtabsort.activeTab);
  const dispatch = useDispatch();

  const handleClick = (id: string) => {
    if (tabName === 'productSort') {
      dispatch(setActiveTabSort(id));
    }

    if (tabName === 'products') {
      dispatch(setActiveTabCategory(id));
    }
  };

  return (
    <div className={`flex gap-5 ${border || 'border-b-2 border-solid border-additional2'}   container`}>
      {tabs.map((tab) => (
        <button
          key={tab.text}
          onClick={() => handleClick(tab.id)}
          className={`${style || 'py-[16px] px-[24px]'}  ${
            (tabName === 'productSort' ? activeTabSort : activeTabCategory) === tab.id
              ? 'bg-additional2 text-main1'
              : 'bg-main1 text-additional2'
          } `}
        >
          {tab.text}
        </button>
      ))}
    </div>
  );
};

export { NavTabsRedux };
