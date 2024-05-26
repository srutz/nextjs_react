"use client"

import { Product } from "@/app/products/page"
import { ProductCard } from "./ProductCard"
import Link from "next/link"

export function ProductsList({ products } : { products: Product[] }) {
    return (
        <div className="flex flex-wrap justify-center">
            {products.map(product => (
                <Link href={`/products/${product.id}`} key={product.id}>
                    <ProductCard product={product} />
                </Link>
            ))}
        </div>
    )
}

