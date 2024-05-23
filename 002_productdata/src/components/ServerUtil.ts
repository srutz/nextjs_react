
/*
 * Util methods for the server side
 */

export type SocketThing = {
    emit: (channel: string, data: any) => void
}

/*
 * return a hnadle to the socket.io instance via node.js globalThis
 */ 
export function getSocketIoReference(): SocketThing {
    const getSocketIoInstance = (global as any).getSocketIoInstance as () => SocketThing
    console.log(getSocketIoInstance)
    const io = getSocketIoInstance() as SocketThing
    return io
}