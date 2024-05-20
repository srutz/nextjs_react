"use client"

import { Product } from "@/app/products/page"
import { ProductCard } from "./ProductCard"

export function ProductsList({ products } : { products: Product[] }) {
    return (
        <div className="flex flex-wrap justify-center">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

