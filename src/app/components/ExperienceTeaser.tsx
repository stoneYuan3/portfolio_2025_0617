import Link from "next/link"

export const ExperienceTeaserContainer = ({ 
    data,
}: {
    data: any[],
}) => {

    return (
        <div className="flex flex-col gap-[2.5rem]">
            {
                data.map((value, i) => {
                    return (
                        <ExperienceTeaser value={value} key={i} />
                    )
                })
            }
        </div>
    )
}

export const ExperienceTeaser = ({
    value,
}: {
    value: {
        id: string,
        teaserImg: string,
        title: string,
        teaserDesc: string,
        dateStart: string,
        dateEnd: string,
        workTitle: string
    },
}) => {

    return (
        <Link href={`/experience/${value.id}`} className="flex flex-row gap-[3rem] items-center">
            <div className="flex flex-col gap-[10px] max-w-[480px]">
                <div className="flex flex-col gap-[8px]">
                    <p>{value.dateStart} - {value.dateEnd}</p>
                    <h3>{value.title}</h3>
                    {/* <p><strong>{value.workTitle}</strong></p> */}
                </div>
                <p>{value.teaserDesc} </p>
            </div>
            <div className="w-[18rem] h-[12rem]" >
                <img className="w-[100%] h-[100%] object-cover" src={`/images/teasers/${value.teaserImg}`} />
            </div>
        </Link>
    )
}