
import { DefaultTeaserDisplay } from "./defaultTeaserDisplay"

type ProjectData = {
    id: string;
    title: string;
    teaserDesc: string;
    teaserImg: string;
    teaserCaption: string;
    isFeatured: boolean;
    projType: string;
    relatedExperience: string;
    relatedCollection: string;
}

export const HomeTeaserContainer = ({
    data,
    groupName
}: {
    data: ProjectData[],
    groupName: string
}) => {

    return (
        <div className="flex flex-col gap-[2.5rem]">
            {
                data.map((value, i) => {
                    return (
                        <HomeTeaser value={value} key={i} groupName={groupName} />
                    )
                })
            }
        </div>
    )
}

export const HomeTeaser = ({
    value,
    groupName
}: {
    value: ProjectData,
    groupName: string;
}) => {

    return (
        <DefaultTeaserDisplay value={value} link={`/gallery/${groupName}/${value.id}`} />
    )
}


