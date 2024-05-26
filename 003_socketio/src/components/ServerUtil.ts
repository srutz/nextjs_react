
/*
 * Util methods for the server side
 */
export type SocketThing = {
    emit: (channel: string, data: any) => void
}

/*
 * return a hnadle to the socket.io instance via node.js globalThis
 * 
 * this is a bit odd, lets see how this can be improved in future versions of 
 * next.js
 */ 
export function getSocketIoReference(): SocketThing | undefined {
    const getSocketIoInstance = (global as any).getSocketIoInstance as () => SocketThing
    if (!getSocketIoInstance) {
        return undefined
    }
    const io = getSocketIoInstance() as SocketThing
    return io
}