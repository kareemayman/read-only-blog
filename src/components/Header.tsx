import Link from "next/link"
import React from "react"

export default function Header() {
  return (
    <header className="bg-blue-950 text-blue-50 py-5">
      <div className="container flex justify-between items-center">
        <h1 className="text-xl md:text-3xl">My Blog</h1>
        <nav className="flex items-center gap-4">
          <Link
            className="text-base shadow-2xs transition hover:text-white hover:shadow-amber-50 md:text-2xl"
            href={"/posts"}
          >
            Posts
          </Link>
          <Link
            className="text-base shadow-2xs transition hover:text-white hover:shadow-amber-50 md:text-2xl"
            href={"/users"}
          >
            Users
          </Link>
          <Link
            className="text-base shadow-2xs transition hover:text-white hover:shadow-amber-50 md:text-2xl"
            href={"/todos"}
          >
            Todos
          </Link>
        </nav>
      </div>
    </header>
  )
}
