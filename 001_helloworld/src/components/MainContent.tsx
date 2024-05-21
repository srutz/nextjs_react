"use client"

import { Dispatch, MouseEvent, ReactNode, SetStateAction, useEffect, useState } from "react"
import { AnimatedDiv, Point } from "./AnimatedDiv"


type WindowSize = {
    width: number
    height: number
}

export function useRepainter(intervalMs: number) {
    const [ dummy, setDummy ] = useState(0)
    useEffect(() => {
        const id = setInterval(() => {
            setDummy(dummy + 1)
        }, intervalMs)
        return () => {
            clearInterval(id)
        }
    }, [ dummy ])
}

export function useWindowSize() {
    const [ windowSize, setWindowSize] = useState<WindowSize>(
        { width: window.innerWidth, height: window.innerHeight })

    useEffect(() => {
        const listener = () => {
            setWindowSize({ 
                width: window.innerWidth, 
                height: window.innerHeight })
        }
        window.addEventListener("resize", listener)
        // setup
        return () => {
            // cleanup
            window.removeEventListener("resize", listener)
        }
    }, [])
    return windowSize
}


type Quote = {
    id: number
    text: string
    author: string
}

// oscar wilde quotes
const quotes: Quote[] = [
    { id: 1, text: "The only way to get rid of a temptation is to yield to it.", author: "Oscar Wilde" },
    { id: 2, text: "I can resist everything except temptation.", author: "Oscar Wilde" },
    { id: 3, text: "To love oneself is the beginning of a lifelong romance.", author: "Oscar Wilde" },
    { id: 4, text: "I have the simplest tastes. I am always satisfied with the best.", author: "Oscar Wilde" },
    { id: 5, text: "The truth is rarely pure and never simple.", author: "Oscar Wilde" },
    { id: 6, text: "I am so clever that sometimes I don't understand a single word of what I am saying.", author: "Oscar Wilde" },
]

type QuoteItemProps = { quote: Quote, delay: number }

function QuoteItem(props: QuoteItemProps) {
    const { quote, delay } = props
    const [ opacity, setOpacity] = useState(0)
    const [ pos, setPos ] = useState<Point>({x: -1000, y: 0})
    useEffect(() => {
        setOpacity(1)
        setPos({ x:0, y: 0})
    }, [])
    return (
        <AnimatedDiv relative 
                position={pos} opacity={opacity} delayMs={delay}>
            <div className="flex flex-col">
                <div className="text-sm">{quote.text}</div>
                <div className="text-xs text-gray-700">{quote.author}</div>
            </div>
        </AnimatedDiv>
    )
}

export function QuotesList() {
    return (
    <div className="flex flex-col gap-4 grow relative">
        {quotes.map((quote, index) => (
            <QuoteItem key={quote.id} quote={quote} delay={index * 150}></QuoteItem>))}
    </div>)
}



export function Counter(props: { name: string }) {
    console.log("Counter " + props.name + " rendered ")
    const ws = useWindowSize()
    return <div>{ws.width} x {ws.height}
        {ws.height > 300 ? <div>HOCH</div> : <div>NIEDRIG</div>}
    </div>
}