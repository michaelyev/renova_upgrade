'use client';

import type { ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { ContactForm, Input } from '@/components';
import { BlogCard } from '@/components/BlogCard/BlogCard';
import { useActions } from '@/hooks/useActions';
import { type BlogItem } from '@/interfaces/blogItem';
import { blogData } from '@/store/features/blogDataSlice';

export default function Blog(): ReactElement {
  const { blog } = useSelector(blogData);
  const { fetchBlogData } = useActions();

  if (!blog.length) {
    fetchBlogData('blogData');
  }

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
        <div className="flex flex-wrap gap-[20px] mb-[130px]">
          {blog.map(
            (blogInfo: BlogItem): ReactElement => (
              <BlogCard {...blogInfo} />
            )
          )}
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
