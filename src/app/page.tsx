
import Image from "next/image";
import data from './data/projects.json'

type Project = {
  id: string;
  title: string;
  notionEmbedUrl: string;
};

export default function Home() {

  console.log(data[0].id)

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}


