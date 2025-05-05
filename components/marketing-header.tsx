import Link from "next/link"
import { Music4, Github } from "lucide-react"

export default function MarketingHeader() {
  return (
    <header className="border-b border-gray-800 bg-[#1a1e24]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Music4 className="h-6 w-6" />
          <span className="font-bold text-xl">Scribbletune</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/docs" className="text-gray-200 hover:text-white">
            Documentation
          </Link>
          <Link href="/examples" className="text-gray-200 hover:text-white">
            Examples
          </Link>
          <Link
            href="https://github.com/scribbletune/scribbletune"
            target="_blank"
            className="text-gray-200 hover:text-white flex items-center gap-1"
          >
            <Github size={18} />
            <span>GitHub</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}

