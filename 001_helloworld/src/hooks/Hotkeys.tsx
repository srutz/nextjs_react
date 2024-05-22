
/*
 * Custom react hook for handling hotkeys
 */
import { useEffect, useState } from "react"

type Hotkey = {
    keystroke: string
}

type HotkeyProps = {
    hotkeys: Hotkey[]
}

export function useHotkeys(props: HotkeyProps) {
    const [ keystroke, setKeystroke ] = useState('')
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            props.hotkeys.forEach(hotkey => {
                if (e.key === hotkey.keystroke) {
                    setKeystroke(hotkey.keystroke)
                }
            })
        }
        window.addEventListener('keydown', onKeyDown)
        return () => {
            window.removeEventListener('keydown', onKeyDown)
        }
    }, [])
    return keystroke
}
