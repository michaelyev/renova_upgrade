import { useSelector, useDispatch } from 'react-redux';
import { setActiveTabCategory, setActiveTabSort } from '@/app/redux/features/navTabsSlice';
import { navTabsConfig } from '@/constants/navTabsConfig';

const NavTabsRedux = ({ tabName, style, border }) => {
  const tabs = navTabsConfig[tabName];

  const activeTabCategory = useSelector((state) => state.navtabcategory.activeTab);
  const activeTabSort = useSelector((state) => state.navtabsort.activeTab);
  const dispatch = useDispatch();

  const handleClick = (id) => {
    if (tabName === 'productSort') {
      dispatch(setActiveTabSort(id));
    }
    if (tabName === 'products') {
      dispatch(setActiveTabCategory(id));
    }
  };

  return (
    <div className={`flex gap-5 ${border ? border : 'border-b-2 border-solid border-additional2'}   container`}>
      {tabs.map((tab) => {
        return (
          <div
            key={tab.text}
            onClick={() => handleClick(tab.id)}
            className={`${style ? style : 'py-[16px] px-[24px]'}  ${
              (tabName === 'productSort' ? activeTabSort : activeTabCategory) === tab.id
                ? 'bg-additional2 text-main1'
                : 'bg-main1 text-additional2'
            } `}
          >
            {tab.text}
          </div>
        );
      })}
    </div>
  );
};

export { NavTabsRedux };
