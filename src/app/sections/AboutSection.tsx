'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useMemo, memo } from 'react'

// Galaxy star particles - OPTIMIZED: 50 → 20 stars, removed scale animation
const GalaxyStars = memo(() => {
  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 3 + 2,
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            willChange: 'opacity',
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      ))}
    </div>
  )
})
GalaxyStars.displayName = 'GalaxyStars'

// Orbiting particles around About Section - OPTIMIZED: 6 → 4 particles, removed scale animation
const OrbitingParticles = memo(() => {
  const particles = useMemo(
    () =>
      Array.from({ length: 4 }, (_, i) => ({
        id: i,
        angle: (i / 4) * 360,
        delay: i * 0.15,
      })),
    []
  )

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-500/50"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'loop',
            delay: particle.delay,
            ease: 'linear',
          }}
          style={{
            width: 200,
            height: 200,
            willChange: 'transform',
          }}
        >
          <div
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            style={{
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.6)',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
})
OrbitingParticles.displayName = 'OrbitingParticles'

// Cosmic Dust Effect - Rising particles - OPTIMIZED: 120 → 35 particles, removed scale animation
const CosmicDustAbout = memo(() => {
  const particles = useMemo(
    () =>
      Array.from({ length: 35 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 4,
        duration: Math.random() * 4 + 3,
        delay: Math.random() * 3,
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            y: [0, -150, -300],
            x: [0, (Math.random() - 0.5) * 50, 0],
            opacity: [0.5, 0.8, 0],
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
CosmicDustAbout.displayName = 'CosmicDustAbout'

// Center cyan sphere for visual depth
const CenterSphere = memo(() => (
  <motion.div
    className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 blur-2xl pointer-events-none"
    animate={{
      scale: [1, 1.15, 1],
      opacity: [0.4, 0.6, 0.4],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut',
    }}
    style={{
      willChange: 'transform, opacity',
    }}
  />
))
CenterSphere.displayName = 'CenterSphere'

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Galaxy Background */}
      <GalaxyStars />
      <OrbitingParticles />
      <CosmicDustAbout />
      <CenterSphere />

      {/* Gradient blobs */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{
          y: [0, 40, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative h-[400px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-8 backdrop-blur-sm">
            <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Journey</h3>
              <p className="text-gray-300 mb-6">
              Results-driven Software Developer and Full Stack Engineer with a strong foundation in backend development and REST API design. Passionate about building scalable solutions and exploring AI applications. Seeking a challenging role as a Full Stack Developer or Backend Engineer to deliver innovative, high-impact systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Full-Stack & Backend Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">RESTful API Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Enterprise System Design</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              About Me
            </h2>
            
            <div className="space-y-6 text-gray-300">
              <p>
                I am a passionate software engineer with proven experience in designing and developing robust applications. My expertise spans full-stack development, Rest API developer, and several frameworks.
              </p>
              
              <p>
              My approach combines being pumped for technical learning with a keen interest in strategic thinking, aiming to deliver solutions that meet current needs while being adaptable for future growth.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold text-lg mb-2 text-blue-400">Vision</h3>
                  <p className="text-sm text-gray-400">Driving innovation through technology, leadership, and impactful problem-solving</p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold text-lg mb-2 text-purple-400">Mission</h3>
                  <p className="text-sm text-gray-400">Building scalable, future-ready solutions that solve real-world challenges and create lasting value</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 