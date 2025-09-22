'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Globe, Sparkles, Building, Database, Heart, Shield } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Sphinque',
    category: 'AI PLATFORM - LEAD DEVELOPER',
    description: 'AI-powered talent intelligence platform revolutionizing tech hiring. Built multi-agent AI systems for code analysis, reducing hiring timelines by 90% while maintaining quality through 5% acceptance rate.',
    tech: ['Django', 'React', 'PostgreSQL', 'Google Gemini', 'Redis', 'Docker'],
    link: 'https://sphinque.com',
    icon: <Sparkles className="w-8 h-8" />,
    metrics: ['90% faster hiring', '5% acceptance rate', 'Multi-agent AI'],
    type: 'personal'
  },
  {
    id: 2,
    title: 'Rosetta Rx',
    category: 'HEALTHCARE TECH - LEAD DEVELOPER',
    description: 'Medical asset logistics platform for humanitarian organizations. Reduced processing time by 80% using Computer Vision and NLP for medication management in underserved regions.',
    tech: ['Next.js', 'TypeScript', 'Google Cloud', 'Terraform', 'Vision API', 'Firebase'],
    link: 'https://rosettarx.org',
    icon: <Database className="w-8 h-8" />,
    metrics: ['80% time reduction', 'CV/NLP integration', 'Global deployment'],
    type: 'personal'
  },
  {
    id: 3,
    title: 'CareConnect Platform',
    category: 'FREELANCE PROJECT',
    description: 'Healthcare staffing solution connecting certified caregivers with homecare agencies. Built end-to-end platform with real-time shift management, secure authentication, and automated matching algorithm for 50+ beta users.',
    tech: ['Python', 'Flask', 'Firebase', 'JavaScript', 'Tailwind CSS', 'Google Auth'],
    link: null,
    icon: <Heart className="w-8 h-8" />,
    metrics: ['3 agency partners', '50+ caregivers', 'Automated matching'],
    type: 'freelance'
  }
]

const workProjects = [
  {
    id: 1,
    company: 'Serco',
    title: 'CEDF Redesign',
    category: 'GOVERNMENT DATA EXCHANGE PLATFORM',
    description: 'Led modernization of critical government data exchange platform serving 200+ national sites. Built new React frontend from scratch, achieving 40% reduction in processing times and implementing 15+ new features.',
    tech: ['React', 'Bootstrap', 'Axios', 'REST APIs', 'Microservices'],
    icon: <Building className="w-8 h-8" />,
    metrics: ['200+ sites', '40% faster', '$200M+ data processed'],
    clearance: true
  },
  {
    id: 2,
    company: 'Lockheed Martin',
    title: 'SCM DX',
    category: 'SUPPLY CHAIN SYSTEM',
    description: 'Architected backend API development for enterprise supply chain management system, replacing licensed IBM software to achieve $5M annual savings. Modernized legacy Java systems for improved performance and maintainability.',
    tech: ['Java', 'Spring Boot', 'AWS', 'Oracle', 'ActiveMQ'],
    icon: <Shield className="w-8 h-8" />,
    metrics: ['$5M saved', '4 national sites', 'Secret clearance'],
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
          <p className="text-gray-400 text-lg mb-16">Personal projects and freelance work showcasing innovation and technical expertise</p>
        </motion.div>
        
        {/* Personal & Freelance Projects */}
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
                      <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                    </div>
                    <div className="text-red-500">{project.icon}</div>
                  </div>
                  
                  <p className="text-gray-400 text-lg mb-6">{project.description}</p>
                  
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
                  {project.type === 'freelance' && !project.link && (
                    <span className="text-gray-500 text-sm">Client project - Details under NDA</span>
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
                </div>
                <div className="text-gray-600">{project.icon}</div>
              </div>
              
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-3 mb-4">
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