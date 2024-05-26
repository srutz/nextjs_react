"use client"

import { useSocketClient } from "@/hooks/SocketClient"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useEffect } from "react"
import { NotificationToast } from "./NotificationToast"
import { EventBus } from "./eventbus"

export function MenuBar() {

    const menuItems = [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
    ]

    const pathname = usePathname()
    const router = useRouter()
    useEffect(() => {
        router.refresh()  // force a refresh on the server on navigation
    }, [pathname])

    /* 
     * Hook up the listener to socket.io here
     * could well be in another place but in this example this is fine
     */
    const [ socket, connected ] = useSocketClient()
    useEffect(() => {
        socket.on("mychannel", (data) => {
            EventBus.instance.emit("notification", { message: data, severity: "info" })
        })
        return () => {
            socket.off("mychannel")
        }
    })



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