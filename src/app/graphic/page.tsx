
import data from '../../data/projects.json'
import { HomeTeaserContainer } from "../components/HomeTeaser";
import { HomeLandingIntro } from "../components/HomeLandingIntro";
import { HomeTypeNav } from "../components/HomeTypeNav";

export default function Graphic() {

  const TYPE = "graphic";
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


