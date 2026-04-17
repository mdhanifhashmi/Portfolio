'use client'

import { memo, useMemo } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

// Animated Background Gradient
const AnimatedBg = memo(() => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Main gradient blobs - simplified and optimized */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute top-1/2 -right-32 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
        animate={{
          y: [0, -50, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{ willChange: 'transform' }}
      />
      <motion.div
        className="absolute -bottom-32 left-1/3 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.15, 1],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{ willChange: 'transform' }}
      />
    </div>
  )
})
AnimatedBg.displayName = 'AnimatedBg'

// Optimized Floating Particles
const FloatingParticles = memo(() => {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 4 + 4,
        delay: Math.random() * 2,
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            boxShadow: `0 0 ${p.size * 3}px rgba(59, 130, 246, 0.6)`,
            willChange: 'opacity',
          }}
          animate={{
            opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}
    </div>
  )
})
FloatingParticles.displayName = 'FloatingParticles'

// Optimized Hero Galaxy Stars
const HeroGalaxyStars = memo(() => {
  const stars = useMemo(
    () =>
      Array.from({ length: 30 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
            willChange: 'opacity',
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: star.delay,
          }}
        />
      ))}
    </div>
  )
})
HeroGalaxyStars.displayName = 'HeroGalaxyStars'

// Optimized Cosmic Dust Effect
const CosmicDustHero = memo(() => {
  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 3,
        duration: Math.random() * 5 + 4,
        delay: Math.random() * 3,
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: `radial-gradient(circle, rgba(200, 200, 255, 0.8), rgba(100, 150, 255, 0))`,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -200, -400],
            opacity: [0.4, 0.7, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  )
})
CosmicDustHero.displayName = 'CosmicDustHero'

// Simplified Meteors
const Meteors = memo(() => {
  const meteors = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => ({
        id: i,
        startX: Math.random() * 100,
        startY: Math.random() * 40,
        delay: i * 4,
        size: Math.random() * 0.6 + 0.4,
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          className="absolute bg-gradient-to-r from-yellow-200 to-transparent rounded-full"
          style={{
            width: meteor.size,
            height: meteor.size * 4,
            left: `${meteor.startX}%`,
            top: `${meteor.startY}%`,
            boxShadow: `0 0 ${meteor.size * 4}px rgba(255, 200, 0, 0.6)`,
            willChange: 'transform, opacity',
          }}
          animate={{
            x: [0, 150],
            y: [0, 350],
            opacity: [0.8, 0.2, 0],
          }}
          transition={{
            duration: 4,
            delay: meteor.delay,
            repeat: Infinity,
            repeatDelay: 8,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  )
})
Meteors.displayName = 'Meteors'

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Background Animations */}
      <AnimatedBg />
      <HeroGalaxyStars />
      <CosmicDustHero />
      <FloatingParticles />
      <Meteors />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
          >
            Hanif Mohammad
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8"
          >
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'Full Stack Developer',
                2000,
                'Ai Enthusiast',
                2000,
                'Backend Engineer',
                2000,
                'Rest API Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Driven by a passion for transforming complex problems into clean, scalable solutions, I bring hands-on software engineering experience and a proven ability to deliver high-impact results. I thrive in collaborative environments, working alongside talented teams to build innovative systems that solve real-world challenges while continuously advancing my expertise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100"
                initial={false}
              />
            </motion.a>
            <motion.a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(20, 184, 166, 0.5)',
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10">View CV</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-teal-500 to-gray-700 opacity-0 group-hover:opacity-100"
                initial={false}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-gray-400"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  )
} 