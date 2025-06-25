import { ExperienceTeaserContainer } from "../components/ExperienceTeaser"
import data from '../../data/experiences.json'

export default function ExperienceHome() {

    return (
        <>
            <ExperienceTeaserContainer data={data} />
        </>
    )
}