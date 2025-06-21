'use client';
import { usePathname } from 'next/navigation'
import Link from "next/link"

export const HomeTypeNav = () => {
    
    const pathname = usePathname()

    const links = [
        { href: '/', label: 'Programming' },
        { href: '/graphic', label: 'Graphic Design & Arts' },
    ]

    return (
        <div className="flex flex-row gap-[20px] mb-[2.5rem]">
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={`pb-[.25rem] border-b-[3px] ${pathname == link.href ? 'text-[#000] font-bold border-[#3a3a3a]' : 'text-gray-400 border-transparent' }`}
                >
                    {link.label}
                </Link>
            ))}
        </div>
    )
}