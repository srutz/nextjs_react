"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

/*
 * A pager component, showing buttons to navigate to different pages
 *
 * When a page is clicked, the page number is updated in the URL
 *
 */
export function Pager(props: { pageCount: number, page: number}) {
    const { pageCount, page } = props
    const { replace } = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const handlePage = (page: number) => {
        const params = new URLSearchParams()
        const q = searchParams.get("q")
        if (q) {
            params.set("q", q)
        } else {
            params.delete("q")
        }
        if (page) {
            params.set("page", page.toString())
        } else {
            params.delete("page")
        }
        replace(`${pathname}?${params.toString()}`)
    }
    if (pageCount <= 1) {
        return null
    }
    const activeClasses = "border-b-2 border-gray-700 cursor-default"
    const inactiveClasses = "cursor-pointer"
    return (
        <div className="flex gap-2 text-sm">
            {generateArray(pageCount).map(i => (
                    <div key={i}
                        className={i + 1 == page ? activeClasses : inactiveClasses}
                        onClick={() => { handlePage(i+1)}}
                        >{i + 1}</div>
                )
            )}
        </div>
    )
}


/*
 * helper function for array containing n elements 
 */
function generateArray(n: number) {
    const a: number[] = []
    for (let i = 0; i < n; i++) {
        a.push(i)
    }
    return a
}
