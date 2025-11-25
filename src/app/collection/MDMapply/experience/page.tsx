import { ExperienceTeaserContainer } from "../../../components/ExperienceTeaser"
import data from '../../../../data/experiences.json'
import { MDMSubLinks } from "../page"
import { ShortSelfIntro } from "@/app/components/ShortSelfIntro"
import { HomeTypeNav } from "@/app/components/HomeTypeNav"

export default function ExperienceHome() {

    return (
        <>
            <div className="page__body flex flex-col m-auto text-left">
                <ShortSelfIntro />
                <HomeTypeNav links={MDMSubLinks()} />
                <ExperienceTeaserContainer data={data} />
            </div>
        </>
    )
}