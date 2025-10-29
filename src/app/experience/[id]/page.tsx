

import Link from 'next/link';
import { fetchMdContent } from '@/hooks/useMdFetcher';
import data from '../../../data/projects.json'
import { InlineTeaserContainer } from '@/app/components/InlineProjectTeaser';

export default async function ExperiencePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params;
  const contentHtml = await fetchMdContent("src/markdown/experience", id)

  const experience_name = id;
  const filteredData = data.filter(item => item.relatedExperience === experience_name);

  return (

    <div className='article__container'>
      <Link className='button__outline' href='/experience'>Back</Link>
      {/* <iframe src="https://wandering-castanet-8df.notion.site/ebd/2178ed4da86380ccacadcb4321270219" width="100%" height="700" /> */}
      <div className="article__body page__body" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      {
        filteredData.length > 0
          ?
          <div>
            <InlineTeaserContainer data={filteredData} groupName={experience_name} />
          </div>
          :
          ""
      }
    </div>

  )

}