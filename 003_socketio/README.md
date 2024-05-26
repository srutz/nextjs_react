
# Nextjs Socket IO Example

## Socket.io

This example uses socket.io in a next.js application. The next.js server needs to be started like this in order for socket.io 
to be actually active

```
npx node src/server.js
```

or via the provided run-script in the package.json. If you start the next.js server with just ```npx node dev``` the
application will work, but socket.io will simply not be initialized on the server and thus no events will be send.

## Capabilities

You can use socket.io to send/receive messages from the server to the client and vice versa. On the client side use the
custom hook useSocketClient

```typescript
const [ socket, connected ] = useSocketClient()
useEffect(() => {
    socket.on("mychannel", (data) => {
        // do something with the data
    })
    return () => {
        socket.off("mychannel")
    }
})
```


On the serverside the socket.io handle is made available via node.js globalThis, which is a bit ugly.

Use

```typescript
getSocketIoReference()?.emit("mychannel", "my message or data here")
```

to send a string message or a json object to the client from the server.

## Example

In the example the above patterns are used for demonstration, but nothing is actually send or received that makes sense. This is just the example after all.

If the products are loaded on the serverside an information about the runtime is send to the client, who then shows a short popup-notification (so-called toast).


