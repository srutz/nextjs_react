"use client"
import { useEffect } from "react"


export function GreetingsContent(props: { greeting: string }) {
    useEffect(() => {
        console.log("on mounted ...")
    }, [])


    console.log("greetingscontent")
    return (
        <div className="flex flex-col">
            <div className="text-2xl">Greetings from the client side: {props.greeting}</div>
        </div>
    )

}