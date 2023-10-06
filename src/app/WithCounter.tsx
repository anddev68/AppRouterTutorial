"use client"

import { usePathname, useRouter } from "next/navigation"
import { ReactNode, useEffect, useState } from "react"

type Props = {
    children: ReactNode
}

export const WithCounter = ({children}: Props) => {
    const [count, setCount] = useState(0)
    const pathname = usePathname()
    
    useEffect(() => {
        setCount(count+1)
    }, [pathname])

    return <div>
        count={count}, pathname={pathname}
        {children}
    </div>
}