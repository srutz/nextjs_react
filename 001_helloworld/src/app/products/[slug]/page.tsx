
import { JsonDisplay } from "@/components/JsonDisplay"
import { Product, ProductCard } from "@/components/ProductCard"
import { readFileSync } from "fs"

type ParamsType = { params: { slug: string } }




export async function GetDatabaseResults() {
    const pool = PoolManager.getPool()
    const client = await pool.connect()
    try {
        const res = await pool.query('select * from employee order by id limit 5', [])
        //console.dir(res.rows)
        return res.rows
    } finally {
        client.release()
    }
}

import { promises as fs } from 'fs';
import { useSearchParams } from "next/navigation"
import { revalidateTag } from "next/cache"
import { PoolManager } from "@/actions/PoolManager"
import { SalaryChanger } from "@/components/SalaryChanger"
import { SalaryChange } from "@/actions/SalaryChange"

export async function loadFile(filePath: string) {
    const data = await fs.readFile(filePath, 'utf-8');
    return data;
}


export default async function _(props: ParamsType) {
    const { params } = props
    console.log(props)
    const productId = params.slug

    // file access
    /*
    const passwdcontent = await loadFile("/etc/passwd");

    // database access
    */
   const rows = await GetDatabaseResults()

    // remote api access
    let product: Product | undefined = undefined
    for (let i = 0; i < 10; i++) {
        const r = await fetch("https://dummyjson.com/products/" + productId, { next: { tags: ["products"] } })
        if (Math.floor(r.status / 100) != 2) {
            return <div>Product not loaded: {r.status}</div>
        }
        const d = await r.json()
        product = d as Product
    }
    revalidateTag("products")
    if (!product) {
        return <div>no product</div>
    }

    const a = SalaryChange
    console.log(a)
    return (
        <div className="flex flex-col gap-4">
            {!false &&
                <JsonDisplay json={rows}></JsonDisplay>
            }
            <SalaryChanger></SalaryChanger>
            <ProductCard large product={product} ></ProductCard>
        </div>
    )
}