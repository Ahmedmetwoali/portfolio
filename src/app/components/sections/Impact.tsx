// app/components/sections/Impact.tsx

'use client'

import { motion } from 'framer-motion'
import { Brain, Code2, Database, Cloud, Lock, Cpu } from 'lucide-react'

const Impact = () => {
  const expertise = [
    {
      icon: <Brain className="text-red-500" size={32} />,
      title: "AI/ML Engineering",
      description: "Developing multiagent platforms using LangGraph, RAG, and LLM APIs. Building production AI systems with Google Gemini, OpenAI, and Computer Vision for real-world applications.",
      skills: ["LangGraph", "RAG", "OpenAI API", "Google Gemini", "Pinecone", "NLP"]
    },
    {
      icon: <Code2 className="text-red-500" size={32} />,
      title: "Full-Stack Development",
      description: "Building scalable, production-grade applications with modern frameworks. Expert in React, Next.js, Django, and Spring Boot for enterprise and startup solutions.",
      skills: ["React", "Next.js", "Django", "Spring Boot", "TypeScript", "Flask"]
    },
    {
      icon: <Database className="text-red-500" size={32} />,
      title: "Backend Architecture",
      description: "Designing robust APIs and microservices for enterprise systems. Specializing in Java, Python, and modern database technologies including PostgreSQL and Oracle.",
      skills: ["Java", "Python", "PostgreSQL", "Oracle", "REST APIs", "Microservices"]
    },
    {
      icon: <Cloud className="text-red-500" size={32} />,
      title: "Cloud & DevOps",
      description: "Implementing cloud infrastructure on AWS and GCP with Infrastructure as Code. Building CI/CD pipelines and containerized deployments for production systems.",
      skills: ["AWS", "GCP", "Docker", "Terraform", "GitHub Actions", "CI/CD"]
    },
    {
      icon: <Lock className="text-red-500" size={32} />,
      title: "Security & Compliance",
      description: "Maintaining Active DoD Secret clearance with expertise in secure system design and compliance frameworks. Building HIPAA-compliant infrastructure for healthcare applications.",
      skills: ["DoD Secret Clearance", "HIPAA Compliance", "Secure Architecture", "FDA Integration"]
    },
    {
      icon: <Cpu className="text-red-500" size={32} />,
      title: "Languages & Tools",
      description: "Proficient across multiple programming languages and frameworks. From system-level development to modern web applications and mobile platforms.",
      skills: ["Java", "Python", "JavaScript", "C#", "SQL", "React Native"]
    }
  ]

  return (
    <section id="about" className="py-32 px-6 bg-zinc-950">
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
            Full-stack engineer with 5+ years building scalable, production-grade applications. 
            Currently focused on AI/ML systems — developing multiagent platforms using LangGraph, RAG, and LLM APIs.
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