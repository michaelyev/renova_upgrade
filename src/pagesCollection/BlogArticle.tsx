'use client'
import { getData } from '@/helpers/getData'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setBlog } from '@/app/redux/features/blogDataSlice'

export const BlogArticlePage = ({ blogId }) => {
  const blog = useSelector(state => state.blogData)
  const dispatch = useDispatch()

  //const [data, setData] = useState(null);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData('/blogData.json');
      dispatch(setBlog(result))
      //setData(result);
    }

    fetchData();
  }, [blogId, dispatch, ]);


  useEffect(() => {
    // Ищем статью по id только когда данные загружены
    if (blog) {
      const foundArticle = blog.find(item => item.id === blogId);
      setArticle(foundArticle);
    }
  }, [blog, blogId]); // Запускаем заново при изменении данных или blogId


  const content = article?.body

  return (
    <section>
      <div className='container pt-[80px] '>
        {article ? (
          <div>
            <h1 className='h2 pb-[48px]'>{article.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article.body }} />
          </div>
        ) : (
          'Loading...'
        )}
      </div>
    </section>
  );
}
