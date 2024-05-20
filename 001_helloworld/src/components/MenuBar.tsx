"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function MenuBar() {

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ]

    const pathname = usePathname()
    console.log("pathname=" + pathname)

    return (
        <div className="flex h-16 border-b border-gray-300 items-center pl-8 pr-4">
            <div className="text-3xl font-bold mr-8">Helloworld</div>
            <div className="flex gap-4">
                {menuItems.map((item, index) => (
                    <Link key={index} href={item.href} className={"menulink " + (pathname == item.href ? "menulink-active" : "")}>{item.label}</Link>
                ))}
            </div>
        </div>   
    )
}