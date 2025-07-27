'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  target,
  rel,
  type = 'button'
}: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-lg cursor-pointer'
  
  const variants = {
    primary: 'neumorphic text-white hover:shadow-neon hover:scale-105',
    secondary: 'glass text-text-primary hover:bg-white/10',
    outline: 'border border-accent text-accent hover:bg-accent hover:text-white'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  const MotionComponent = motion.div
  
  if (href) {
    return (
      <MotionComponent
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={combinedClasses}
      >
        <a href={href} target={target} rel={rel} className="w-full h-full flex items-center justify-center">
          {children}
        </a>
      </MotionComponent>
    )
  }
  
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={combinedClasses}
    >
      {children}
    </motion.button>
  )
}

export default Button