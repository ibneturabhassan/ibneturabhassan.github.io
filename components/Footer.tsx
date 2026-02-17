import { Mail, Linkedin, FileText } from 'lucide-react'

const links = [
  { href: 'mailto:raza.malikhassan55@gmail.com', icon: Mail, label: 'Email' },
  { href: 'https://www.linkedin.com/in/malik-hassan-raza-2a6574153/', icon: Linkedin, label: 'LinkedIn', target: '_blank' },
  { href: '/malik-hassan-raza-resume.pdf', icon: FileText, label: 'Resume', target: '_blank' },
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden">
      {/* Full-width gradient CTA band */}
      <div className="relative bg-gradient-to-r from-teal-700 via-emerald-700 to-teal-800 py-14 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-[10%] w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-0 right-[10%] w-64 h-64 rounded-full bg-orange-400/10 blur-3xl" />
        {/* SVG decorations */}
        <svg className="absolute left-[5%] top-1/2 -translate-y-1/2 w-24 h-24 text-white/10 hidden lg:block" viewBox="0 0 100 100" fill="none">
          <path d="M10 50 Q30 10 50 50 Q70 90 90 50" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <svg className="absolute right-[5%] top-1/2 -translate-y-1/2 w-20 h-20 text-white/10 hidden lg:block" viewBox="0 0 50 50" fill="none">
          <circle cx="25" cy="25" r="20" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" />
        </svg>

        <div className="container relative z-10 text-center">
          <p className="text-teal-200 text-sm font-medium mb-2">Ready to work together?</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            Let&apos;s build something{' '}
            <span className="text-orange-300">great</span>
          </h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a
              href="mailto:raza.malikhassan55@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-white text-teal-800 font-semibold px-6 py-2.5 text-sm hover:bg-teal-50 transition-colors shadow-lg"
            >
              <Mail className="h-4 w-4" /> Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/malik-hassan-raza-2a6574153/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 text-white font-medium px-6 py-2.5 text-sm hover:bg-white/20 transition-colors"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-teal-900 py-6">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-teal-300 font-semibold text-sm">Malik Hassan Raza</span>

          {/* Icon links */}
          <div className="flex items-center gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.target}
                rel={l.target ? 'noreferrer' : undefined}
                aria-label={l.label}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 text-teal-300 hover:bg-white/20 hover:text-white transition-colors"
              >
                <l.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <span className="text-teal-500 text-xs">© {year} All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}
