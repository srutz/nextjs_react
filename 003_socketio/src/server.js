import { createServer } from "node:http"
import next from "next"
import { Server } from "socket.io"

const dev = process.env.NODE_ENV !== "production"
const hostname = "localhost"
const port = 3000

/*
 * manual server setup
 */
const app = next({ dev, hostname, port })
const handler = app.getRequestHandler()

let SOCKETIO_INSTANCE = null
global.getSocketIoInstance = function() {
    return SOCKETIO_INSTANCE
}

app.prepare().then(() => {
    const httpServer = createServer(handler)
    const io = new Server(httpServer)
    SOCKETIO_INSTANCE = io

    io.on("connection", (socket) => {
        console.log("### Client connected")
        socket.on("disconnect", (socket) => {
            console.log("### Client disconnected")
        })
        socket.on("mychannel", (message) => {
            console.log("### Message: ", message)
        })
    })

    httpServer
        .once("error", (err) => {
            console.error(err)
            process.exit(1)
        })
        .listen(port, () => {
            console.log(`> Ready on http://${hostname}:${port}`)
        })
})