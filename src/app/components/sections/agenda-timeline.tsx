"use client";

import { Users, Coffee } from "lucide-react";
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedAgendaItemProps {
  children: React.ReactNode;
  delay?: number;
  index: number;
  onMouseEnter: () => void;
  onClick?: () => void;
}

const AnimatedAgendaItem = ({ children, delay = 0, index, onMouseEnter, onClick }: AnimatedAgendaItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5, once: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ scale: 0.95, opacity: 0, y: 20 }}
      animate={inView ? { scale: 1, opacity: 1, y: 0 } : { scale: 0.95, opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay }}
      className="mb-6"
    >
      {children}
    </motion.div>
  );
};

interface AgendaItem {
  time: string;
  title: string;
  type: "keynote" | "panel" | "session" | "break";
  speaker?: string;
  icon: typeof Users | typeof Coffee;
}

export function AgendaSection() {
  const agenda: AgendaItem[] = [
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
  ];

  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState(0);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const { scrollTop, scrollHeight, clientHeight } = target;
    setTopGradientOpacity(Math.min(scrollTop / 50, 1));
    const bottomDistance = scrollHeight - (scrollTop + clientHeight);
    setBottomGradientOpacity(
      scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1)
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.min(prev + 1, agenda.length - 1));
      } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
        e.preventDefault();
        setKeyboardNav(true);
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [agenda, selectedIndex]);

  useEffect(() => {
    if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
    const container = listRef.current;
    const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`) as HTMLElement;
    if (selectedItem) {
      const extraMargin = 50;
      const containerScrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;
      const itemTop = selectedItem.offsetTop;
      const itemBottom = itemTop + selectedItem.offsetHeight;
      if (itemTop < containerScrollTop + extraMargin) {
        container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
      } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
        container.scrollTo({
          top: itemBottom - containerHeight + extraMargin,
          behavior: 'smooth',
        });
      }
    }
    setKeyboardNav(false);
  }, [selectedIndex, keyboardNav]);

  return (
    <section id="agenda" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Event Agenda</h2>
          <p className="text-xl text-gray-600">A full day of insights, networking, and innovation</p>
        </div>

        {/* Agenda timeline */}
        <div className="relative">
          <div
            ref={listRef}
            className="max-h-[600px] overflow-y-auto py-4 pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            onScroll={handleScroll}
          >
            {agenda.map((item, index) => (
              <AnimatedAgendaItem
                key={index}
                delay={index * 0.05}
                index={index}
                onMouseEnter={() => setSelectedIndex(index)}
              >
                <div className={`flex gap-6 group transition-colors duration-200 ${selectedIndex === index ? 'bg-gray-50 rounded-lg p-2 -mx-2' : ''
                  }`}>
                  {/* Time */}
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="text-sm font-medium text-gray-500">{item.time}</span>
                  </div>

                  {/* Timeline dot */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className={`w-3 h-3 rounded-full ${item.type === "keynote"
                          ? "bg-purple-500"
                          : item.type === "panel"
                            ? "bg-purple-400"
                            : item.type === "break"
                              ? "bg-gray-300"
                              : "bg-gray-400"
                        }`}
                    />
                    {index < agenda.length - 1 && <div className="w-px h-16 bg-gray-200 mt-2" />}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <h3
                      className={`font-semibold mb-2 ${item.type === "keynote"
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
              </AnimatedAgendaItem>
            ))}
          </div>

          <div
            className="absolute top-0 left-0 right-0 h-[50px] bg-gradient-to-b from-white to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: topGradientOpacity }}
          ></div>
          <div
            className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-white to-transparent pointer-events-none transition-opacity duration-300 ease"
            style={{ opacity: bottomGradientOpacity }}
          ></div>
        </div>
      </div>
    </section>
  );
}