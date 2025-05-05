"use client"

import { useState } from "react"
import { Copy } from "lucide-react"

interface CodeBlockProps {
  code: string
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative bg-[#111418] rounded-md overflow-hidden">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white"
        aria-label="Copy code"
      >
        <Copy size={16} />
      </button>
      <pre className="p-4 overflow-x-auto text-sm">
        <code className="text-gray-300 leading-relaxed">
          {code.split("\n").map((line, i) => {
            // Highlight comments
            if (line.trim().startsWith("//")) {
              return (
                <div key={i} className="text-green-400">
                  {line}
                </div>
              )
            }

            // Highlight keywords
            const highlightedLine = line
              .replace(/(const|require)/g, '<span class="text-yellow-400">$1</span>')
              .replace(/('.*?')/g, '<span class="text-orange-400">$1</span>')

            return <div key={i} dangerouslySetInnerHTML={{ __html: highlightedLine }} />
          })}
        </code>
      </pre>
      {copied && (
        <div className="absolute top-2 right-10 bg-gray-700 text-white text-xs px-2 py-1 rounded">Copied!</div>
      )}
    </div>
  )
}

