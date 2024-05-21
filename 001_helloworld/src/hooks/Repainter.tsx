import { useEffect, useState } from "react"

/*
 * Repaint the component that is using this custom-hook
 * ever intervalMs
 * 
 */
export function useRepainter(intervalMs: number) {
    /* we can use any state to trigger the re-render, so dummy is not a bad name */
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
