import Link from "next/link";
import { ToDashboardButton } from "./ToDashboardButton";

export default function Page() {
    return <div style={{ height: "1000px"}}>
        <h1>
            Hello, Home page!
        </h1>
        <Link href="/dashboard" scroll={false}>dashboard</Link>
        <ToDashboardButton />
    </div>

  }