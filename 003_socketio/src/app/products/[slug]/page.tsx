import { ProductCard } from "@/components/ProductCard"
import { Product } from "../page"

type ProductPageProps = { params: { slug: string } }


export default async function Page({ params }: ProductPageProps) {

    const productId = params.slug

    /* load product again, since we might have navigated here directly */
    const r = await fetch("https://dummyjson.com/products/" + productId)
    const d = await r.json()
    const product = d as Product

    return (
        <div className="flex flex-col items-center">
            <ProductCard large product={product} ></ProductCard>
        </div>
    )

}
