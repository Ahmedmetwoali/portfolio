'use client'

import { motion } from 'framer-motion'

const Timeline = () => {
  const career = [
    {
      year: "2024",
      title: "Senior Software Engineer",
      company: "Serco",
      achievement: "Modernized government systems serving 200+ sites",
      tech: ["React", "Spring Boot", "Microservices"]
    },
    {
      year: "2022",
      title: "Software Engineer",
      company: "Lockheed Martin",
      achievement: "Saved $5M through system optimization",
      tech: ["Java", "AWS", "System Architecture"]
    },
    {
      year: "2022",
      title: "Software Engineer",
      company: "Raytheon Technologies",
      achievement: "Improved data handling by 30%",
      tech: ["Message Queuing", "Cloud Migration"]
    },
    {
      year: "2021",
      title: "B.S. Information Technology",
      company: "Penn State University",
      achievement: "Software Development Focus",
      tech: ["Computer Science", "Algorithms", "Data Structures"]
    }
  ]

  return (
    <section id="experience" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-red-500 uppercase tracking-widest mb-4">03</p>
          <h2 className="text-5xl md:text-7xl font-black mb-16">Career Evolution</h2>
        </motion.div>

        <div className="relative">
          {/* Progress Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-zinc-800"></div>
          
          {career.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex gap-8 mb-12"
            >
              {/* Node */}
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center font-bold ${
                  item.current ? 'bg-red-500 text-white animate-pulse' : 'bg-zinc-900 border border-zinc-800'
                }`}>
                  {item.year.slice(2)}
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="bg-zinc-950 border border-zinc-800 p-6 hover:border-red-500/50 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                      <p className="text-red-500">{item.company}</p>
                    </div>
                    {item.current && (
                      <span className="px-3 py-1 bg-red-500/20 text-red-500 text-xs uppercase tracking-wider">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 mb-4">{item.achievement}</p>
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