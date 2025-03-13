'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
      { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
      { name: 'Next.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg' },
      { name: 'Vue.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg' },
      { name: 'Angular', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg' },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
      { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
      { name: 'C#', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg' },
      { name: 'Go', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg' },
      { name: 'FastAPI', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
      { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Jenkins', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg' },
      { name: 'Terraform', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg' },
    ],
  },
  {
    name: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
      { name: 'Redis', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg' },
      { name: 'Elasticsearch', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/elasticsearch/elasticsearch-original.svg' },
      { name: 'DynamoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/dynamodb/dynamodb-original.svg' },
    ],
  },
]

function SkillCard({ skill, index, isVisible }: { skill: { name: string; icon: string }; index: number; isVisible: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      className="flex flex-col items-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mx-3 min-w-[140px] 
                 transform hover:bg-gray-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
    >
      <div className="w-16 h-16 mb-4 relative group">
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
        />
      </div>
      <span className="text-sm font-medium text-gray-300 text-center">{skill.name}</span>
    </motion.div>
  )
}

function SkillCategory({ category, isVisible }: { category: typeof skillCategories[0]; isVisible: boolean }) {
  return (
    <div className="mb-12">
      <h3 className="text-xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
        {category.name}
      </h3>
      <div className="overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex space-x-4 animate-scroll">
          {category.skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              isVisible={isVisible}
            />
          ))}
          {/* Duplicate the skills to create an infinite loop effect */}
          {category.skills.map((skill, index) => (
            <SkillCard
              key={`${skill.name}-duplicate`}
              skill={skill}
              index={index + category.skills.length}
              isVisible={isVisible}
            />
          ))}
        </div>
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
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
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
            A showcase of the technologies and tools I work with to build modern, scalable solutions.
          </p>
        </motion.div>

        <div>
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
      </div>
    </section>
  )
}
