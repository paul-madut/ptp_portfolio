'use client'

import { motion } from 'framer-motion'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { ArrowSquareOut, GithubLogo } from 'phosphor-react'

const Projects = () => {
  const projects = [
    {
      title: 'FinTrader Pro',
      description: 'Real-time trading platform with advanced analytics, portfolio management, and risk assessment tools.',
      image: '/projects/fintrader.jpg',
      tech: ['React', 'Node.js', 'WebSocket', 'PostgreSQL', 'Redis'],
      liveUrl: 'https://fintrader-demo.com',
      githubUrl: 'https://github.com/paulmadut/fintrader-pro',
      featured: true
    },
    {
      title: 'CryptoPayments API',
      description: 'Secure cryptocurrency payment processing system with multi-wallet support and fraud detection.',
      image: '/projects/cryptopay.jpg',
      tech: ['Python', 'Django', 'Blockchain', 'AWS', 'Docker'],
      liveUrl: 'https://cryptopay-api.com',
      githubUrl: 'https://github.com/paulmadut/crypto-payments',
      featured: true
    },
    {
      title: 'Investment Dashboard',
      description: 'Comprehensive investment tracking application with real-time market data and portfolio analytics.',
      image: '/projects/investment.jpg',
      tech: ['Next.js', 'TypeScript', 'Chart.js', 'TailwindCSS'],
      liveUrl: 'https://investment-dash.com',
      githubUrl: 'https://github.com/paulmadut/investment-dashboard',
      featured: true
    },
    {
      title: 'Smart Banking App',
      description: 'Mobile-first banking application with AI-powered financial insights and budgeting tools.',
      image: '/projects/banking.jpg',
      tech: ['React Native', 'Express.js', 'MongoDB', 'TensorFlow'],
      liveUrl: 'https://smart-banking.com',
      githubUrl: 'https://github.com/paulmadut/smart-banking',
      featured: false
    },
    {
      title: 'Risk Management System',
      description: 'Enterprise-grade risk assessment and management platform for financial institutions.',
      image: '/projects/risk.jpg',
      tech: ['Vue.js', 'Python', 'FastAPI', 'PostgreSQL', 'Kubernetes'],
      liveUrl: 'https://risk-mgmt.com',
      githubUrl: 'https://github.com/paulmadut/risk-management',
      featured: false
    },
    {
      title: 'Trading Bot Framework',
      description: 'Algorithmic trading framework with backtesting capabilities and multiple exchange support.',
      image: '/projects/tradingbot.jpg',
      tech: ['Python', 'FastAPI', 'Redis', 'Docker', 'Machine Learning'],
      liveUrl: 'https://trading-bot.com',
      githubUrl: 'https://github.com/paulmadut/trading-bot',
      featured: false
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Showcasing innovative solutions in fintech, trading, and web applications
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full flex flex-col group">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg mb-6 bg-gradient-to-br from-accent/20 to-purple-500/20 h-48">
                    <div className="absolute inset-0 flex items-center justify-center text-text-muted">
                      <div className="text-center">
                        <div className="w-16 h-16 glass rounded-lg flex items-center justify-center mx-auto mb-2">
                          <ArrowSquareOut size={24} />
                        </div>
                        <p className="text-sm">Project Preview</p>
                      </div>
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-accent px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary mb-4 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-accent/20 text-accent text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3">
                      <Button
                        variant="primary"
                        size="sm"
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <ArrowSquareOut className="mr-2" size={16} />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubLogo size={16} />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              size="lg"
              href="https://github.com/paulmadut"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubLogo className="mr-2" size={20} />
              View All Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects