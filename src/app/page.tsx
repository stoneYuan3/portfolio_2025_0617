
import data from './data/projects.json'
import Link from "next/link";

// type Project = {
//   id: string;
//   title: string;
//   teaserDesc: string;
//   teaserImg: string;
//   teaserCaption: string;
//   isFeatured: boolean;
//   projType: string;
//   relatedExperience: string;
//   notionEmbedUrl: string;
//   notionId: string;
// };

export default function Home() {

  return (
    <>
      <h1>Featured Projects</h1>
      <div className="flex flex-col">
        {
          data.map((value, i) => {
            return(
              <Link href={`/gallery/${value.id}`} className="flex flex-row gap-[20px] items-center" key={i}>
                  <img className="w-[288px] h-[192px] object-cover" src={`/images/teasers/${value.teaserImg}`} />
                  <div className="flex flex-col gap-[16px] max-w-[480px]">
                    <h2>{ value.title }</h2>
                    <p>{ value.teaserDesc} </p>
                    <p>{ value.teaserCaption} </p>
                  </div>
              </Link>
            )
          })
        }
      </div>
    </>
  );
}


