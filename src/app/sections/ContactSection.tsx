'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa'
import { useEffect, useRef } from 'react'

// Floating galaxy stars and particles
const FloatingStars = () => {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    duration: Math.random() * 5 + 3,
    delay: Math.random() * 3,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.5, 1, 0.5],
            y: [0, -50, 0],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
          }}
        />
      ))}
    </div>
  )
}

// Canvas-based Black Hole Particle System
const CanvasBlackHole = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Particle class
    class Particle {
      angle: number
      radius: number
      opacity: number
      distance: number
      speed: number
      x: number
      y: number

      constructor(x: number, y: number, distance: number) {
        this.angle = Math.random() * 2 * Math.PI
        this.radius = Math.random() * 1.5
        this.opacity = (Math.random() * 5 + 2) / 10
        this.distance = (1 / this.opacity) * distance
        this.speed = this.distance * 0.00003
        this.x = x
        this.y = y
      }

      draw() {
        const x = this.x + this.distance * Math.cos(this.angle)
        const y = this.y + this.distance * Math.sin(this.angle)
        
        ctx!.fillStyle = `rgba(59, 130, 246, ${this.opacity})`
        ctx!.beginPath()
        ctx!.arc(x, y, this.radius, 0, Math.PI * 2)
        ctx!.fill()
      }

      update() {
        this.angle += this.speed
        this.draw()
      }
    }

    // Emitter class
    class Emitter {
      x: number
      y: number
      radius: number
      particles: Particle[]

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.radius = 40
        this.particles = []

        for (let i = 0; i < 2000; i++) {
          this.particles.push(new Particle(this.x, this.y, this.radius))
        }
      }

      draw() {
        ctx!.fillStyle = 'rgba(0, 0, 0, 0.95)'
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx!.fill()

        // Glow around black hole
        ctx!.strokeStyle = 'rgba(59, 130, 246, 0.3)'
        ctx!.lineWidth = 3
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.radius + 5, 0, Math.PI * 2)
        ctx!.stroke()
      }

      update() {
        for (let i = 0; i < this.particles.length; i++) {
          this.particles[i].update()
        }
        this.draw()
      }
    }

    const emitter = new Emitter(canvas.width / 2, canvas.height / 2)

    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height)
      emitter.update()
      requestAnimationFrame(animate)
    }

    animate()

    // Handle window resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  )
}

const contactInfo = {
  email: 'mdhanifhashmi@gmail.com',
  phone: '+91-8619276031',
  github: 'https://github.com/mdhanifhashmi',
  linkedin: 'https://linkedin.com/in/hanif-mohammad-2020',
  website: 'https://www.hackerrank.com/profile/mdhanifhashmi'
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Galaxy background */}
      <FloatingStars />
      <CanvasBlackHole />

      {/* Glowing gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I am always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope color="#3B82F6" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-500 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone color="#3B82F6" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-500 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4">Social Links</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaGithub color="#3B82F6" />
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  GitHub
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaLinkedin color="#3B82F6" />
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaGlobe color="#3B82F6" />
                <a href={contactInfo.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  Portfolio Website
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 