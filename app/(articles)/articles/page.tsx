import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export default function ArticlesPage() {
  const articles = [
    {
      title: "The Mathematics of Musical Patterns",
      excerpt:
        "Exploring how mathematical concepts like fractals and cellular automata can generate compelling musical sequences.",
      date: "2025-01-15",
      readTime: "8 min read",
      category: "Algorithm Design",
      tags: ["Mathematics", "Patterns", "Algorithms"],
      slug: "mathematics-of-musical-patterns",
      featured: true,
    },
    {
      title: "Building Real-time Audio Processing with Web Audio API",
      excerpt:
        "A deep dive into creating responsive audio effects and synthesis engines in the browser.",
      date: "2025-01-10",
      readTime: "12 min read",
      category: "Web Audio",
      tags: ["WebAudio", "JavaScript", "Real-time"],
      slug: "realtime-audio-processing-web-audio-api",
      featured: false,
    },
    // Future articles will be added here
  ];

  const categories = [
    { name: "Algorithm Design", count: 1 },
    { name: "Web Audio", count: 1 },
    { name: "Music Theory", count: 0 },
    { name: "Plugin Development", count: 0 },
    { name: "Machine Learning", count: 0 },
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
          Articles
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          Research, insights, and deep dives into music technology, algorithmic
          composition, and creative coding.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          {/* Featured Article */}
          {articles
            .filter((article) => article.featured)
            .map((article, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-8 mb-8 border border-green-500/20"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
                    FEATURED
                  </span>
                  <span className="text-gray-400 text-sm">
                    {article.category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
                <p className="text-gray-300 text-lg mb-4">{article.excerpt}</p>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Calendar size={14} />
                    {formatDate(article.date)}
                  </div>
                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <Clock size={14} />
                    {article.readTime}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {article.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
                  >
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}

          {/* Regular Articles */}
          <div className="space-y-6">
            {articles
              .filter((article) => !article.featured)
              .map((article, index) => (
                <div
                  key={index}
                  className="bg-gray-800/50 rounded-lg p-6 border border-gray-700"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-gray-400 text-sm">
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{article.title}</h3>
                  <p className="text-gray-300 mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <Calendar size={14} />
                      {formatDate(article.date)}
                    </div>
                    <div className="flex items-center gap-1 text-gray-400 text-sm">
                      <Clock size={14} />
                      {article.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2">
                      {article.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="text-green-400 hover:text-green-300 flex items-center gap-1"
                    >
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          {/* Coming Soon */}
          <div className="mt-8 bg-gray-800/30 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-3">
              More Articles Coming Soon
            </h3>
            <p className="text-gray-400">
              Research in progress on topics like machine learning for music
              generation, advanced synthesis techniques, and creative coding
              workflows.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-gray-300">{category.name}</span>
                  <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                    {category.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 mt-6">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get notified when new articles about music technology and creative
              coding are published.
            </p>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
