import React, { type ReactElement } from 'react';

import { BlogArticlePage } from '@/pagesCollection/BlogArticle';

export default function Page({ params }: { params: { blogId: string } }): ReactElement {
  return <BlogArticlePage blogId={parseInt(params.blogId, 10)} />;
}
