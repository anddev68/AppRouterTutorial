"use client"

import { useRouter } from "next/navigation"

export function ToDashboardButton () {
    const router = useRouter()
    const onClick = () => {
        router.push("/dashboard")
    }
    return <button onClick={onClick}>Go To Dashboard</button>
}