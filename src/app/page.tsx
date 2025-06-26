
import Image from "next/image";
import data from '../data/projects.json'
import Link from "next/link";
import { HomeTeaserContainer } from "./components/HomeTeaser";
import { HomeLandingIntro } from "./components/HomeLandingIntro";
import { HomeTypeNav } from "./components/HomeTypeNav";

export default function Home() {

  const TYPE = "programming";
  const filteredData = data.filter(item => item.projType === TYPE && item.isFeatured);

  return (
    <>
      <div className="page__body flex flex-col">
        <HomeLandingIntro />
        <HomeTypeNav />
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
// };