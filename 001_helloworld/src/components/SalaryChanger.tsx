"use client"

import { GetEmployees, SalaryChange } from "../actions/SalaryChange"

export function SalaryChanger() {
    const onClick = () => {
        (async() => {
            const remoteMethod = SalaryChange
            console.dir(remoteMethod)
            debugger
            const result = await SalaryChange(1.25)
            alert("Changed " + result + " rows")
            const newState = await GetEmployees()
            console.table(newState)
        })()
    }
    return <button onClick={onClick}>Change Salary</button>
}