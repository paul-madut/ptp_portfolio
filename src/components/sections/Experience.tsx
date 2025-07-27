'use client'

import { motion } from 'framer-motion'
import { Timeline } from '../ui/Timeline'
import { 
  Buildings, 
  Code, 
  TrendUp, 
  Shield,
  Rocket
} from 'phosphor-react'

const Experience = () => {
  const timelineData = [
    {
      title: "2024 - Present",
      content: (
        <div>
          <p className="text-text-primary text-xl md:text-2xl font-bold mb-4 flex items-center">
            <Buildings className="mr-3 text-accent" size={28} />
            Senior Full-Stack Engineer - FinTech Innovations
          </p>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Leading the development of next-generation trading platforms and financial analytics tools.
            Architecting scalable microservices handling millions of transactions daily.
          </p>
          <div className="mb-6">
            <h4 className="text-accent font-semibold mb-3 text-lg">Key Achievements:</h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Built real-time trading platform handling 10M+ transactions/day with 99.99% uptime
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Reduced system latency by 75% through advanced caching and optimization
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Led team of 8 developers in migrating legacy systems to modern architecture
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'Redis', 'AWS', 'Docker'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2024",
      content: (
        <div>
          <p className="text-text-primary text-xl md:text-2xl font-bold mb-4 flex items-center">
            <Code className="mr-3 text-accent" size={28} />
            Full-Stack Developer - CryptoFlow Systems
          </p>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Developed secure cryptocurrency payment processing systems and blockchain integration solutions.
            Built DeFi protocols and smart contract interfaces for institutional clients.
          </p>
          <div className="mb-6">
            <h4 className="text-accent font-semibold mb-3 text-lg">Key Achievements:</h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Implemented multi-signature wallet system processing $50M+ in transactions
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Created fraud detection algorithms reducing false positives by 60%
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Developed cross-chain bridge supporting 15+ blockchain networks
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Python', 'Django', 'Solidity', 'Web3.js', 'PostgreSQL', 'MongoDB', 'Kubernetes'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2022",
      content: (
        <div>
          <p className="text-text-primary text-xl md:text-2xl font-bold mb-4 flex items-center">
            <TrendUp className="mr-3 text-accent" size={28} />
            Software Engineer - Investment Analytics Corp
          </p>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Built comprehensive investment tracking and portfolio management platforms.
            Developed algorithmic trading strategies and backtesting frameworks.
          </p>
          <div className="mb-6">
            <h4 className="text-accent font-semibold mb-3 text-lg">Key Achievements:</h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Created portfolio optimization engine managing $100M+ in assets
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Built real-time market data processing system with microsecond latency
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Developed ML models for risk assessment with 85% accuracy improvement
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React', 'Node.js', 'Python', 'TensorFlow', 'MySQL', 'Apache Kafka', 'Jenkins'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2019 - 2020",
      content: (
        <div>
          <p className="text-text-primary text-xl md:text-2xl font-bold mb-4 flex items-center">
            <Shield className="mr-3 text-accent" size={28} />
            Junior Developer - SecureBank Solutions
          </p>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Developed secure banking applications and payment processing systems.
            Worked on regulatory compliance tools and fraud prevention systems.
          </p>
          <div className="mb-6">
            <h4 className="text-accent font-semibold mb-3 text-lg">Key Achievements:</h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Implemented PCI DSS compliant payment processing system
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Built automated compliance reporting reducing manual work by 80%
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Developed secure API gateway handling 1M+ requests daily
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Java', 'Spring Boot', 'Angular', 'Oracle DB', 'REST APIs', 'Git', 'Maven'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "2018 - 2019",
      content: (
        <div>
          <p className="text-text-primary text-xl md:text-2xl font-bold mb-4 flex items-center">
            <Rocket className="mr-3 text-accent" size={28} />
            Software Development Intern - TechStart Ventures
          </p>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Started my journey in fintech working on startup projects and learning modern development practices.
            Contributed to early-stage products and gained experience in agile development.
          </p>
          <div className="mb-6">
            <h4 className="text-accent font-semibold mb-3 text-lg">Key Achievements:</h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Built MVP for fintech startup that secured $2M in Series A funding
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Implemented automated testing pipeline increasing code coverage to 95%
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Learned modern JavaScript frameworks and cloud deployment practices
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'React', 'Node.js', 'MongoDB', 'Express.js', 'AWS', 'Jest'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
            Professional Experience
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            My journey through the fintech industry, building scalable solutions and leading innovative projects
          </p>
        </motion.div>

        <Timeline data={timelineData} />
      </div>
    </section>
  )
}

export default Experience