import { Product } from "@/app/products/page";

export function ProductCard({ product } : { product: Product }) {
    const nf = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })
    return (
        <div className="flex flex-col shadow-xl m-2 p-4 pt-8 w-64 h-124 gap-2 hover:border-gray-200 border border-white">
            <img src={product.thumbnail} alt={product.title} className="w-full h-64 object-cover"/>
            <h1 className="border-t pt-2">{product.title}</h1>
            <p className="text-sm grow text-gray-600">{product.description}</p>
            <p className="text-sm">{nf.format(product.price)}</p>
        </div>
    )
}