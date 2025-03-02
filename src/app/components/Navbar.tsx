import Link from "next/link";

export default function Navbar(){
  return (
    <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/"
        target="_self"
      >
        Flashcards
      </Link>
      <Link
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="/account"
        target="_self"
      >
        Account
      </Link>
    </footer>
  )
}