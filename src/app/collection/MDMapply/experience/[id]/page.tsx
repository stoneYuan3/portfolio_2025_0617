

import Link from 'next/link';
import { fetchMdContent } from '@/hooks/useMdFetcher';

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params;
  const contentHtml = await fetchMdContent("src/markdown/experience", id)

  return (

    <div className='article__container text-left'>
      <Link className='button__outline' href='/collection/MDMapply/experience/'>Back</Link>
      {/* <iframe src="https://wandering-castanet-8df.notion.site/ebd/2178ed4da86380ccacadcb4321270219" width="100%" height="700" /> */}
      <div className="article__body page__body" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>

  )

}