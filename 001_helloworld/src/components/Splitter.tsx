import { useState, MouseEvent, useRef, ReactNode } from 'react'
import classes from './Splitter.module.css'




export function Splitter(props: { children: ReactNode, showIcons?: boolean }) {
    const { children, showIcons} = props
    const [ showOverlayHandle, setShowOverlayHandle] = useState(false)
    const [ showDragPane, setShowDragPane] = useState(false)

    const [ downX, setDownX] = useState(-1)
    const [ relX, setRelX] = useState(-1)

    const firstPanel = useRef(null)
    const secondPanel = useRef(null)
    const overlayHandle = useRef(null)

    const positionOverlayHandle = (offsetX: number) => {
        const h = overlayHandle.current as unknown as HTMLDivElement
        if (h) {
            h.style.left = offsetX + 'px'
        }
    }

    const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
        const x = e.clientX
        const rect = e.currentTarget.getBoundingClientRect()
        const x0 = e.clientX - rect.left; //x position within the element.
        setRelX(x0)
        setDownX(x - x0)
        setShowDragPane(true)
    }

    const onMouseUp = (e: MouseEvent<HTMLDivElement>) => {
        setShowDragPane(false)
        setShowOverlayHandle(false)
        if (downX != -1) {
            const p = firstPanel.current as unknown as HTMLDivElement
            p.style.width = (e.nativeEvent.offsetX - relX) + 'px'
            setDownX(-1)
        }
    }

    const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        setShowOverlayHandle(true)
        positionOverlayHandle(e.nativeEvent.offsetX)
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const firstChild = (children as any)["0"]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const secondChild = (children as any)["1"]

    return (
        <div className={classes.splitter}>
            <div className={classes.firstpanel} ref={firstPanel}>
                {firstChild}
            </div>
            <div className={[classes.handle, 'column-container centered-axis'].join(" ")} onMouseDown={onMouseDown}>
                {showIcons && <>
                    <div className={classes.icon}>◀</div>
                    <div className={classes.icon}>▶</div>
                </>
                }
            </div>
            <div className={classes.secondpanel} ref={secondPanel}>
                {secondChild}
            </div>
            {showOverlayHandle ? (
                <div className={classes.overlayhandle} ref={overlayHandle}></div>) : undefined }
            {showDragPane ? (
                <div className={classes.dragpane} onMouseMove={onMouseMove} onMouseUp={onMouseUp}></div>) : undefined }
        </div>
    )
}
