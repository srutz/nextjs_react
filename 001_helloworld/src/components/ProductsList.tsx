"use client"

import { Product, ProductCard } from "./ProductCard";

export function ProductsList(props: { products: Product[]}) {

    return (
        <div className="flex flex-wrap grow h-2">
            {props.products.map(p => (
                <ProductCard key={p.id} product={p} ></ProductCard>
            ))}
        </div>
    )

}