'use client'

import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { 
  Globe, 
  Database, 
  Lightning, 
  Shield,
  Code,
  Rocket,
  Gear,
  ChartLine
} from 'phosphor-react'

const Skills = () => {
  const skills = [
    {
      icon: <Code size={40} />,
      title: 'Frontend Development',
      description: 'React, Next.js, TypeScript, Tailwind CSS',
      color: 'text-blue-400'
    },
    {
      icon: <Database size={40} />,
      title: 'Backend Development',
      description: 'Node.js, Python, Django, PostgreSQL, MongoDB',
      color: 'text-green-400'
    },
    {
      icon: <Globe size={40} />,
      title: 'API Development',
      description: 'REST APIs, GraphQL, WebSockets, Microservices',
      color: 'text-purple-400'
    },
    {
      icon: <Shield size={40} />,
      title: 'Security & Auth',
      description: 'JWT, OAuth, Encryption, Secure Coding Practices',
      color: 'text-red-400'
    },
    {
      icon: <Lightning size={40} />,
      title: 'Performance',
      description: 'Optimization, Caching, CDN, Load Balancing',
      color: 'text-yellow-400'
    },
    {
      icon: <Gear size={40} />,
      title: 'DevOps & Cloud',
      description: 'AWS, Docker, CI/CD, Kubernetes, Terraform',
      color: 'text-cyan-400'
    },
    {
      icon: <ChartLine size={40} />,
      title: 'Fintech Expertise',
      description: 'Trading Systems, Payment Processing, Risk Management',
      color: 'text-orange-400'
    },
    {
      icon: <Rocket size={40} />,
      title: 'Scalability',
      description: 'Microservices, Event-Driven Architecture, CQRS',
      color: 'text-pink-400'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Core Skills & Technologies
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Expertise in modern web technologies and fintech solutions
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full text-center hover:border-accent/50 transition-colors duration-300">
                  <div className={`${skill.color} mb-4 flex justify-center`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    {skill.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills