"use client"

import { useRouter } from "next/navigation"

export type Product = {
    id: number
    title: string
    description: string
    price: number;
    brand: string;
    category: string;
    thumbnail: string
    image: string[] 
}

export function ProductCard(props: { large?: boolean, product: Product }) {
    const { product, large} = props
    const route = useRouter()
    const onClick = () => {
        route.push("/products/" + product.id)
    }
    const nf = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })

    return (
        <div className="flex flex-col gap-4 h-96 w-48 border border-gray-300 m-4 mouse-cursor" onClick={onClick}>
            <img className="h-48 cover" src={product.thumbnail}></img>
            <div>{product.title}</div>
            {
                large && (
                    <>
                        <div>{product.description}</div>
                        <div>{nf.format(product.price)}</div>
                    </>
                )
            }
        </div>
    )
}