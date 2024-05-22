"use client"

import { Product } from "@/app/products/page";
import { useSocketClient } from "@/hooks/SocketClient";
import { CSSProperties } from "react";

export function ProductCard({ product, large } : { large?: boolean, product: Product }) {
    const nf = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })
    const styles: CSSProperties = {
    }
    const imageStyles: CSSProperties = { }
    if (large) {
        styles.width = "640px"
        styles.height = "640px"
        imageStyles.height = "400px"
    }

    const [ socket, connected ] = useSocketClient()

    const onClick = () => {
        socket.emit("mychannel", "click on product " + product.id)
        debugger
    }

    return (
        <div className="flex flex-col shadow-xl m-2 p-4 pt-8 w-64 h-96 gap-2 hover:border-gray-200 border border-white" style={styles}>

            <img src={product.images[0]} alt={product.title} className="w-full h-64 object-cover" style={imageStyles} onClick={onClick}/>
            <h1 className="border-t pt-2">{product.title}</h1>
            <p className="text-sm grow text-gray-600">{product.description}</p>
            <p className="text-sm">{nf.format(product.price)}</p>
        </div>
    )
}