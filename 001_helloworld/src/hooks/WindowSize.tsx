import { useEffect, useState } from "react"


type WindowSize = {
    width: number
    height: number
}


/*
 * track the browser-window size
 */
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
