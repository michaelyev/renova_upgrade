import type { ReactElement } from 'react';

import { Input } from '@/components/common';
import { NavTabsRedux } from '@/components/common/navtabs/NavTabsRedux';

const ProductSearch = (): ReactElement => {
  // Define the style string using template literals
  const style = `padding-top: 4px; padding-left: 16px; margin-bottom: 28px; border: none;`;

  return (
    <div>
      <div className="mt-[24px] mb-[16px] justify-center">
        <Input id="productSearch" placeholder="Search" />
      </div>
      {/* Use the style variable to pass the styles */}
      <NavTabsRedux border="border-none" style={style} tabName="productSort" />
    </div>
  );
};

export default ProductSearch;
