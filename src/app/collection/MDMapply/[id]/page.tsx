import { useMdFetcher } from '@/hooks/useMdFetcher';
import Link from 'next/link';

export default async function ProjectPage({
  params,
}: {
  params: { id: string }
}) {

  const { id } = params;
  
  const contentHtml = await useMdFetcher("src/markdown", id)

  return (
    <>
      {/* <div>type: {category}</div> */}
      {/* <div>Post: {id}</div> */}
      <Link className="text-left block" href="/collection/MDMapply">Back</Link>
      {/* <iframe src="https://wandering-castanet-8df.notion.site/ebd/2178ed4da86380ccacadcb4321270219" width="100%" height="700" /> */}
      <div className="article__body page__body" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </>
  )

}