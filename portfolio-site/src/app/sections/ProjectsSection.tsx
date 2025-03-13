'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies Used:</h4>
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
          <p className="text-gray-300">{project.role}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-2">Impact:</h4>
          <p className="text-gray-300">{project.impact}</p>
        </div>
      </div>

      <motion.div
        className="h-1 bg-gradient-to-r from-blue-500 to-teal-400"
        initial={{ width: '0%' }}
        animate={{ width: isHovered ? '100%' : '0%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
          Crafting sophisticated small to medium-scale web applications, dynamic features, captivating animations, and designing interactive layouts through advanced coding techniques.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 