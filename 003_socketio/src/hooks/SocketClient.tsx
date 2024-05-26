"use client"

import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export const socket = io();


/*
 * a custom hook that returns the socket client and its connection status
 *
 * get the socket client and then use it to listen to events and emit data
 */
export function useSocketClient() {
    const [connected, setIsConnected] = useState(false)
    const [transport, setTransport] = useState("")

    useEffect(() => {
        if (socket.connected) {
            onConnect()
        }
        function onConnect() {
            setIsConnected(true)
            setTransport(socket.io.engine.transport.name)

            socket.io.engine.on("upgrade", (transport) => {
                setTransport(transport.name)
            })
        }

        function onDisconnect() {
            setIsConnected(false)
            setTransport("")
        }

        socket.on("connect", onConnect)
        socket.on("disconnect", onDisconnect)

        return () => {
            socket.off("connect", onConnect)
            socket.off("disconnect", onDisconnect)
        }
    }, [])
    return [ socket, connected ] as [ typeof socket, typeof connected ]
}
