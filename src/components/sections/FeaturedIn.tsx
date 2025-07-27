'use client'

import { motion } from 'framer-motion'

const FeaturedIn = () => {
  const publications = [
    { name: 'TechCrunch', logo: '/logos/techcrunch.svg' },
    { name: 'Forbes', logo: '/logos/forbes.svg' },
    { name: 'Wired', logo: '/logos/wired.svg' },
    { name: 'Fast Company', logo: '/logos/fastcompany.svg' },
    { name: 'VentureBeat', logo: '/logos/venturebeat.svg' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section className="py-20 bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-lg text-text-muted mb-12 font-medium"
          >
            Featured In
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 opacity-60"
          >
            {publications.map((pub) => (
              <motion.div
                key={pub.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="flex items-center justify-center h-12"
              >
                <div className="text-2xl font-bold text-text-secondary">
                  {pub.name}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedIn