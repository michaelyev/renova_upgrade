import React from 'react';

import { BlogArticlePage } from '@/pagesCollection/BlogArticle';

const page = async ({ params }: { params: { blogId: string } }): Promise<React.ReactElement> => (
  <BlogArticlePage blogId={parseInt(params.blogId, 10)} />
);

export default page;
