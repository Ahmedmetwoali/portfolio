'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Code, Shield } from 'lucide-react'

const Impact = () => {
  const metrics = [
    {
      icon: <Shield className="text-red-500" />,
      label: "Security Clearance",
      value: "DoD Secret",
      status: "ACTIVE",
      color: "text-green-400"
    },
    {
      icon: <TrendingUp className="text-red-500" />,
      label: "Cost Savings",
      value: "$5M+",
      status: "VERIFIED",
      color: "text-green-400"
    },
    {
      icon: <Users className="text-red-500" />,
      label: "Sites Served",
      value: "200+",
      status: "NATIONWIDE",
      color: "text-blue-400"
    },
    {
      icon: <Code className="text-red-500" />,
      label: "Production Systems",
      value: "15+",
      status: "DEPLOYED",
      color: "text-green-400"
    }
  ]

  return (
    <section className="py-20 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black border border-zinc-800 p-6 hover:border-red-500/50 transition-colors"
            >
              <div className="mb-4">{metric.icon}</div>
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="text-gray-400 text-sm mb-2">{metric.label}</div>
              <div className={`text-xs font-mono ${metric.color}`}>
                ● {metric.status}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact