import Link from "next/link";

export default function Page() {
    return <div>
        <h1>
            Hello, Home page!
        </h1>
        <Link href="/dashboard">dashboard</Link>
    </div>

  }