// app/components/sections/Projects.tsx

'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Sparkles, Building, Database, Shield } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Sphinque',
    category: 'AI-POWERED TALENT INTELLIGENCE & VETTING PLATFORM',
    role: 'Founder & Lead Engineer',
    period: 'June 2025 – Present',
    description: 'Full-stack AI evaluation platform using Django REST, React, and PostgreSQL. Integrated Google Gemini 2.0 and LangGraph for multi-agent code analysis with 90%+ accuracy. Designed event-driven pipeline with GitHub OAuth, webhook-based PR detection, and Celery/Redis processing 1000s of evaluations asynchronously.',
    highlights: [
      'Built multi-agent investigation system using Think-Act-Observe-Evaluate loop with tool registry',
      'Engineered real-time voice interview system using OpenAI Realtime API for adaptive technical conversations',
      'Deployed 5-service microservices architecture on Railway with Docker and GitHub Actions CI/CD'
    ],
    tech: ['Django REST', 'React', 'PostgreSQL', 'Google Gemini 2.0', 'LangGraph', 'Celery', 'Redis', 'Docker'],
    link: 'https://sphinque.com',
    icon: <Sparkles className="w-8 h-8" />,
    metrics: ['Multi-agent AI', 'Real-time voice interviews', '5-service architecture'],
    type: 'personal'
  },
  {
    id: 2,
    title: 'Rosetta Rx',
    category: 'HUMANITARIAN MEDICATION DONATION PLATFORM',
    role: 'Contract Software Engineer | Medonations NGO',
    period: 'Sept 2025 – Dec 2025',
    description: 'Architected and built a full-stack humanitarian platform for processing medication donations. Achieved 90-98% extraction accuracy using GPT-4 Vision compared to 70-75% with traditional OCR. Designed multi-photo batch processing architecture sending up to 4 images per API call, reducing costs 50% while improving accuracy.',
    highlights: [
      '90-98% extraction accuracy with GPT-4 Vision vs 70-75% with traditional OCR',
      'Built serverless GCP infrastructure (Cloud Functions, Firestore, GCS, Eventarc) with Terraform IaC managing 12 APIs',
      'Implemented offline-resilient React frontend with IndexedDB persistence for low-connectivity environments'
    ],
    tech: ['React', 'GCP Cloud Functions', 'Firestore', 'GPT-4 Vision', 'Terraform', 'Eventarc', 'IndexedDB'],
    link: 'https://rosettarx.org',
    icon: <Database className="w-8 h-8" />,
    metrics: ['90-98% accuracy', '50% cost reduction', '12 APIs managed'],
    type: 'contract'
  }
]

const workProjects = [
  {
    id: 1,
    company: 'Serco',
    title: 'CEDF Redesign',
    category: 'GOVERNMENT DATA EXCHANGE PLATFORM',
    period: 'Oct 2024 – Sept 2025',
    description: 'Led team in time-sensitive modernization of CEDF Redesign application, a custom tool designed to transfer data between government trading partners. Built new frontend from scratch using React, Bootstrap, and Axios, delivering intuitive UI for data and job management.',
    highlights: [
      'Reduced data processing times by 40% across 200+ national sites',
      'Implemented 15+ new features increasing user operational efficiency by 25%',
      'Replaced legacy application, resolving significant technical debt'
    ],
    tech: ['React', 'Bootstrap', 'Axios', 'REST APIs', 'Microservices'],
    icon: <Building className="w-8 h-8" />,
    metrics: ['200+ sites', '40% faster processing', '15+ new features'],
    clearance: true
  },
  {
    id: 2,
    company: 'Lockheed Martin',
    title: 'SCM DX',
    category: 'ENTERPRISE SUPPLY CHAIN PLATFORM',
    period: 'Nov 2022 – Oct 2024',
    description: 'Built backend APIs using Java and Spring Boot for enterprise supply chain platform, replacing licensed vendor system with in-house solution that reduced operational costs. Led refactoring of legacy codebase and optimized SQL queries.',
    highlights: [
      'Replaced licensed IBM software reducing operational costs',
      'Improved system performance across multiple production environments',
      'Managed code reviews and production deployments'
    ],
    tech: ['Java', 'Spring Boot', 'AWS', 'Oracle', 'ActiveMQ'],
    icon: <Shield className="w-8 h-8" />,
    metrics: ['Cost reduction', 'Multiple prod environments', 'Secret clearance'],
    clearance: true
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-red-500 uppercase tracking-widest mb-4">02</p>
          <h2 className="text-5xl md:text-7xl font-black mb-4">Featured Work</h2>
          <p className="text-gray-400 text-lg mb-16">Personal ventures and contract work showcasing AI/ML expertise</p>
        </motion.div>
        
        {/* Personal & Contract Projects */}
        <div className="grid gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-black border border-zinc-800 overflow-hidden hover:border-red-500/50 transition-all">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-red-500 text-sm font-mono mb-2">{project.category}</p>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-500 text-sm">{project.role} • {project.period}</p>
                    </div>
                    <div className="text-red-500">{project.icon}</div>
                  </div>
                  
                  <p className="text-gray-400 text-lg mb-4">{project.description}</p>
                  
                  <ul className="text-gray-500 mb-6 space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    {project.metrics.map((metric) => (
                      <span key={metric} className="text-sm text-gray-500 border-l-2 border-zinc-800 pl-3">
                        {metric}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-xs uppercase tracking-wider">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.link && (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-semibold transition-colors"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Work Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold mb-4 text-gray-300">Professional Experience Projects</h3>
          <p className="text-gray-400 mb-12">Mission-critical systems built at leading defense contractors</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {workProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 p-6 hover:border-red-500/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-red-500 uppercase tracking-wider mb-1">{project.company}</p>
                  <h4 className="text-2xl font-bold">{project.title}</h4>
                  <p className="text-sm text-gray-500">{project.category}</p>
                  <p className="text-xs text-gray-600 mt-1">{project.period}</p>
                </div>
                <div className="text-gray-600">{project.icon}</div>
              </div>
              
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <ul className="text-gray-500 text-sm mb-4 space-y-1">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500/70">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-xs">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3">
                {project.metrics.map((metric) => (
                  <span key={metric} className="text-xs text-gray-500">
                    • {metric}
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

export default Projects