import Navbar from "@/app/components/Navbar";
import Link from "next/link";

export default async function Flashcards({
  params,
}: {
  params: Promise<{ slug: string }>
}){
  const slug = (await params).slug;

  return(
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        flashcard set {slug}
      </main>
      <Navbar/>
    </div>
  )
}