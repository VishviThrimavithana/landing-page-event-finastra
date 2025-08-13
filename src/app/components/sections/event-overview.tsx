import { Users, Lightbulb, Network, TrendingUp, Brain } from "lucide-react"

export function EventOverview() {
  const highlights = [
    {
      icon: Brain,
      title: "Generative AI",
      description: "Explore AI applications in banking",
    },
    {
      icon: TrendingUp,
      title: "Market Volatility",
      description: "Navigate economic uncertainties",
    },
    {
      icon: Network,
      title: "Digital Transformation",
      description: "Modernize banking operations",
    },
    {
      icon: Users,
      title: "Industry Leaders",
      description: "Connect with banking experts",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Discover emerging technologies",
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Attend?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join business and technology experts, industry leaders, and visionaries to navigate the rapidly evolving
            banking landscape.
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-50 transition-colors duration-300">
                <item.icon className="w-8 h-8 text-gray-700 group-hover:text-purple-600 transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Key topics */}
        <div className="mt-20 bg-gray-50 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Discussion Topics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Impact of market volatility on banking operations",
              "Globalization challenges and opportunities",
              "Supply chain disruptions in financial services",
              "Recession threats and mitigation strategies",
              "Competitive dynamics in digital banking",
              "Evolving regulatory landscape and compliance",
            ].map((topic, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-700 leading-relaxed">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
