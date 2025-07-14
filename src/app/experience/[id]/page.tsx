

import Link from 'next/link';
import { useMdFetcher } from '@/hooks/useMdFetcher';
import data from '../../../data/projects.json'
import { InlineTeaserContainer } from '@/app/components/InlineProjectTeaser';

export default async function ExperiencePage({
  params,
}: {
  params: { id: string }
}) {

  const { id } = params;
  const contentHtml = await useMdFetcher("src/markdown/experience", id)

  const experience_name = id;
  const filteredData = data.filter(item => item.relatedExperience === experience_name && item.isFeatured);

  return (

    <div className='article__container'>
      <Link href='/experience'>Back</Link>
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