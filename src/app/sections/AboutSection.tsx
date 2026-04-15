'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Galaxy star particles
const GalaxyStars = () => {
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
  }))

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
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
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
}

// Orbiting particles around About Section
const OrbitingParticles = () => {
  const particles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    angle: (i / 6) * 360,
    delay: i * 0.15,
  }))

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-500/50"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'loop',
            delay: particle.delay,
          }}
          style={{
            width: 200,
            height: 200,
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
}

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
              Hyped about technology and innovation, seeking a role as a software engineer where I can apply my skills and knowledge to create cutting-edge solutions that solve real-world problems.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Technical Leadership & Team Management</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Enterprise Architecture Design</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-300">Cloud Infrastructure & DevOps</span>
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
                My journey is just beginning, and I am excited to apply my foundational skills in software development to contribute to innovative projects. I am interested in exploring full-stack development, cloud architecture, and other emerging technologies.
              </p>
              
              <p>
              My approach combines being pumped for technical learning with a keen interest in strategic thinking, aiming to deliver solutions that meet current needs while being adaptable for future growth.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold text-lg mb-2 text-blue-400">Vision</h3>
                  <p className="text-sm text-gray-400">Driving innovation through technology and leadership</p>
                </div>
                
                <div className="bg-gray-800/50 p-4 rounded-lg backdrop-blur-sm">
                  <h3 className="font-semibold text-lg mb-2 text-purple-400">Mission</h3>
                  <p className="text-sm text-gray-400">Building scalable solutions for tomorrow&apos;s challenges</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 