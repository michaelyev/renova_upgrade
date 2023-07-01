import { Input } from '@/components'
import { BlogCard } from '@/components/BlogCard/BlogCard';
import { FC, ReactElement } from 'react';

 const Blog:FC = ():ReactElement => {
    
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
        <BlogCard />
        
      </div>
    </section>
  );
}

export default Blog
