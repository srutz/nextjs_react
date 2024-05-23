import { Pager } from "@/components/Pages"
import { ProductsFilter } from "@/components/ProductsFilter"
import { ProductsList } from "@/components/ProductsList"


/*
 * type definition for products from dummyjson.com/products
 */
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

/*
 * the response from dummyjson.com/products
 */
export type ProductsResponse = {
    products: Product[]
    total: number
    skip: number
    limit: number
}



/*
 * makes the call to dummyjson.com/products
 */
async function loadProducts(filter: string, offset: number, limit: number) {
    let url = "https://dummyjson.com/products"
    const params: { limit: string, skip: string, q?: string } = {
        limit: limit.toString(),
        skip: offset.toString()
    }
    if (filter) {
        url += "/search"
        params.q = filter
    }
    const querystring = new URLSearchParams(params).toString()
    url += "?" + querystring
    const response = await fetch(url, { cache: 'no-store', next: { tags: [ "products" ] }})
    const data = await response.json() as ProductsResponse
    return data
}


/*
 * type definition for the search params of the page
 */
type SearchParamsType = {
    searchParams?: {
        q?: string
        page?: string
    }
}

import { Socket } from "socket.io"
import { getSocketIoInstance } from "@/server.js"
import { getSocketIoReference } from "@/components/ServerUtil"


/*
 * the default export, eg this is the page content for this route
 */
export default async function Page({ searchParams }: SearchParamsType) {

    const page = Number(searchParams?.page) || 1
    const query = searchParams?.q || ""

    const pageSize = 20
    const data = await loadProducts(query, (page - 1) * pageSize, pageSize)
    const pageCount = Math.ceil(data.total / pageSize)
    const products = data.products

    getSocketIoReference()?.emit("mychannel", "loaded products")

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center">
                <div className="flex gap-4 items-baseline">
                    <ProductsFilter></ProductsFilter>
                    <Pager page={page} pageCount={pageCount}></Pager>
                </div>
            </div>
            <ProductsList products={products}></ProductsList>
        </div>
    )
}
            

