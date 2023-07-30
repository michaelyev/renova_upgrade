'use client';

import type { ReactElement } from 'react';

import type { BlogItem } from '@/interfaces/blogItem';

export const BlogArticlePage = ({ date, title, readingTime, type }: BlogItem): ReactElement => (
  <section>
    <article>
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{readingTime}</p>
      <p className="text-gray-500 text-sm mb-2">{type}</p>
    </article>
  </section>
);
