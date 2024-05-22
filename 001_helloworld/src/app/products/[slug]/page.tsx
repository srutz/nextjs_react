
import { Product, ProductCard } from "@/components/ProductCard"
import { Pool } from "pg"

type ParamsType = { params: { slug: string } }

export class PoolManager {

    static instance = new PoolManager()

    static getPool() {
        return this.instance.pool
    }

    /* the global pool */
    pool

    constructor() {
        this.pool = new Pool({
            user: 'sr',
            host: 'localhost',
            database: '7511fccf-3dd4-40c1-9136-6cd725435539',
            })
    }
}


export async function GetDatabaseResults() {
    const pool = PoolManager.getPool()
    const client = await pool.connect()
    try {
        const res = await pool.query('select * from employee order by id limit 5', [])
        console.dir(res.rows)
        return res.rows
    } finally {
        client.release()
    }
}



export default async function _({ params }: ParamsType) {

    console.log("showing single product") 
    
    const rows = await GetDatabaseResults()
    const productId = params.slug
    const r = await fetch("https://dummyjson.com/products/" + productId)
    const d = await r.json()
    const product = d as Product
    return <ProductCard large product={product} ></ProductCard>
}