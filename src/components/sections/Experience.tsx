'use client'

import { motion } from 'framer-motion'
import { Timeline } from '../ui/Timeline'
import {
  Buildings,
  Code,
  TrendUp,
  Shield,
  Rocket,
  Desktop
} from 'phosphor-react'

const Experience = () => {
  const timelineData = [
    {
      title: "Sept 2025 - Present",
      content: (
        <div>
          <p className="text-text-primary text-xl md:text-2xl font-bold mb-4 flex items-center">
            <TrendUp className="mr-3 text-accent" size={28} />
            Junior Fullstack Developer - Tradeful
          </p>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Building advanced backtesting and trading strategy validation tools for algorithmic traders.
            Developing high-performance systems for real-time market data analysis.
          </p>
          <div className="mb-6">
            <h4 className="text-accent font-semibold mb-3 text-lg">Key Achievements:</h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Developed backtesting engine using React.js and Node.js, enabling traders to simulate strategies across 5+ years of historical market data with sub-500ms query response times
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Engineered trading strategy validation features that helped users identify profitable algorithms, contributing to a 35% increase in platform retention rates
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React.js', 'Node.js', 'TypeScript', 'MongoDB', 'WebSocket', 'Express.js'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "May 2025 - Sept 2025",
      content: (
        <div>
          <p className="text-text-primary text-xl md:text-2xl font-bold mb-4 flex items-center">
            <Buildings className="mr-3 text-accent" size={28} />
            Full Stack Developer Intern - ReInvest Wealth
          </p>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Enhanced fintech platform performance and developed innovative features for wealth management and accounting workflows.
            Integrated AI-powered solutions to streamline financial operations.
          </p>
          <div className="mb-6">
            <h4 className="text-accent font-semibold mb-3 text-lg">Key Achievements:</h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Upgraded React.js frontend, reducing component load times by 40% and improving application performance across 500+ users
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Developed multi-company access feature using React.js and Node.js, enabling shared accounting workflows that increased team-based platform usage by 25%
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Enhanced AI receipt processing feature using OpenAI computer vision to automatically scan receipts and match them to transactions, improving data accuracy by 35% and reducing manual entry time
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React.js', 'Node.js', 'OpenAI API', 'JavaScript', 'TypeScript'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "July 2023 - Sep 2024",
      content: (
        <div>
          <p className="text-text-primary text-xl md:text-2xl font-bold mb-4 flex items-center">
            <Desktop className="mr-3 text-accent" size={28} />
            IT Service Desk / IT Procurement - Parks Canada
          </p>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Gatineau, QC, Canada
          </p>
          <div className="mb-6">
            <h4 className="text-accent font-semibold mb-3 text-lg">Key Achievements:</h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Automated internal workflows using JavaScript and Jira's API, reducing IT ticket processing time by 40% and improving service desk response efficiency
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Built Excel dashboards with Lansweeper asset data to track and visualize over 1,200+ devices across multiple regions, improving procurement accuracy and saving an estimated 20+ staff hours per project cycle
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {['JavaScript', 'Jira API', 'Excel', 'Lansweeper', 'IT Automation'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Sep 2023 - Jul 2024",
      content: (
        <div>
          <p className="text-text-primary text-xl md:text-2xl font-bold mb-4 flex items-center">
            <Code className="mr-3 text-accent" size={28} />
            Lead Full Stack Developer - Fincnx
          </p>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Led development of finance-focused social media platform combining trading capabilities with social networking.
            Built prototypes for major financial institutions and implemented real-time portfolio tracking.
          </p>
          <div className="mb-6">
            <h4 className="text-accent font-semibold mb-3 text-lg">Key Achievements:</h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Led development of finance-focused social media platform using Django and React.js, achieving 1,500+ active users with 98% uptime
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Designed functional prototypes for Bank of Montreal, National Bank, and Investment Planning Council Canada, demonstrating algorithmic trading capabilities
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Implemented real-time portfolio tracking system with WebSocket connections and Redis caching, enabling live updates for 500+ concurrent users with sub-100ms latency
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Django', 'React.js', 'Python', 'WebSocket', 'Redis', 'PostgreSQL'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Apr 2023 - Present",
      content: (
        <div>
          <p className="text-text-primary text-xl md:text-2xl font-bold mb-4 flex items-center">
            <Rocket className="mr-3 text-accent" size={28} />
            Founder & Frontend Developer - WebFlux
          </p>
          <p className="text-text-secondary mb-6 text-lg leading-relaxed">
            Founded web development agency delivering custom applications to small businesses.
            Building high-converting web solutions for companies generating significant revenue.
          </p>
          <div className="mb-6">
            <h4 className="text-accent font-semibold mb-3 text-lg">Key Achievements:</h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Built high-converting homepage component using React.js and WordPress for One of One Funding, increasing user interaction by 17% for company generating $1M+ monthly revenue
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                Delivered custom web applications to 25+ small businesses using Next.js and modern JavaScript frameworks
              </li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React.js', 'Next.js', 'WordPress', 'JavaScript', 'TypeScript', 'Tailwind CSS'].map((tech) => (
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