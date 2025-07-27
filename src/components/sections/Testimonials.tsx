'use client'

import { motion } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import Card from '../ui/Card'
import { Star, ArrowLeft, ArrowRight } from 'phosphor-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      quote: "Paul delivered an exceptional trading platform that exceeded all our expectations. His attention to detail and deep understanding of fintech requirements made all the difference.",
      author: "Sarah Chen",
      company: "FinTech Innovations",
      role: "CTO",
      outcome: "Reduced deployment time by 40%",
      rating: 5
    },
    {
      quote: "Working with Paul was a game-changer for our startup. He built a scalable payment processing system that handles millions of transactions seamlessly.",
      author: "Marcus Rodriguez",
      company: "PayFlow Systems",
      role: "Founder & CEO",
      outcome: "Processing 2M+ transactions monthly",
      rating: 5
    },
    {
      quote: "Paul's expertise in both frontend and backend development allowed us to build a complete fintech solution in record time. His code quality is outstanding.",
      author: "Lisa Thompson",
      company: "Investment Analytics Corp",
      role: "Product Manager",
      outcome: "Launched 3 months ahead of schedule",
      rating: 5
    },
    {
      quote: "The risk management dashboard Paul built for us has become the cornerstone of our operations. His understanding of complex financial systems is remarkable.",
      author: "David Kim",
      company: "Risk Solutions Ltd",
      role: "Head of Technology",
      outcome: "Improved risk detection by 60%",
      rating: 5
    },
    {
      quote: "Paul's work on our algorithmic trading platform has generated significant returns. His ability to optimize performance while maintaining security is impressive.",
      author: "Elena Vasquez",
      company: "Quantum Trading",
      role: "Senior Developer",
      outcome: "Achieved 99.9% uptime",
      rating: 5
    }
  ]

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [testimonials.length])

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 6000)
    return () => clearInterval(interval)
  }, [nextTestimonial])

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
              Client Testimonials
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              What clients say about working with me
            </p>
          </motion.div>

          <div className="relative">
            {/* Main Testimonial */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={24} />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-text-primary mb-8 leading-relaxed italic">
                  &ldquo;{testimonials[currentIndex].quote}&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="mb-6">
                  <p className="text-lg font-semibold text-text-primary">
                    {testimonials[currentIndex].author}
                  </p>
                  <p className="text-text-secondary">
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </p>
                </div>

                {/* Outcome */}
                <div className="inline-flex items-center glass px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-sm text-text-secondary">
                    {testimonials[currentIndex].outcome}
                  </span>
                </div>
              </Card>
            </motion.div>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="glass p-3 rounded-full text-text-secondary hover:text-accent transition-colors duration-200"
              >
                <ArrowLeft size={20} />
              </motion.button>

              {/* Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === currentIndex ? 'bg-accent' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="glass p-3 rounded-full text-text-secondary hover:text-accent transition-colors duration-200"
              >
                <ArrowRight size={20} />
              </motion.button>
            </div>

            {/* Thumbnail Carousel */}
            <div className="flex justify-center mt-8 space-x-4 overflow-x-auto custom-scrollbar">
              {testimonials.map((testimonial, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 p-4 rounded-lg border transition-all duration-200 ${
                    index === currentIndex
                      ? 'border-accent bg-accent/10'
                      : 'border-white/10 bg-white/5 hover:border-accent/50'
                  }`}
                >
                  <div className="text-left min-w-[200px]">
                    <p className="text-sm font-medium text-text-primary">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-text-secondary">
                      {testimonial.company}
                    </p>
                    <p className="text-xs text-accent mt-1">
                      {testimonial.outcome}
                    </p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials