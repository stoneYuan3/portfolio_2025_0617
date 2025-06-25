import { useMdFetcher } from '@/hooks/useMdFetcher';
import Link from 'next/link';

export default async function ProjectPage({
  params,
}: {
  params: { category: string; id: string }
}) {

  const { category, id } = params;
  const getBackLink = () => {   
    if (params.category) {
      if (params.category === 'programming') {
        return '/'
      }
      else {
        return `/${params.category}`
      }
    }
    else {
      return '/'; // fallback
    }
  };
  
  const contentHtml = await useMdFetcher("src/markdown", id)

  return (
    <>
      <div>type: {category}</div>
      <div>Post: {id}</div>
      <Link href={ getBackLink() }>Back</Link>
      {/* <iframe src="https://wandering-castanet-8df.notion.site/ebd/2178ed4da86380ccacadcb4321270219" width="100%" height="700" /> */}
      <div className="article__body page__body" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  )

}