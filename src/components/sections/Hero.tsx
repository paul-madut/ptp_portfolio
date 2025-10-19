'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Button from '../ui/Button'
import { ArrowDown, Code, Rocket } from 'phosphor-react'

const Hero = () => {
  const [is3DLoaded, setIs3DLoaded] = useState(false)
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Loading fallback */}
        {!is3DLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-purple-500/10 to-accent/5 animate-pulse"></div>
        )}
        
        <iframe 
          src='https://my.spline.design/customlinepathwithcustommatcap-nx1qSZHZhvPVy7UBMqOmzCYZ/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className={`hero-3d-bg opacity-40 pointer-events-none transition-opacity duration-1000 ${
            is3DLoaded ? 'opacity-40' : 'opacity-0'
          }`}
          style={{
            filter: 'brightness(0.7) contrast(1.2) saturate(1.1)',
            transform: 'scale(1.1)',
          }}
          onLoad={() => setIs3DLoaded(true)}
          loading="lazy"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none"></div>
      
      {/* Additional Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center glass px-4 py-2 mt-14 rounded-full text-sm text-text-secondary"
          >
            <Code className="mr-2" size={16} />
            Full-Stack Software Engineer
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            <span className="gradient-text">Paul Madut</span>
            <br />
            <span className="text-text-primary">Full-Stack Dev</span> 
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto leading-relaxed"
          >
            Building sleek, scalable applications for modern finance.
            <br />
            Specializing in fintech and trading platforms.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <Button size="lg" href="#contact">
              <Rocket className="mr-2" size={20} />
              Work With Me
            </Button>
            <Button variant="outline" size="lg" href="#projects">
              View Projects
            </Button>
          </motion.div>

          {/* UI Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 relative"
          >
            <div className="glass rounded-xl p-6 max-w-2xl mx-auto">
              <div className="bg-dark-bg/50 rounded-lg p-4 text-left">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-2 text-sm font-mono">
                  <div className="text-accent">const</div>
                  <div className="text-text-secondary ml-4">paulMadut = {`{`}</div>
                  <div className="text-text-secondary ml-8">skills: [&apos;React&apos;, &apos;Node.js&apos;, &apos;Python&apos;, &apos;Django&apos;],</div>
                  <div className="text-text-secondary ml-8">experience: &apos;5+ years&apos;,</div>
                  <div className="text-text-secondary ml-8">passion: &apos;Building scalable fintech solutions&apos;</div>
                  <div className="text-text-secondary ml-4">{`}`};</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-text-muted"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero