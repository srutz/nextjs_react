"use client"

import { Dispatch, MouseEvent, ReactNode, SetStateAction, useEffect, useState } from "react"


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
    }, [ dummy])

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



export function Counter(props: { name: string}) {
    console.log("Counter " + props.name + " rendered ")
    const ws = useWindowSize()
    useRepainter(1_500)
    return <div>{ws.width} x {ws.height}</div>
    /*
    const [ counter, setCounter ] = useState(200)
    const onClick = () => {
        setCounter(counter + 1)
    }
    return <div id="d1" onClick={onClick} >{"Counter " + counter}</div>
    */
}