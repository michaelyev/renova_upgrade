import { getData } from '@/helpers/getData'
import {BlogArticlePage} from '@/pagesCollection/BlogArticle'
import React from 'react'



const page = async ({params}: {params:{blogId: string}}) => {

  
    
  return (
    <div>
        <BlogArticlePage blogId={parseInt(params.blogId)} />
    </div>
  )
}

export default page