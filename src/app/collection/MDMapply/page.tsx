
import data from '../../../data/projects.json'
import { ShortSelfIntro } from '@/app/components/ShortSelfIntro';
import { DefaultTeaserDisplay } from '@/app/components/defaultTeaserDisplay';
import { HomeTypeNav } from '@/app/components/HomeTypeNav';


const MDMSubLinks = [
  { href: '/collection/MDMapply', label: 'Project Samples & Summary' },
  { href: '/collection/MDMapply/experience', label: 'Notable Experiences' },
]

export default function MDMapplyPage() {

  const collectionData = data.filter(item => item.relatedCollection.includes("MDMapply"));



  return (
    <>
      <div className="page__body flex flex-col text-left m-auto">
        <ShortSelfIntro />
        <div className="mb-[3rem] text-left mdm_intro">
          <HomeTypeNav links={MDMSubLinks}/>
          {/* <h1 className='mb-[2rem]'>Shucong&apos;s Portfolio</h1> */}
          <p>This portfolio showcases me as a multi-talented creator with a focus on programming, but also the ability to deliver design and art-related work. The selected projects span volunteer, freelance, internship, and hobby settings, reflecting different aspects of my skills.</p>
          <p>The <strong>Sela Project</strong> was a collaboration with a volunteer team led by a senior EA developer. The team structure mirrored a professional environment, with members from diverse backgrounds and taking on specific roles. My initial task was implementing a <em>drag-to-select</em> feature in React.js and TypeScript, allowing users to highlight and color word blocks. As the project grew, I took on related tasks around the word block display window. This project showcases my skills in React.js and Typescript and gives me a glimpse of professional team management. I believe those experiences prepare me for collaborations in the MDM program</p>
          <p>The <strong>ADTU Website</strong> and <strong>Jetour Home Page</strong> were industry projects where I developed pixel-perfect websites from Photoshop and Figma designs. The Jetour Home project uses HTML, CSS and Jquery and the ADTU website uses Drupal CMS, css and Twig template. The ADTU project features careful planning of data structure for the best editor experience and the Jetour project features researching and developing complex front-end visual effects. These projects highlight my industry experience and my adaptability to different tech stacks and workflows, which would be helpful when analyzing and developing diverse client needs in MDM projects.</p>
          <p>After showcasing projects I have built for others, the <strong>Publisher Wizard App</strong> highlights my personal work. Inspired by a publishing course at SFU, the app helps book lovers print smaller, elegant editions while saving paper. It was also my first experiment with AI-assisted programming. In this project, I acted more as a project manager where my task included researching user needs, drafting features, and prompting the AI to implement them, while only adjusting minor bugs and styling myself. The experience taught me not only about market research and product promotion, but also about the strengths and limitations of AI coding, and how to integrate AI effectively into my workflow.</p>
          <p>Lastly, I included a poster design collection to highlight my artistic side. I created the image assets with Midjourney and Photoshop, and used Figma for typography and layout. This not only demonstrates my adaptability but also my proficiency with popular design tools, which prepares me to communicate effectively with design teams in MDM projects.</p>
        </div>
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