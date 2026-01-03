// app/components/sections/Timeline.tsx

'use client'

import { motion } from 'framer-motion'

const Timeline = () => {
  const career = [
    {
      startDate: "Oct 2024",
      endDate: "Sep 2025",
      title: "Senior Software Engineer",
      company: "Serco",
      achievement: "Led modernization of CEDF platform serving 200+ national sites, reducing processing times by 40%",
      tech: ["React", "Spring Boot", "Microservices", "REST APIs"],
      current: true
    },
    {
      startDate: "Nov 2022",
      endDate: "Oct 2024",
      title: "Software Engineer",
      company: "Lockheed Martin",
      achievement: "Built backend APIs replacing licensed vendor system, reducing operational costs",
      tech: ["Java", "Spring Boot", "AWS", "Oracle"]
    },
    {
      startDate: "Feb 2022",
      endDate: "Nov 2022",
      title: "Software Engineer",
      company: "Raytheon Technologies",
      achievement: "Designed message queuing system improving data handling by 30%",
      tech: ["ActiveMQ", "Java", "AWS", "Azure"]
    },
    {
      startDate: "Aug 2017",
      endDate: "Aug 2021",
      title: "B.S. Information Technology",
      company: "Penn State University",
      achievement: "Software Development Focus",
      tech: ["Computer Science", "Algorithms", "Data Structures"]
    }
  ]

  return (
    <section id="experience" className="py-16 sm:py-32 px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-red-500 uppercase tracking-widest mb-4">03</p>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-8 sm:mb-16">Career Evolution</h2>
        </motion.div>

        <div className="relative">
          {/* Progress Line - hidden on mobile */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-px bg-zinc-800"></div>
          
          {career.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8 sm:mb-12"
            >
              {/* Node - adjusted for mobile */}
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-xs sm:text-base font-bold ${
                  item.current ? 'bg-red-500 text-white animate-pulse' : 'bg-zinc-900 border border-zinc-800'
                }`}>
                  {item.startDate.split(' ')[1]?.slice(2) || item.startDate.slice(2, 4)}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-4 sm:pb-8">
                <div className="bg-zinc-950 border border-zinc-800 p-4 sm:p-6 hover:border-red-500/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">{item.title}</h3>
                      <p className="text-red-500 text-sm sm:text-base">{item.company}</p>
                      <p className="text-gray-500 text-xs sm:text-sm mt-1">
                        {item.startDate} - {item.endDate}
                      </p>
                    </div>
                    {item.current && (
                      <span className="self-start px-3 py-1 bg-red-500/20 text-red-500 text-xs uppercase tracking-wider">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 mb-4 text-sm sm:text-base">{item.achievement}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-zinc-900 text-gray-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
