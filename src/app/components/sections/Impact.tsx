// app/components/sections/Impact.tsx

'use client'

import { motion } from 'framer-motion'
import { Brain, Code2, Database, Cloud, Lock, Cpu } from 'lucide-react'

const Impact = () => {
  const expertise = [
    {
      icon: <Brain className="text-red-500" size={32} />,
      title: "AI/ML Engineering",
      description: "Building advanced AI systems with multi-agent architectures, RAG implementations, and production-grade ML pipelines using Google Gemini, OpenAI, and LangGraph.",
      skills: ["LLM Integration", "Computer Vision", "NLP", "Multi-Agent Systems"]
    },
    {
      icon: <Code2 className="text-red-500" size={32} />,
      title: "Full-Stack Development",
      description: "Developing mission-critical applications with modern frameworks. Expert in React, Next.js, Django, and Spring Boot for scalable enterprise solutions.",
      skills: ["React/Next.js", "Django/Flask", "Spring Boot", "TypeScript"]
    },
    {
      icon: <Database className="text-red-500" size={32} />,
      title: "Backend Architecture",
      description: "Designing robust microservices and APIs serving 200+ sites. Specializing in high-performance systems with Java, Python, and modern database technologies.",
      skills: ["Microservices", "REST/SOAP APIs", "PostgreSQL", "System Design"]
    },
    {
      icon: <Cloud className="text-red-500" size={32} />,
      title: "Cloud & DevOps",
      description: "Implementing secure cloud infrastructure on AWS and GCP with IaC. Building CI/CD pipelines and containerized deployments for government-grade systems.",
      skills: ["AWS/GCP", "Docker/Kubernetes", "Terraform", "CI/CD"]
    },
    {
      icon: <Lock className="text-red-500" size={32} />,
      title: "Security & Compliance",
      description: "Maintaining DoD Secret clearance with expertise in secure system design, cryptography, and compliance frameworks for government contractors.",
      skills: ["Security Clearance", "FISMA/FedRAMP", "Zero Trust", "Encryption"]
    },
    {
      icon: <Cpu className="text-red-500" size={32} />,
      title: "Systems Engineering",
      description: "Experience with distributed systems, message queuing, and embedded development. Proven track record of modernizing legacy systems and reducing costs by millions.",
      skills: ["ActiveMQ", "RTOS", "Legacy Migration", "Performance Optimization"]
    }
  ]

  return (
    <section id="expertise" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-red-500 uppercase tracking-widest mb-4">01</p>
          <h2 className="text-5xl md:text-7xl font-black mb-4">What I Do</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Senior Software Engineer with expertise in AI/ML, cloud architecture, and full-stack development. 
            Building mission-critical systems for government and enterprise clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black border border-zinc-800 p-8 hover:border-red-500/50 transition-all group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {item.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-xs px-3 py-1 bg-zinc-900 text-gray-500 border border-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact