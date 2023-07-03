'use client';
import { getData } from '@/helpers/getData';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { blogData } from '@/app/redux/features/blogDataSlice';
import { useActions } from '@/hook/useActions';


export const BlogArticlePage = ({ blogId }) => {
  const {blog, loading} = useSelector(blogData);
  const {fetchBlogData} = useActions()

  if(!blog.length) {
    fetchBlogData()
  }
  
  const article = blog.find((item) => item.id === blogId)

  return (
    <section>
      <div className="container pt-[80px]">
        {article && !loading ? (
          <div>
            <h1 className="h2 pb-[48px]">{article.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </div>
        ) : (
          'Loading...'
        )}
      </div>
    </section>
  );
};
