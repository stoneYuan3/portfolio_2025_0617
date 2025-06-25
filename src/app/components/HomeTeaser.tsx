
import Link from "next/link"

export const HomeTeaserContainer = ({ 
    data,
    type 
}: {
    data: any[],
    type: string
}) => {

    return (
        <div className="flex flex-col gap-[2.5rem]">
            {
                data.map((value, i) => {
                    return (
                        <HomeTeaser value={value} key={i} type={type} />
                    )
                })
            }
        </div>
    )
}

export const HomeTeaser = ({
    value,
    type
}: {
    value: {
        id: string,
        teaserImg: string,
        title: string,
        teaserDesc: string,
        teaserCaption: string
    },
    type: string;
}) => {

    return (
        <Link href={`/gallery/${type}/${value.id}`} className="flex flex-row gap-[3rem] items-center">
            <div className="w-[18rem] h-[12rem]" >
                <img className="w-[100%] h-[100%] object-cover" src={`/images/teasers/${value.teaserImg}`} />
            </div>
            <div className="flex flex-col gap-[16px] max-w-[480px]">
                <h3>{value.title}</h3>
                <p>{value.teaserDesc} </p>
                <p><strong>{value.teaserCaption}</strong></p>
            </div>
        </Link>
    )
}


