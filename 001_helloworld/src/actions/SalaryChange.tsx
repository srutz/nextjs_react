"use server"

import { PoolManager } from "./PoolManager"

export async function SalaryChange(factor: number) {
    const pool = PoolManager.getPool()
    const client = await pool.connect()
    let rowCount = -1
    try {
        const res = await pool.query('update employee2 set salary = salary * $1 where id < 6', [factor])
        rowCount = res.rowCount ?? 0
    } finally {
        client.release()
    }
    return rowCount
}

export async function GetEmployees() {
    const pool = PoolManager.getPool()
    const client = await pool.connect()
    let rows = []
    try {
        const res = await pool.query('select * from employee2 order by 1', [])
        rows = res.rows
    } finally {
        client.release()
    }
    return rows
}