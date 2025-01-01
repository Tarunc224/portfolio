'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Suspense, useState } from 'react'
import { Button } from '@/components/ui/button'
import ChatBot from '@/components/ChatBot'
import CustomCursor from '@/components/CustomCursor'
import { Education } from '@/components/resume/Education'
import { Experience } from '@/components/resume/Experience'
import { Projects } from '@/components/resume/Projects'
import { Skills } from '@/components/resume/Skills'
import { KnowMoreButton } from '@/components/KnowMoreButton'
import DNATransition from '@/components/DNATransition'
import { motion, AnimatePresence } from 'framer-motion'
import { Linkedin } from 'lucide-react'

const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground'), { ssr: false })

type Section = 'about' | 'education' | 'experience' | 'projects' | 'skills' | 'chat'

export default function Page() {
  const [activeSection, setActiveSection] = useState<Section>('about')
  const [showDNA, setShowDNA] = useState(false)

  const handleSectionChange = (section: Section) => {
    if (section === 'chat') {
      setShowDNA(true)
    } else {
      setActiveSection(section)
    }
  }

  const handleDNAComplete = () => {
    setShowDNA(false)
    setActiveSection('chat')
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'education':
        return <Education />
      case 'experience':
        return <Experience />
      case 'projects':
        return <Projects />
      case 'skills':
        return <Skills />
      case 'chat':
        return <ChatBot />
      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-center"
          >
            <h1 className="text-5xl font-bold text-white">Tarun Chintada</h1>
            <p className="text-2xl text-purple-300">ML Research Intern & Full Stack Developer</p>
            <div className="flex justify-center gap-4">
              <a href="mailto:tarunchintada2004@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                tarunchintada2004@gmail.com
              </a>
              <a href="tel:+918688447873" className="text-purple-400 hover:text-purple-300 transition-colors">
                +91-8688447873
              </a>
            </div>
            <motion.a
              href="https://www.linkedin.com/in/tarun224/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin size={24} />
              Connect on LinkedIn
            </motion.a>
          </motion.div>
        )
    }
  }

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#111827] text-white">
      <CustomCursor />
      <Suspense fallback={<div>Loading...</div>}>
        <AnimatedBackground />
      </Suspense>
      
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 z-20 flex w-full items-center justify-center gap-2 bg-black/50 p-4 backdrop-blur-sm"
      >
        <Image
          src="/placeholder.svg?height=40&width=40"
          alt="Tarun Chintada"
          width={40}
          height={40}
          className="rounded-full border-2 border-purple-500"
        />
        {['about', 'education', 'experience', 'projects', 'skills', 'chat'].map((section) => (
          <Button
            key={section}
            variant={activeSection === section ? 'default' : 'ghost'}
            onClick={() => handleSectionChange(section as Section)}
            className="transition-all duration-300 hover:scale-110"
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Button>
        ))}
      </motion.nav>

      <main className="z-10 flex min-h-screen w-full max-w-4xl flex-col items-center justify-center p-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full rounded-lg bg-black/30 p-8 backdrop-blur-sm transition-all duration-300 ease-in-out"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>

      {activeSection !== 'chat' && (
        <KnowMoreButton onClick={() => handleSectionChange('chat')} />
      )}

      <AnimatePresence>
        {showDNA && <DNATransition onComplete={handleDNAComplete} />}
      </AnimatePresence>
    </div>
  )
}

