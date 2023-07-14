'use client';

import Checkboxes from './Checkboxes/Checkboxes';
import { Input } from '@/components';

const Selection = () => {
  return (
    <section className="max-w-[415px] border-additional1 border-solid border-2 text-left px-[32px] mt-[24px] py-[40px]">
      <h2 className="pb-[16px]">Price</h2>

      <div className="flex gap-[43px] justify-around mb-[32px]">
        <div className="">
          <h3 className="mb-[8px]">From:</h3>
          <Input placeholder="$0" id="selection" />
        </div>
        <div>
          <h3 className="mb-[8px]">To:</h3>
          <Input placeholder="$345" id="selection" />
        </div>
      </div>

      <Checkboxes />
    </section>
  );
};

export default Selection;
