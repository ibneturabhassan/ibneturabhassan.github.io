"use client"
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Sparkles } from 'lucide-react'

const titles = ['GenAI Engineer', 'Python Developer', 'Data Engineer', 'Data Analyst']

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const currentTitle = titles[currentIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentTitle.length) {
          setDisplayedText(currentTitle.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setIsPaused(true)
          setTimeout(() => {
            setIsPaused(false)
            setIsDeleting(true)
          }, 2000)
        }
      } else {
        if (charIndex > 0) {
          setDisplayedText(currentTitle.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % titles.length)
          setCharIndex(0)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentIndex, isPaused])

  return (
    <section
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 via-background to-orange-50/40 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(20,184,166,0.12),transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.08),transparent_50%)] -z-10" />

      {/* Decorative floating shapes */}
      <div className="absolute top-20 left-[10%] w-72 h-72 rounded-full bg-gradient-to-br from-teal-200/30 to-emerald-200/20 blur-3xl animate-float-slow -z-10" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 rounded-full bg-gradient-to-br from-orange-200/25 to-rose-200/15 blur-3xl animate-float -z-10" />
      <div className="absolute top-1/3 right-[20%] w-48 h-48 rounded-full bg-gradient-to-br from-blue-200/20 to-purple-200/15 blur-2xl animate-float-slow -z-10" style={{ animationDelay: '2s' }} />

      {/* Decorative SVG squiggle */}
      <svg className="absolute top-16 right-[15%] w-24 h-24 text-orange-300/40 animate-float hidden md:block" viewBox="0 0 100 100" fill="none">
        <path d="M20 50 Q35 20 50 50 Q65 80 80 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
      <svg className="absolute bottom-32 left-[12%] w-16 h-16 text-teal-400/30 animate-float-slow hidden md:block" viewBox="0 0 50 50" fill="none">
        <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="6 4" />
      </svg>
      <svg className="absolute top-1/2 left-[5%] w-12 h-12 text-purple-300/40 animate-spin-slow hidden lg:block" viewBox="0 0 50 50" fill="none">
        <rect x="10" y="10" width="30" height="30" rx="4" stroke="currentColor" strokeWidth="2" transform="rotate(15 25 25)" />
      </svg>

      {/* Small floating dots */}
      <div className="absolute top-[30%] left-[25%] w-3 h-3 rounded-full bg-teal-400/40 animate-float hidden md:block" />
      <div className="absolute top-[20%] right-[30%] w-2 h-2 rounded-full bg-orange-400/50 animate-float-slow hidden md:block" />
      <div className="absolute bottom-[35%] right-[15%] w-4 h-4 rounded-full bg-blue-400/30 animate-float hidden md:block" style={{ animationDelay: '1s' }} />

      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        {/* Small badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200 px-4 py-1.5 text-sm text-teal-700 mb-8">
            <Sparkles className="h-4 w-4" />
            <span>Available for opportunities</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="text-foreground">Hi, I&apos;m </span>
            <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-teal-700 bg-clip-text text-transparent">
              Malik Hassan
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 h-8 sm:h-10 md:h-12"
        >
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium">
            <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-purple-500 bg-clip-text text-transparent">
              {displayedText}
            </span>
            <span className="animate-pulse text-orange-400">|</span>
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          Building intelligent systems and scalable AI solutions. Passionate about
          leveraging data and generative AI to solve complex problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:from-teal-700 hover:to-emerald-700 shadow-lg shadow-teal-500/25"
          >
            <a href="/malik-hassan-raza-resume.pdf" target="_blank" rel="noreferrer">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300"
          >
            <a href="#contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
