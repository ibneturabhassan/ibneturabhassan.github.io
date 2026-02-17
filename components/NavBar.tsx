"use client"
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.2, 0.6] }
    )

    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-40 border-b transition-all duration-300 ${
      scrolled
        ? 'border-border bg-background/95 backdrop-blur-md shadow-sm'
        : 'border-transparent bg-background/80 backdrop-blur-sm'
    }`}>
      <div className="container flex h-16 items-center justify-between">
        {/* Logo with gradient */}
        <a
          href="#"
          className="text-sm font-bold tracking-wider bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent hover:from-teal-700 hover:to-emerald-600 transition-all duration-200"
        >
          Malik Hassan Raza
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-1 md:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`px-3 py-2 text-sm rounded-full transition-all duration-200 ${
                active === s.id
                  ? 'text-white bg-gradient-to-r from-teal-600 to-emerald-600 font-medium shadow-sm shadow-teal-500/20'
                  : 'text-foreground/70 hover:text-foreground hover:bg-muted'
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-md">
          <div className="container py-3 flex flex-col gap-1">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`px-4 py-2.5 text-sm transition-colors rounded-xl ${
                  active === s.id
                    ? 'text-white bg-gradient-to-r from-teal-600 to-emerald-600 font-medium'
                    : 'text-foreground/80 hover:text-foreground hover:bg-muted'
                }`}
                onClick={() => setOpen(false)}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
