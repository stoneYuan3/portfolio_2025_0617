import { useMdFetcher } from '@/hooks/useMdFetcher';
import Link from 'next/link';

export default async function ProjectPage({
  params,
}: {
  params: { id: string; project: string }
}) {

  const { id, project } = params;
  const getBackLink = () => {   
    return `/experience/${params.id}`
  };
  
  const contentHtml = await useMdFetcher("src/markdown", project)

  return (
    <>
      <Link href={ getBackLink() }>Back</Link>
      {/* <iframe src="https://wandering-castanet-8df.notion.site/ebd/2178ed4da86380ccacadcb4321270219" width="100%" height="700" /> */}
      <div className="article__body page__body" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  )

}