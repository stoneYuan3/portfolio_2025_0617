
import Image from "next/image";
import data from '../data/projects.json'
import Link from "next/link";
import { HomeTeaserContainer } from "./components/HomeTeaser";

type Project = {
  id: string;
  title: string;
  teaserDesc: string;
  teaserImg: string;
  teaserCaption: string;
  isFeatured: boolean;
  projType: string;
  relatedExperience: string;
  notionEmbedUrl: string;
};

export default function Home() {

  return (
    <>
      <div className="page__body flex flex-col">
        <div className="mb-[3rem]">
          <h1>Featured Projects</h1>
        </div>
        <HomeTeaserContainer data={data} />

      </div>
    </>
  );
}


