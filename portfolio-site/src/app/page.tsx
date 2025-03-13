'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Dynamically import heavy components
const Navigation = dynamic(() => import('./components/Navigation'), { ssr: false })
const HeroSection = dynamic(() => import('./sections/HeroSection'), { ssr: false })
const AboutSection = dynamic(() => import('./sections/AboutSection'), { ssr: false })
const SkillsSection = dynamic(() => import('./sections/SkillsSection'), { ssr: false })
const ProjectsSection = dynamic(() => import('./sections/ProjectsSection'), { ssr: false })
const ContactSection = dynamic(() => import('./sections/ContactSection'), { ssr: false })

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="relative min-h-screen">
      <div className="relative z-10">
        <Navigation />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </motion.div>
      </div>
    </main>
  )
}
