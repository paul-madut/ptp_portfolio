'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Card from '../ui/Card'
import Button from '../ui/Button'
import { 
  Envelope, 
  Phone, 
  MapPin, 
  GithubLogo, 
  LinkedinLogo,
  TwitterLogo
} from 'phosphor-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Envelope size={24} />,
      title: 'Email',
      value: 'paul@paulmadut.com',
      href: 'mailto:paul@paulmadut.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <GithubLogo size={24} />,
      label: 'GitHub',
      href: 'https://github.com/paulmadut'
    },
    {
      icon: <LinkedinLogo size={24} />,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/paulmadut'
    },
    {
      icon: <TwitterLogo size={24} />,
      label: 'Twitter',
      href: 'https://twitter.com/paulmadut'
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
    <section id="contact" className="py-20 bg-dark-bg/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Ready to bring your fintech vision to life? Let&apos;s discuss how we can build something amazing together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card>
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-text-secondary mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-text-primary placeholder-text-muted"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-text-secondary mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-text-primary placeholder-text-muted"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-text-secondary mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-text-primary placeholder-text-muted"
                      placeholder="Project discussion"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-text-secondary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 glass rounded-lg focus:ring-2 focus:ring-accent focus:outline-none text-text-primary placeholder-text-muted resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Details */}
              <Card>
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200"
                    >
                      <div className="text-accent">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-text-muted text-sm">{info.title}</p>
                        <p className="text-text-primary">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card>
                <h3 className="text-2xl font-bold text-text-primary mb-6">
                  Follow Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="glass p-3 rounded-lg text-text-secondary hover:text-accent transition-colors duration-200"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </Card>

              {/* Availability */}
              <Card>
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  Availability
                </h3>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-text-primary">Available for new projects</span>
                </div>
                <p className="text-text-secondary text-sm">
                  I&apos;m currently taking on new fintech and web development projects. 
                  Let&apos;s discuss your requirements and timeline.
                </p>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact