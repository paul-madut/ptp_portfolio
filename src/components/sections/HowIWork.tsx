'use client'

import { motion } from 'framer-motion'
import Card from '../ui/Card'
import { Eye, Stack, Rocket } from 'phosphor-react'

const HowIWork = () => {
  const steps = [
    {
      icon: <Eye size={48} />,
      title: 'Understand Your Vision',
      description: 'I start by deeply understanding your business goals, user needs, and technical requirements to create a clear roadmap.',
      features: ['Business Analysis', 'User Research', 'Technical Planning', 'Risk Assessment']
    },
    {
      icon: <Stack size={48} />,
      title: 'Build Your Stack',
      description: 'Using modern technologies and best practices, I architect and develop scalable solutions tailored to your specific needs.',
      features: ['Modern Architecture', 'Scalable Design', 'Security First', 'Performance Optimized']
    },
    {
      icon: <Rocket size={48} />,
      title: 'Deploy and Iterate',
      description: 'I ensure smooth deployment with continuous monitoring, optimization, and iterative improvements based on real-world feedback.',
      features: ['CI/CD Pipeline', 'Monitoring Setup', 'Performance Tuning', 'Ongoing Support']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <section className="py-20 bg-dark-bg/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              How I Work
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A proven process that delivers exceptional results for fintech and web applications
            </p>
          </motion.div>

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                transition={{ duration: 0.8 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <Card className="h-full">
                    <div className="flex items-start space-x-4">
                      <div className="text-accent flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-text-primary mb-4">
                          {step.title}
                        </h3>
                        <p className="text-text-secondary mb-6 leading-relaxed">
                          {step.description}
                        </p>
                        <ul className="space-y-2">
                          {step.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-text-secondary"
                            >
                              <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="flex-shrink-0">
                  <div className="w-16 h-16 glass rounded-full flex items-center justify-center text-2xl font-bold text-accent">
                    {index + 1}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowIWork