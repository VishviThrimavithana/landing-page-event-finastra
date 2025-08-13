import { ExternalLink } from "lucide-react"

export function SpeakersSection() {
  const speakers = [
    {
      name: "Ms. Siobhan Byron",
      title: "Executive Vice President, Universal Banking",
      company: "Finastra",
      session: "Keynote: Digital Transformation in a Gen AI World",
    },
    {
      name: "Mr. Narendra Mistry",
      title: "Chief Product and Technology Officer",
      company: "Finastra Universal Banking",
      session: "The Essential Elements: What do you need to be 'all things to all people'?",
    },
    {
      name: "Mr. Emad Shawky Habib Hanna",
      title: "Chief Data and Analytics Officer",
      company: "Banque Misr",
      session: "Panel: Cost to Serve - Deliver Customer Delight",
    },
    {
      name: "Ms. Heba Yehia",
      title: "Head of Digital Products",
      company: "Arab African International Bank",
      session: "Panel: Customer Retention - Keeping Customers When Loyalty Is Dead",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Speakers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry experts and thought leaders shaping the future of banking
          </p>
        </div>

        {/* Speakers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold text-lg">
                    {speaker.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
              <p className="text-purple-600 font-medium mb-1">{speaker.title}</p>
              <p className="text-gray-600 mb-4">{speaker.company}</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm text-gray-700 leading-relaxed">{speaker.session}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
