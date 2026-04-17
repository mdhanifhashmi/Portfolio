'use client'

import { memo, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Optimized orbiting planets effect
const OrbitingProjects = memo(({ projectCount }: { projectCount: number }) => {
  const orbits = useMemo(
    () =>
      Array.from({ length: projectCount }, (_, i) => ({
        id: i,
        angle: (i / projectCount) * 360,
        radius: 120 + i * 30,
      })),
    [projectCount]
  )

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {orbits.map((orbit) => (
        <motion.div
          key={orbit.id}
          className="absolute border border-blue-500/20 rounded-full"
          style={{
            width: orbit.radius * 2,
            height: orbit.radius * 2,
            willChange: 'transform',
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60 + orbit.id * 10,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        >
          <div
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
            style={{
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 10px rgba(34, 197, 235, 0.8)',
            }}
          />
        </motion.div>
      ))}
    </div>
  )
})
OrbitingProjects.displayName = 'OrbitingProjects'

// Optimized cosmic dust particles
const CosmicDust = memo(() => {
  const particles = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 2,
      })),
    []
  )

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white rounded-full opacity-50"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            willChange: 'transform, opacity',
          }}
          animate={{
            y: [0, -250, -500],
            opacity: [0.3, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  )
})
CosmicDust.displayName = 'CosmicDust'

const projects = [
  {
    title: 'Enterprise Cloud Migration',
    description: 'Led the successful migration of a large-scale enterprise application to AWS, implementing microservices architecture and reducing operational costs by 40%.',
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Node.js'],
    role: 'Technical Lead',
    impact: 'Improved system reliability by 99.99% and reduced deployment time by 70%',
  },
  {
    title: 'AI-Powered Analytics Platform',
    description: 'Developed a real-time analytics platform using machine learning algorithms to process and analyze large datasets for business intelligence.',
    technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Redis'],
    role: 'Lead Developer',
    impact: 'Increased data processing speed by 5x and improved prediction accuracy by 35%',
  },
  {
    title: 'Financial Trading System',
    description: 'Architected and implemented a high-frequency trading system capable of processing millions of transactions per second with ultra-low latency.',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'Redis', 'PostgreSQL'],
    role: 'System Architect',
    impact: 'Achieved sub-millisecond latency and 99.999% uptime',
  },
  {
    title: 'Healthcare Management Platform',
    description: 'Built a comprehensive healthcare management system with real-time patient monitoring and secure data handling capabilities.',
    technologies: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'Docker'],
    role: 'Full Stack Lead',
    impact: 'Streamlined patient care workflow by 60% and reduced wait times by 45%',
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.03 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-700/50 backdrop-blur-sm rounded-full text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Role:</h4>
          <p className="text-gray-300 text-sm">{project.role}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Impact:</h4>
          <p className="text-gray-300 text-sm">{project.impact}</p>
        </div>
      </div>

      {isHovered && (
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-teal-400" />
      )}
    </motion.div>
  )
}

function ProjectsContent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Galaxy Background */}
      <OrbitingProjects projectCount={projects.length} />
      <CosmicDust />
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.12, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{ willChange: 'transform' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            A showcase of my most impactful projects, demonstrating technical excellence and business value delivery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Crafting sophisticated small to medium-scale web applications, dynamic features, captivating animations, and designing interactive layouts through advanced coding techniques.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default memo(ProjectsContent) 