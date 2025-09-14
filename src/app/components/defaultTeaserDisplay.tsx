
import Link from "next/link"

export const DefaultTeaserDisplay = ({value, link}: {
    value: {
        id: string,
        teaserImg: string,
        title: string,
        teaserDesc: string,
        teaserCaption: string
    },
    link: string;
}) => {

    return (
        <Link href={link} className="flex flex-row gap-[3rem] items-center max-[575px]:flex-col">
            <div className="w-[17rem] h-[12rem] max-[575px]:w-full max-[575px]:h-[14rem] shrink-0" >
                <img className="w-[17rem] h-[12rem] object-cover max-[575px]:w-full max-[575px]:h-[14rem]" src={`/images/teasers/${value.teaserImg}`} />
            </div>
            <div className="flex flex-col gap-[16px] max-w-[480px] w-[100%]">
                <h3>{value.title}</h3>
                <p>{value.teaserDesc} </p>
                <p><strong>{value.teaserCaption}</strong></p>
            </div>
        </Link>
    )
}