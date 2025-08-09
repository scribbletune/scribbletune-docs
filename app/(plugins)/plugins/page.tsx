import Link from "next/link";
import { Download, ExternalLink, Play } from "lucide-react";

export default function PluginsPage() {
  const plugins = [
    {
      name: "Riff",
      description:
        "AI-powered pattern generator for creating infinite musical possibilities with algorithmic composition.",
      category: "Pattern Generator",
      status: "In Development",
      image: "/placeholder.svg", // You can add actual screenshots later
      features: [
        "Algorithmic Patterns",
        "Real-time Generation",
        "MIDI Export",
        "Multiple Styles",
      ],
      demoVideo: "#", // YouTube link when available
      download: "#", // Download link when available
      github: "#", // GitHub link if open source
    },
    // Future plugins will be added here easily
  ];

  const upcomingPlugins = [
    {
      name: "Chord Weaver",
      description:
        "Advanced chord progression generator with voice leading and harmonic analysis.",
      category: "Harmony",
      estimatedRelease: "Q2 2025",
    },
    {
      name: "Rhythm Matrix",
      description:
        "Polyrhythmic beat generator with complex time signatures and groove variations.",
      category: "Rhythm",
      estimatedRelease: "Q3 2025",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-400">
          Music Plugins
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          Creative tools and plugins for music production, from pattern
          generators to advanced synthesis engines.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Available Plugins</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {plugins.map((plugin, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700"
            >
              <div className="aspect-video bg-gray-700 flex items-center justify-center">
                <img
                  src={plugin.image}
                  alt={`${plugin.name} screenshot`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold">{plugin.name}</h3>
                  <span className="bg-yellow-900/50 text-yellow-400 px-2 py-1 rounded text-sm">
                    {plugin.status}
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-2">{plugin.category}</p>
                <p className="text-gray-300 mb-4">{plugin.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">
                    Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {plugin.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={plugin.demoVideo}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors text-sm"
                  >
                    <Play size={14} />
                    Demo Video
                  </Link>
                  <Link
                    href={plugin.download}
                    className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors text-sm"
                  >
                    <Download size={14} />
                    Download
                  </Link>
                  <Link
                    href={plugin.github}
                    className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors text-sm"
                  >
                    <ExternalLink size={14} />
                    Source
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Upcoming Plugins</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingPlugins.map((plugin, index) => (
            <div
              key={index}
              className="bg-gray-800/30 rounded-lg p-6 border border-gray-700"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-semibold">{plugin.name}</h3>
                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                  {plugin.estimatedRelease}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-2">{plugin.category}</p>
              <p className="text-gray-300 text-sm">{plugin.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-12 bg-gradient-to-r from-purple-900/30 to-fuchsia-900/30 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-semibold mb-3">Plugin Development</h3>
        <p className="text-gray-300 mb-4">
          Interested in collaborating or have ideas for new plugins? Let's
          create something amazing together.
        </p>
        <Link
          href="/articles"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md inline-flex items-center gap-2 transition-colors"
        >
          Read Development Articles <ExternalLink size={16} />
        </Link>
      </div>
    </div>
  );
}
