import { type ReactElement } from 'react';

import { ContactForm, Input } from '@/components';
import { BlogPageCardList } from '@/components/BlogPageCardList';

export default function Blog(): ReactElement {
  return (
    <section className="pt-[154px]">
      <div className="container ">
        <div className="flex justify-center">
          <Input id="blogSearch" />
        </div>

        <p className="mt-[40px] mb-[24px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis error quas laborum pariatur illo sit
          eaque deleniti? Voluptas, minus.
        </p>
        <BlogPageCardList />
        <ContactForm />
      </div>
    </section>
  );
}
