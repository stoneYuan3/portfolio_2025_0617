
import Link from "next/link"
import { DefaultTeaserDisplay } from "./defaultTeaserDisplay"

export const HomeTeaserContainer = ({ 
    data,
    groupName 
}: {
    data: any[],
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
    value: {
        id: string,
        teaserImg: string,
        title: string,
        teaserDesc: string,
        teaserCaption: string
    },
    groupName: string;
}) => {

    return (
        <DefaultTeaserDisplay value={value} link={`/gallery/${groupName}/${value.id}`} />
    )
}


