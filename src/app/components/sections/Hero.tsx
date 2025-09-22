'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [text, setText] = useState('')
  const fullText = '> Senior Software Engineer'
  
  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          {/* Terminal Window */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden max-w-3xl">
            <div className="bg-zinc-900 px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-gray-500 ml-2">terminal</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="text-green-400 mb-2">$ whoami</div>
              <div className="text-gray-300 mb-4">ahmed.metwoali</div>
              
              <div className="text-green-400 mb-2">$ cat role.txt</div>
              <div className="text-gray-300 mb-4">{text}<span className="animate-pulse">_</span></div>
              
              <div className="text-green-400 mb-2">$ echo $STATUS</div>
              <div className="text-yellow-400 mb-4">AVAILABLE FOR OPPORTUNITIES</div>
              
              <div className="text-green-400 mb-2">$ ls achievements/</div>
              <div className="text-gray-300 grid grid-cols-2 gap-2 mb-4">
                <span>security_clearance_active.pdf</span>
                <span>cost_savings_5m.xlsx</span>
                <span>systems_deployed_15.json</span>
                <span>sites_served_200.db</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            AHMED <span className="text-red-500">METWOALI</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Building mission-critical systems for government and enterprise. 
            Specializing in AI-powered solutions, modern cloud architecture, and full-stack development.
          </p>
          
          <div className="flex gap-4">
            <Link 
              href="#projects" 
              className="px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold uppercase tracking-wider transition-colors"
            >
              View Projects
            </Link>
            <Link 
              href="#contact" 
              className="px-8 py-3 border border-zinc-700 hover:border-white text-white font-semibold uppercase tracking-wider transition-colors"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero