'use client'

import { motion } from 'framer-motion'
import { GithubLogo, LinkedinLogo, Heart } from 'phosphor-react'

const Footer = () => {
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: <GithubLogo size={24} />,
      href: 'https://github.com/paul-madut',
      label: 'GitHub'
    },
    {
      icon: <LinkedinLogo size={24} />,
      href: 'https://linkedin.com/in/paulmadut',
      label: 'LinkedIn'
    }
  ]

  return (
    <footer className="bg-dark-bg/50 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">Paul Madut</h3>
            <p className="text-text-secondary leading-relaxed">
              Full-Stack Software Engineer specializing in scalable fintech solutions 
              and modern web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="glass p-2 rounded-lg text-text-secondary hover:text-accent transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-text-primary">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item, index) => (
                <li key={index}>
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className="text-text-secondary hover:text-text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-text-primary">Get in Touch</h4>
            <div className="space-y-2">
              <p className="text-text-secondary">
                <a 
                  href="mailto:paul@paulmadut.com"
                  className="hover:text-accent transition-colors duration-200"
                >
                  paul@paulmadut.com
                </a>
              </p>
              <p className="text-text-secondary">Canada, ON</p>
              <div className="flex items-center space-x-2 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Available for new projects</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-white/10 pt-8 mt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-muted text-sm text-center md:text-left">
              © {new Date().getFullYear()} Paul Madut. All rights reserved.
            </p>
            <p className="text-text-muted text-sm flex items-center">
              Built using Next.js & TypeScript
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer