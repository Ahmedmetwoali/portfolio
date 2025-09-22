'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-black mb-8">
            Let&apos;s Build<br />
            Something <span className="text-gradient">Great</span>
          </h2>
          
          <p className="text-xl text-gray-400 mb-12">
            Available for senior engineering roles and technical leadership positions.
          </p>
          
          <div className="flex justify-center gap-8">
            <a 
              href="mailto:ahmedmetwoali2@gmail.com"
              className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
            >
              <Mail size={20} />
              Email
            </a>
            <a 
              href="https://linkedin.com/in/ahmedmetwoali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a 
              href="https://github.com/Ahmedmetwoali"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-red-500 transition-colors"
            >
              <Github size={20} />
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact