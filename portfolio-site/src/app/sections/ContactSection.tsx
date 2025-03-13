'use client'

import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaGlobe } from 'react-icons/fa'

const contactInfo = {
  email: 'mdhanifhashmi@gmail.com',
  phone: '+91-8619276031',
  github: 'https://github.com/mdhanifhashmi',
  linkedin: 'https://linkedin.com/in/hanif-mohammad-2020',
  website: 'https://www.hackerrank.com/profile/mdhanifhashmi'
}

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
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
                <FaEnvelope className="text-blue-500" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-500 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-500" />
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
                <FaGithub className="text-blue-500" />
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  GitHub
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaLinkedin className="text-blue-500" />
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaGlobe className="text-blue-500" />
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