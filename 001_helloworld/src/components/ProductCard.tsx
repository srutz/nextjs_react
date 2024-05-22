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
        <div onClick={onClick} className="productcard">
            <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover"/>
            <h1 className="border-t pt-2">{product.title}</h1>
            <p className="text-sm grow text-gray-600">{product.description}</p>
            <p className="text-sm">{nf.format(product.price)}</p>
        </div>
    )
}