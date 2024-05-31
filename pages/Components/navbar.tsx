import Link from "next/link";
import Button from "./Elements/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center w-full h-16 overflow-hidden bg-white shadow-sm">
      <div className="container flex items-center justify-between mx-auto">
        <Link href="/"><h1 className="font-mono text-sm font-bold md:text-lg">aryanaufal.vercel.app</h1></Link>
        <div className="flex gap-3 list-none">
          <li>
            <Link href="/about"><Button className='bg-blue-500 hover:bg-blue-700' text="About" /></Link>
          </li>
        </div>
      </div>
    </nav>
  )
}