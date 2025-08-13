import { Users, Coffee } from "lucide-react"

export function AgendaSection() {
  const agenda = [
    { time: "09:30 AM", title: "Registration & Welcome Coffee", type: "break", icon: Coffee },
    {
      time: "10:00 AM",
      title: "Opening Remarks",
      speaker: "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra",
      type: "session",
      icon: Users,
    },
    {
      time: "10:10 AM",
      title: "Keynote: Digital Transformation in a Gen AI World",
      speaker: "Ms. Siobhan Byron, Executive Vice President, Finastra",
      type: "keynote",
      icon: Users,
    },
    {
      time: "10:30 AM",
      title: "Decoding the Future - Transformation: The Opportunity & Time is Now",
      speaker: "Mr. Daragh O'Byrne, Senior Director, Marketing, Finastra",
      type: "session",
      icon: Users,
    },
    {
      time: "11:00 AM",
      title: "Panel: Customer Acquisition - Gaining New Customers in a Hyper Competitive World",
      type: "panel",
      icon: Users,
    },
    {
      time: "11:30 AM",
      title: "Panel: Customer Retention - Keeping Customers When Loyalty Is Dead",
      type: "panel",
      icon: Users,
    },
    { time: "12:00 PM", title: "Coffee Break & Networking", type: "break", icon: Coffee },
    { time: "12:30 PM", title: "Panel: Cost to Serve - Deliver Customer Delight", type: "panel", icon: Users },
    {
      time: "01:00 PM",
      title: "The Essential Elements: What do you need to be 'all things to all people'?",
      speaker: "Narendra Mistry, Chief Product and Technology Officer, Finastra",
      type: "session",
      icon: Users,
    },
    {
      time: "01:30 PM",
      title: "Making the case for change: The Question is How",
      speaker: "Marwan Abouzeid, Principal Solutions Consultant, Finastra",
      type: "session",
      icon: Users,
    },
    {
      time: "01:50 PM",
      title: "Closing Remarks",
      speaker: "Rudy Kawmi, Managing Director, Finastra",
      type: "session",
      icon: Users,
    },
    { time: "02:00 PM", title: "Lunch", type: "break", icon: Coffee },
  ]

  return (
    <section id="agenda" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Event Agenda</h2>
          <p className="text-xl text-gray-600">A full day of insights, networking, and innovation</p>
        </div>

        {/* Agenda timeline */}
        <div className="space-y-6">
          {agenda.map((item, index) => (
            <div key={index} className="flex gap-6 group">
              {/* Time */}
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-sm font-medium text-gray-500">{item.time}</span>
              </div>

              {/* Timeline dot */}
              <div className="flex-shrink-0 flex flex-col items-center">
                <div
                  className={`w-3 h-3 rounded-full ${
                    item.type === "keynote"
                      ? "bg-purple-500"
                      : item.type === "panel"
                        ? "bg-purple-400"
                        : item.type === "break"
                          ? "bg-gray-300"
                          : "bg-gray-400"
                  }`}
                />
                {index < agenda.length - 1 && <div className="w-px h-12 bg-gray-200 mt-2" />}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <h3
                  className={`font-semibold mb-2 ${
                    item.type === "keynote"
                      ? "text-purple-600 text-lg"
                      : item.type === "break"
                        ? "text-gray-600"
                        : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>
                {item.speaker && <p className="text-sm text-gray-600">{item.speaker}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
