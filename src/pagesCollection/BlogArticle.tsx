'use client'
import { getData } from '@/helpers/getData'
import React, { useEffect, useState } from 'react'

export const BlogArticlePage = ({ blogId }) => {
  const [data, setData] = useState(null);
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData('/blogData.json');
      setData(result);
    }

    fetchData();
  }, [blogId]);

  useEffect(() => {
    // Ищем статью по id только когда данные загружены
    if (data) {
      const foundArticle = data.find(item => item.id === blogId);
      setArticle(foundArticle);
    }
  }, [data, blogId]); // Запускаем заново при изменении данных или blogId


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
