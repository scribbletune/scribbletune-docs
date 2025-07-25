"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative bg-[#111418] rounded-md overflow-hidden">
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white"
        aria-label="Copy code"
      >
        <Copy size={16} />
      </button>
      <pre className="p-8 overflow-x-auto text-sm">
        <code
          className="text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: code
              .split("\n")
              .map((line) => {
                // Escape HTML tags first!
                line = line.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                if (line.trim().startsWith("//")) {
                  return `<span class="text-green-400">${
                    line || "&nbsp;"
                  }</span>`;
                }
                return (
                  line
                    .replace(
                      /(const|require)/g,
                      '<span class="text-yellow-400">$1</span>'
                    )
                    .replace(
                      /('.*?')/g,
                      '<span class="text-orange-400">$1</span>'
                    ) || "&nbsp;"
                );
              })
              .join("<br/>"),
          }}
        />
      </pre>
      {copied && (
        <div className="absolute top-2 right-10 bg-gray-700 text-white text-xs px-2 py-1 rounded">
          Copied!
        </div>
      )}
    </div>
  );
}
