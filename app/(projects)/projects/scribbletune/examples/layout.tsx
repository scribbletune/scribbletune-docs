import type React from "react";
import ExamplesSidebar from "@/components/examples-sidebar";

export default function ScribblettuneExamples({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Scribbletune Examples</h1>
        <p className="text-gray-400">Practical code examples and tutorials</p>
      </div>
      <div className="flex gap-8">
        <div className="w-64 shrink-0">
          <ExamplesSidebar />
        </div>
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </div>
    </div>
  );
}
