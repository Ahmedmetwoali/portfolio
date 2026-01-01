// app/components/sections/Hero.tsx

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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-x-hidden">
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
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
            <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
              <div className="text-green-400 mb-2">$ whoami</div>
              <div className="text-gray-300 mb-4">ahmed.metwoali</div>
              
              <div className="text-green-400 mb-2">$ cat role.txt</div>
              <div className="text-gray-300 mb-4">{text}<span className="animate-pulse">_</span></div>
              
              <div className="text-green-400 mb-2">$ echo $STATUS</div>
              <div className="text-yellow-400 mb-4">OPEN TO OPPORTUNITIES</div>
              
              <div className="text-green-400 mb-2">$ ls achievements/</div>
              <div className="text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                <span>ai_platform_sphinque.py</span>
                <span>medical_tech_rosetta.js</span>
                <span>cedf_modernization.java</span>
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
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 sm:mb-6">
            AHMED <span className="text-red-500">METWOALI</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl">
            Full-stack engineer with 5+ years building scalable, production-grade applications. 
            Currently focused on AI/ML systems — developing multiagent platforms using LangGraph, RAG, and LLM APIs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#projects" 
              className="px-6 sm:px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold uppercase tracking-wider transition-colors text-center"
            >
              View Projects
            </Link>
            <Link 
              href="#contact" 
              className="px-6 sm:px-8 py-3 border border-zinc-700 hover:border-white text-white font-semibold uppercase tracking-wider transition-colors text-center"
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