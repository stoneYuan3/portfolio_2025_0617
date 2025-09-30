import { ExperienceTeaserContainer } from "../components/ExperienceTeaser"
import data from '../../data/experiences.json'

export default function ExperienceHome() {

    return (
        <>  
            <h1 className="mb-[3rem]">Featured Experiences</h1>
            <ExperienceTeaserContainer data={data} />
        </>
    )
}