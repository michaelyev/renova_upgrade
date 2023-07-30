import React, { type ReactElement } from 'react';

import { getData } from '@/helpers/getData';
import type { BlogItem } from '@/interfaces/blogItem';
import { BlogArticlePage } from '@/pagesCollection/BlogArticle';

/* eslint-disable */ export async function generateStaticParams() {
  const blogs: BlogItem[] = await getData(`http://localhost:5000/blog`);

  return blogs.map((blog: BlogItem) => ({
    url: blog.url,
  }));
}
type Params = {
  url: string;
};

type PageProps = {
  params: Params;
};

export default async function Page({ params }: PageProps): Promise<ReactElement> {
  const blogProps = await getData(`http://localhost:5000/blog/${params.url}`);

  return <BlogArticlePage {...blogProps[0]} />;
}
