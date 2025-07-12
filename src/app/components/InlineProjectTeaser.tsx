
import Link from "next/link"

export const InlineTeaserContainer = ({ 
    data,
    groupName 
}: {
    data: any[],
    groupName: string
}) => {

    return (
        <div className="flex flex-col gap-[1.5rem]">
            <h4>Related Projects</h4>
            <div className="grid grid-cols-3 max-[1200px]:grid-cols-2 max-[700px]:grid-cols-1 gap-[2.5rem]">
                {
                    data.map((value, i) => {
                        return (
                            <InlineProjectTeaser value={value} key={i} groupName={groupName} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export const InlineProjectTeaser = ({
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
        <Link href={`/experience/${groupName}/${value.id}`} className="max-w-[16rem] max-[1200px]:max-w-[100%] text-[0.9rem] flex flex-col gap-[1rem]">
            <div className="w-[16rem] h-[10rem] max-[1200px]:w-full max-[1200px]:h-[12rem] max-[700px]:h-[16rem] max-[450px]:h-[12rem]" >
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


