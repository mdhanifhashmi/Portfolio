'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Vue.js', level: 80 },
      { name: 'Angular', level: 75 },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Java', level: 80 },
      { name: 'C#', level: 75 },
      { name: 'Go', level: 70 },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', level: 90 },
      { name: 'Docker', level: 85 },
      { name: 'Kubernetes', level: 80 },
      { name: 'CI/CD', level: 85 },
      { name: 'Terraform', level: 75 },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'Elasticsearch', level: 75 },
      { name: 'DynamoDB', level: 70 },
    ],
  },
]

function SkillBar({ name, level, index, isVisible }: { name: string; level: number; index: number; isVisible: boolean }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-teal-400 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: isVisible ? `${level}%` : 0 }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </div>
  )
}

function SkillCategory({ category, isVisible }: { category: typeof skillCategories[0]; isVisible: boolean }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
        {category.name}
      </h3>
      <div>
        {category.skills.map((skill, index) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            index={index}
            isVisible={isVisible}
          />
        ))}
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Technical Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels across various domains of software development and architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <SkillCategory category={category} isVisible={inView} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Additionally, I have extensive experience in system design, microservices architecture, and leading technical teams through complex projects.
          </p>
        </motion.div>
      </div>
    </section>
  )
} 