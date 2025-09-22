// app/components/sections/Contact.tsx

'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send, User, MessageSquare, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  // EmailJS integration
  const sendEmailJS = async () => {

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    
    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Ahmed Metwoali',
          reply_to: formData.email,
        },
        PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', response)
      return true
    } catch (error) {
      console.error('EmailJS error:', error)
      return false
    }
  }

  // Mailto fallback option
  const openMailClient = () => {
    const body = `
Name: ${formData.name}
Email: ${formData.email}

${formData.message}
    `.trim()
    
    const mailtoLink = `mailto:ahmedmetwoali2@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    // Try EmailJS first
    const emailSent = await sendEmailJS()
    
    if (emailSent) {
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    } else {
      // If EmailJS fails, offer mailto as fallback
      setSubmitStatus('error')
    }
    
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-red-500 uppercase tracking-widest mb-4">04</p>
          <h2 className="text-5xl md:text-7xl font-black mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or looking for a senior engineer? 
            I&apos;m available for full-time roles and consulting opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-950 border border-zinc-800 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            {/* Info banner */}
            <div className="bg-zinc-900 border border-zinc-800 p-4 mb-6 text-sm text-gray-400">
              <AlertCircle className="inline mr-2 text-yellow-500" size={16} />
              This form uses secure email delivery. No data is stored.
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-gray-600" size={18} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      className="w-full bg-black border border-zinc-800 px-10 py-3 text-white focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 text-gray-600" size={18} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      maxLength={100}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      className="w-full bg-black border border-zinc-800 px-10 py-3 text-white focus:border-red-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  maxLength={200}
                  className="w-full bg-black border border-zinc-800 px-4 py-3 text-white focus:border-red-500 focus:outline-none transition-colors"
                  placeholder="What is this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message *</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-600" size={18} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={5000}
                    className="w-full bg-black border border-zinc-800 px-10 py-3 text-white focus:border-red-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                  <span className="absolute bottom-2 right-2 text-xs text-gray-600">
                    {formData.message.length}/5000
                  </span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`flex-1 py-4 font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2 
                    ${isSubmitting 
                      ? 'bg-gray-800 text-gray-400 cursor-not-allowed' 
                      : 'bg-red-500 hover:bg-red-600 text-white'}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
                
                {/* Fallback mailto button */}
                <button
                  type="button"
                  onClick={openMailClient}
                  className="px-6 py-4 border border-zinc-700 hover:border-white text-white font-semibold uppercase tracking-wider transition-colors"
                  title="Open in email client"
                >
                  <Mail size={18} />
                </button>
              </div>
              
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/50 text-green-400 p-4 rounded text-center"
                >
                  ✓ Message sent successfully! I&apos;ll get back to you within 24-48 hours.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded"
                >
                  <p className="mb-2">Unable to send through the form. Please try:</p>
                  <ul className="text-sm list-disc list-inside">
                    <li>Click the email icon button to use your email client</li>
                    <li>Or email directly: ahmedmetwoali2@gmail.com</li>
                  </ul>
                </motion.div>
              )}
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-400 mb-8">
                I&apos;m always interested in hearing about new opportunities, 
                especially those involving AI/ML, cloud architecture, or full-stack development. 
                Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>
            
            <div className="space-y-4">
              <a 
                href="mailto:ahmedmetwoali2@gmail.com"
                className="flex items-center gap-4 p-4 bg-zinc-950 border border-zinc-800 hover:border-red-500/50 transition-colors group"
              >
                <Mail className="text-red-500" size={24} />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-white group-hover:text-red-500 transition-colors">ahmedmetwoali2@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/ahmedmetwoali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-zinc-950 border border-zinc-800 hover:border-red-500/50 transition-colors group"
              >
                <Linkedin className="text-red-500" size={24} />
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <p className="text-white group-hover:text-red-500 transition-colors">linkedin.com/in/ahmedmetwoali</p>
                </div>
              </a>
              
              <a 
                href="https://github.com/Ahmedmetwoali"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-zinc-950 border border-zinc-800 hover:border-red-500/50 transition-colors group"
              >
                <Github className="text-red-500" size={24} />
                <div>
                  <p className="text-sm text-gray-500">GitHub</p>
                  <p className="text-white group-hover:text-red-500 transition-colors">github.com/Ahmedmetwoali</p>
                </div>
              </a>
            </div>
            
            <div className="p-6 bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30">
              <h4 className="text-xl font-bold mb-3">Available for Opportunities</h4>
              <p className="text-gray-400 text-sm mb-4">
                Currently seeking senior engineering roles and technical leadership positions.
                Open to both full-time and contract opportunities.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-3 py-1 bg-zinc-900 text-gray-400 border border-zinc-800">Senior Engineer</span>
                <span className="text-xs px-3 py-1 bg-zinc-900 text-gray-400 border border-zinc-800">Tech Lead</span>
                <span className="text-xs px-3 py-1 bg-zinc-900 text-gray-400 border border-zinc-800">Full-Stack</span>
                <span className="text-xs px-3 py-1 bg-zinc-900 text-gray-400 border border-zinc-800">AI/ML</span>
                <span className="text-xs px-3 py-1 bg-zinc-900 text-gray-400 border border-zinc-800">Remote</span>
              </div>
            </div>
            
            {/* Response time */}
            <div className="text-sm text-gray-500 border-l-2 border-zinc-800 pl-4">
              <p className="mb-1">💬 Typical response time: 24-48 hours</p>
              <p>📍 Based in Philadelphia, PA • Open to remote</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact