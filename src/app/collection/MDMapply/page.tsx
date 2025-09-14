
import data from '../../../data/projects.json'

import { HomeTeaserContainer } from "../../components/HomeTeaser";
import { HomeLandingIntro } from "../../components/HomeLandingIntro";
import { DefaultTeaserDisplay } from '@/app/components/defaultTeaserDisplay';

export default function MDMapplyPage() {

  const collectionData = data.filter(item => item.relatedCollection === "MDMapply");

  return (
    <>
      <div className="page__body flex flex-col m-auto">
        <HomeLandingIntro />
        <div className="flex flex-col gap-[2.5rem] text-left">
            {
                collectionData.map((value, i) => {
                    return (
                        <DefaultTeaserDisplay key={i} value={value} link={`MDMapply/${value.id}`} />
                    )
                })
            }
        </div>
      </div>    
    </>
  );
}