'use client'
import Script from 'next/script'
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Linkedin, FileText } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'raza.malikhassan55@gmail.com',
    href: 'mailto:raza.malikhassan55@gmail.com',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    hoverBorder: 'hover:border-teal-200',
    hoverText: 'group-hover:text-teal-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+49 152 10737287',
    href: 'tel:+4915210737287',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    hoverBorder: 'hover:border-blue-200',
    hoverText: 'group-hover:text-blue-600',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/malik-hassan-raza-2a6574153/',
    target: '_blank',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    hoverBorder: 'hover:border-purple-200',
    hoverText: 'group-hover:text-purple-600',
  },
  {
    icon: FileText,
    label: 'Resume',
    value: 'Download PDF',
    href: '/malik-hassan-raza-resume.pdf',
    target: '_blank',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    hoverBorder: 'hover:border-orange-200',
    hoverText: 'group-hover:text-orange-600',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Rich gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/60 via-background to-purple-50/40 -z-10" />
      <div className="absolute top-10 left-[5%] w-72 h-72 rounded-full bg-teal-100/30 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-[5%] w-64 h-64 rounded-full bg-purple-100/20 blur-3xl -z-10" />

      {/* Decorative SVG */}
      <svg className="absolute top-20 right-[10%] w-20 h-20 text-orange-200/50 hidden lg:block" viewBox="0 0 80 80" fill="none">
        <path d="M10 40 Q25 10 40 40 Q55 70 70 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <div className="container relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 text-xs font-medium text-rose-700 mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">connect</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Interested in collaborating or have a question? Reach out through any of these channels.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-14">
          {contactMethods.map((m) => (
            <a
              key={m.label}
              href={m.href}
              target={m.target}
              rel={m.target ? 'noreferrer' : undefined}
              className="group block"
            >
              <Card className={`h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border-border ${m.hoverBorder}`}>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-xl ${m.iconBg} flex items-center justify-center mb-3`}>
                    <m.icon className={`h-6 w-6 ${m.iconColor}`} />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{m.label}</h3>
                  <p className={`text-sm text-muted-foreground ${m.hoverText} transition-colors`}>
                    {m.value}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <h3 className="text-xl font-semibold mb-6 text-center text-foreground">
              Schedule a Meeting
            </h3>
            <Card className="border-border overflow-hidden shadow-sm">
              <CardContent className="p-0">
                <div
                  className="calendly-inline-widget w-full"
                  data-url="https://calendly.com/hassan-malik-18/30min?background_color=ffffeb&text_color=1a1a1a&primary_color=034f46"
                  style={{ minWidth: '320px', height: '1000px' }}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  )
}
