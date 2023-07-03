'use client';
import { ContactForm, Input } from '@/components';
import { BlogCard } from '@/components/BlogCard/BlogCard';
import { FC, ReactElement, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { blogData, fetchBlogData } from '@/app/redux/features/blogDataSlice';
import { useDispatch } from 'react-redux';
import { getData } from '@/helpers/getData';
import { useActions } from '@/hook/useActions';

const Blog: FC = (): ReactElement => {
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
          {blog.map((blogI) => (
            <BlogCard {...blogI} />
          ))}
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Blog;
