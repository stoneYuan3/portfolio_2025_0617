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
        <Link href={`/experience/${value.id}`} className="flex flex-row gap-[4rem] items-center">
            <div className="w-[12rem] h-[12rem]" >
                <img className="w-[100%] h-[100%] object-contain" src={`/images/experience/${value.teaserImg}`} />
            </div>
            <div className="flex flex-col gap-[10px] max-w-[480px]">
                <div className="flex flex-col gap-[8px]">
                    <p>{value.dateStart} - {value.dateEnd}</p>
                    <h3>{value.title}</h3>
                </div>
                <p>{value.teaserDesc} </p>
            </div>
        </Link>
    )
}