import { ProductsList } from "@/components/ProductsList"
import { revalidatePath, revalidateTag, unstable_noStore } from "next/cache"
import { cookies } from "next/headers"
import { Suspense } from "react"

export type Product = {
    id: number
    title: string
    description: string
    price: number
    brand: string
    category: string
    rating: number
    stock: number
    thumbnail: string
    images: string[]
}

export type ProductsResponse = {
    products: Product[]
    total: number
    skip: number
    limit: number
}


export function delayFunction(ms: number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, ms)
    })
}

export default async function Page() {
    return (
        <div className="flex flex-col">
            <Suspense fallback={<div>Loading...</div>}>
                <ProductsContent></ProductsContent>
            </Suspense>
        </div>
    )
}

async function ProductsContent() {

    console.time("loading products")
    const response = await fetch("https://dummyjson.com/products", { next: { tags: [ "products" ] }})
    console.log("statuscode=" + response.status)
    const data = await response.json() as ProductsResponse
    //await delayFunction(3_000)
    const products = data.products
    console.timeEnd("loading products")
    //revalidateTag("products")
    
    return (
        <ProductsList products={products} />
    )
}

