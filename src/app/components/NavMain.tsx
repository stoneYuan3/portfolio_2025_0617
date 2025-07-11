'use client'

import Link from "next/link";
import { usePathname } from 'next/navigation'

export const NavMain = () => {

    const pathname = usePathname()
    const links = [
        { href: '/', label: 'Gallery' },
        { href: '/experience', label: 'Experience' },
        { href: '/about', label: 'About Me' },
        { href: '/playground', label: 'Playground' },
    ]

    return (
        <div className="py-[48px] px-[62px] w-[230px] max-[1000px]:w-full max-[450px]:px-[24px] max-[450px]:py-[24px]">
            <nav className="fixed flex flex-col gap-[52px] max-[1000px]:relative max-[1000px]:items-center max-[1000px]:gap-[30px]">
                <div className="logo">
                    <Link className="flex flex-col items-center gap-[16px]" href="/">
                        <img className="w-[36px] h-auto max-[450px]:w-[32px]" src="/images/logo.svg" />
                        <p><strong>Stone Yuan</strong></p>
                    </Link>
                </div>

                <div className="flex flex-col items-center gap-[36px] max-[1000px]:flex-row max-[550px]:gap-[22px] max-[425px]:gap-[18px]">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`pb-[.25rem] border-b-[3px] ${pathname == link.href ? 'text-[#000] font-bold border-[#3a3a3a]' : 'border-transparent'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-[12px] links-external max-[1000px]:flex-row">
                    <a href="https://github.com/stoneYuan3"><img src="/images/icons/link-github.svg" /><p>Github</p></a>
                    <a href="https://www.linkedin.com/in/stone-yuan-10a269222/"><img src="/images/icons/link-linkedin.svg" /><p>Linkedin</p></a>

                    <a href="https://www.flickr.com/photos/200092524@N07/"><img src="/images/icons/link-flickr.svg" /><p>Flickr</p></a>
                    <a href="https://www.instagram.com/jackyuan110/"><img src="/images/icons/link-instagram.svg" /><p>Instagram</p></a>
                </div>
            </nav>
        </div>
    )
}