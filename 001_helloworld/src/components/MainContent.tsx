"use client"

import { useEffect, useState } from "react"
import { AnimatedDiv, Point } from "./AnimatedDiv"
import { Splitter } from "./Splitter"



type Quote = {
    id: number
    text: string
    author: string
}

// quotes from oscar wilde, mark twain and arnold schwarzenegger
const quotes: Quote[] = [
    { id: 1, text: "The only way to get rid of a temptation is to yield to it.", author: "Oscar Wilde" },
    { id: 2, text: "I can resist everything except temptation.", author: "Oscar Wilde" },
    { id: 3, text: "To love oneself is the beginning of a lifelong romance.", author: "Oscar Wilde" },
    { id: 4, text: "I have the simplest tastes. I am always satisfied with the best.", author: "Oscar Wilde" },
    { id: 5, text: "The truth is rarely pure and never simple.", author: "Oscar Wilde" },
    { id: 6, text: "I am so clever that sometimes I don't understand a single word of what I am saying.", author: "Oscar Wilde" },
    { id: 7, text: "The only way to keep your health is to eat what you don't want, drink what you don't like, and do what you'd rather not.", author: "Mark Twain" },
    { id: 8, text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { id: 9, text: "The secret of getting started is breaking your complex overwhelming tasks into small manageable tasks, and then starting on the first one.", author: "Mark Twain" },
    { id: 10, text: "The best way to cheer yourself up is to try to cheer somebody else up.", author: "Mark Twain" },
    { id: 11, text: "The fear of death follows from the fear of life.", author: "Mark Twain" },
    { id: 12, text: "Courage is resistance to fear, mastery of fear, not absence of fear.", author: "Mark Twain" },
    { id: 13, text: "The only way to keep your health is to eat what you don't want, drink what you don't like, and do what you'd rather not.", author: "Mark Twain" },
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

export function MainContent() {
    return (
        <Splitter>
            <QuotesList></QuotesList>
            <QuotesList></QuotesList>
        </Splitter>
    )

}
