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
        <div className="py-[48px] px-[62px] w-[230px]">
            <nav className="fixed flex flex-col gap-[52px]">
                <div className="logo">
                    {/* <Link onClick={() => {setPage("gallery"); scrollToTop(); NavGallery.resetPage()}} to={homelink}> */}
                    <Link className="flex flex-col items-center gap-[16px]" href="/">
                        <img className="w-[36px] h-auto" src="/images/logo.svg" />
                        <p><strong>Stone Yuan</strong></p>
                    </Link>
                </div>

                <div className="flex flex-col items-center gap-[36px]">
                    {/* <Link href="/">Gallery</Link>
                    <Link href="/about">About Me</Link>
                    <Link href="/playground">Playground</Link> */}
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

                <div className="flex flex-col items-center gap-[12px] links-external">
                    <a href="https://github.com/stoneYuan3"><img src="/images/icons/link-github.svg" /><p>Github</p></a>
                    <a href="https://www.linkedin.com/in/stone-yuan-10a269222/"><img src="/images/icons/link-linkedin.svg" /><p>Linkedin</p></a>

                    <a href="https://www.flickr.com/photos/200092524@N07/"><img src="/images/icons/link-flickr.svg" /><p>Flickr</p></a>
                    <a href="https://www.instagram.com/jackyuan110/"><img src="/images/icons/link-instagram.svg" /><p>Instagram</p></a>
                </div>

                {/* <div className="links-external links-external-small">
                        <a className="flex flex-align-center" href="https://github.com/stoneYuan3"><img src="/img/base/link-github.svg" /></a>
                        <a className="flex flex-align-center" href="https://www.linkedin.com/in/jack-yuan-10a269222/"><img src="/img/base/link-linkedin.svg" /></a>
                        <a className="flex flex-align-center" href="https://www.flickr.com/photos/200092524@N07/"><img src="/img/base/link-flickr.svg" /></a>
                        <a className="flex flex-align-center" href="https://www.instagram.com/jackyuan110/"><img src="/img/base/link-instagram.svg" /></a> 
                    </div> */}
            </nav>
        </div>
    )
}