"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"
import { useDebouncedCallback } from 'use-debounce';

export function ProductsFilter() {
    const { replace } = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const handleSearch = useDebouncedCallback((term: string) => {
        const params = new URLSearchParams()
        if (term) {
            params.set('q', term)
        } else {
            params.delete('q')
        }
        if (searchParams.get('view') == "table") {
            params.set("view", "table")
        } else {
            params.delete('view')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 250)
    return (
        <div className="flex items-baseline gap-4 text-sm ">
            <label htmlFor="filter"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Produktfilter
            </label>
            <input type="text"
                id="filter"
                className="mt-1 block w-96 px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Suchausdruck eingeben..."
                required
                defaultValue={searchParams.get('q')?.toString()}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleSearch(e.target?.value)}
            >
            </input>
        </div>
    )
}