
import data from '../data/projects.json'
import { HomeTeaserContainer } from "./components/HomeTeaser";
import { HomeLandingIntro } from "./components/HomeLandingIntro";
import { HomeTypeNav } from "./components/HomeTypeNav";
import { gallerySubLinks } from '@/data/subNavLinks';


export default function Home() {

  const TYPE = "programming";
  const filteredData = data.filter(item => item.projType === TYPE && item.isFeatured);

  return (
    <>
      <div className="page__body flex flex-col">
        <HomeLandingIntro />
        <HomeTypeNav links={gallerySubLinks()} />
        <HomeTeaserContainer data={filteredData} groupName={TYPE} />
      </div>
    </>
  );
}

// type Project = {
//   id: string;
//   title: string;
//   teaserDesc: string;
//   teaserImg: string;
//   teaserCaption: string;
//   isFeatured: boolean;
//   projType: string;
//   relatedExperience: string;
//   relatedCollection: string;
// };