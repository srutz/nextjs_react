"use client"

import { ReactNode } from "react"

type H1Props = { children: ReactNode }

function H1(props: H1Props) {
    function onClick() {
        console.log("H1 clicked")
    }
    return <h1 onClick={onClick}>{props.children}</h1>
}


export function MainContent() {
    return <H1>Home Content 123</H1>
}