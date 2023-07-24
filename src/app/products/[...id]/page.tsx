import type { ReactElement } from 'react';

import { Product } from '@/pagesCollection/Product/Product';

export default function ProductPage({ params: { id } }: { params: { id: string } }): ReactElement {
  return (
    <section className="container pt-[108px] pb-[64px]">
      <Product id={id} />

      <p className="mt-[128px] mb-[40px] h3 ">You may also like</p>

      {/* <Reviews card={<ProductCard />} /> */}

      <p className="mt-[128px] mb-[40px] h3 ">You recently viewed</p>

      {/* <Reviews card={<ProductCard />} /> */}
    </section>
  );
}
