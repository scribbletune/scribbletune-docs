import Link from "next/link";
import { Music4 } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-gray-800 bg-[#1a1e24]">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Music4 className="h-6 w-6" />
          <span className="font-bold">Music with Code</span>
        </Link>
        <nav className="flex items-center gap-6">
          <Link href="/projects" className="text-gray-200 hover:text-white">
            Projects
          </Link>
          <Link href="/plugins" className="text-gray-200 hover:text-white">
            Plugins
          </Link>
          <Link href="/articles" className="text-gray-200 hover:text-white">
            Articles
          </Link>
        </nav>
      </div>
    </header>
  );
}
