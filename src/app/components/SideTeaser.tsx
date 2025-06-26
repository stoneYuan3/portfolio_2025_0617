
import Link from "next/link"

export const SideTeaserContainer = ({ 
    data,
    groupName 
}: {
    data: any[],
    groupName: string
}) => {

    return (
        <div className="flex flex-col gap-[2.5rem]">
            <h4>Related Projects</h4>
            <div className="flex flex-col gap-[2.5rem]">
                {
                    data.map((value, i) => {
                        return (
                            <SideTeaser value={value} key={i} groupName={groupName} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export const SideTeaser = ({
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
        <Link href={`/experience/${groupName}/${value.id}`} className="text-[0.75rem] flex flex-row gap-[1rem]">
            <div className="w-[12rem] h-[6rem]" >
                <img className="w-[100%] h-[100%] object-cover" src={`/images/teasers/${value.teaserImg}`} />
            </div>
            <div className="flex flex-col gap-[8px] max-w-[300px]">
                <h5>{value.title}</h5>
                <p>{value.teaserDesc} </p>
                {/* <p><strong>{value.teaserCaption}</strong></p> */}
            </div>
        </Link>
    )
}


