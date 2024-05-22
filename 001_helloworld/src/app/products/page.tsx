
import { Product, ProductCard } from "@/components/ProductCard"
import { ProductsList } from "@/components/ProductsList"

export default async function _() {

    const r = await fetch("https://dummyjson.com/products")
    
    const d = await r.json()
    const products = d.products as Product[]
    return <ProductsList products={products}></ProductsList>
}
