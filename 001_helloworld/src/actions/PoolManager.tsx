import { Pool } from "pg"
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
