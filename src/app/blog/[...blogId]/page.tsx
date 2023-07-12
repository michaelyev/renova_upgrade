import { BlogArticlePage } from '@/pagesCollection/BlogArticle';

const page = async ({ params }: { params: { blogId: string } }) => {
  return (
    <div>
      <BlogArticlePage blogId={parseInt(params.blogId)} />
    </div>
  );
};

export default page;
