
import { CSSProperties, ReactNode } from "react"

export type Point = { x: number, y: number }

export type Size = { width: number, height: number }

export type AnimatedDivProps = {
    position?: Point
    size?: Size
    opacity?: number
    durationMs?: number
    delayMs?: number
    relative?: boolean
    transitionProperty?: string // defaults to all
    children?: ReactNode
}

export function AnimatedDiv(props: AnimatedDivProps) {
    const { 
        position, 
        size,
        opacity,
        durationMs = 250,
        delayMs = 0,
        relative,
        transitionProperty = "all", 
        children 
    } = props
    const styles: CSSProperties = {
        transitionProperty: transitionProperty,
        transitionDuration: durationMs + "ms",
        transitionDelay: delayMs + "ms",
        transitionTimingFunction: "ease-in-out",
        position: relative ? "relative" : "absolute", 
        opacity: opacity !== undefined ? opacity : "1",
        left: position ? position.x + "px" : "auto", 
        top: position ? position.y + "px" : "auto", 
        width: size ? size.width + "px" : "auto",
        height: size ? size.height + "px" : "auto",
    }
    return (
        <div style={styles}>{children}</div>
    )
}