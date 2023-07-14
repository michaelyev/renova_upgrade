import { ArrowDown, checkboxesConfigCountertops } from './checkboxesConfig';
import { StyledCheckbox } from '@/components/common/styledCheckbox/StyledCheckbox';

//redux toolkit
import { useSelector, useDispatch } from 'react-redux';
import { toggleIndex } from '../../../redux/features/checkBoxSlice';
import { RootState } from '@/app/redux/store/store';

const Checkboxes = () => {
  const expandedIndexes = useSelector((state: RootState) => state.checkbox.expandedIndexes);
  const dispatch = useDispatch();

  const handleToggle = (index: number) => {
    dispatch(toggleIndex(index));
  };

  return (
    <>
      {checkboxesConfigCountertops.map((config, index) => (
        <div className="mb-[35px]" key={config.title}>
          <div className="flex items-center justify-between">
            <h3 className="mb-[18px]">{config.title}</h3>
            <ArrowDown onClick={() => handleToggle(index)} />
          </div>

          {expandedIndexes.includes(index) && (
            <div className="flex flex-col ">
              {config.checkboxes.map((checkbox) => (
                <div className="flex items-center" key={checkbox.label}>
                  <StyledCheckbox />
                  <label htmlFor={`checkbox-${checkbox.label}`} className="ml-2 text-gray-700">
                    {checkbox.label}
                  </label>
                </div>
              ))}
              <div className="flex items-center mt-[18px]">
                <h3 className="mr-[13px]">See more</h3>
                <ArrowDown onClick={() => handleToggle(index)} />
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Checkboxes;
