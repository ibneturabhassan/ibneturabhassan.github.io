import { Briefcase, Award, Users, Code2 } from 'lucide-react'

const highlights = [
  { icon: Briefcase, label: '4+ Years', sublabel: 'Experience', color: 'bg-teal-50 text-teal-600 border-teal-200' },
  { icon: Users, label: '9-Person Pod', sublabel: 'Led at Turing', color: 'bg-blue-50 text-blue-600 border-blue-200' },
  { icon: Award, label: '3 Awards', sublabel: 'Rising Star & More', color: 'bg-orange-50 text-orange-600 border-orange-200' },
  { icon: Code2, label: '100%', sublabel: 'Compliance Rate', color: 'bg-purple-50 text-purple-600 border-purple-200' },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-br from-teal-100/40 to-emerald-100/20 blur-3xl -z-0" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-orange-100/30 to-rose-100/20 blur-3xl -z-0" />

      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200 px-3 py-1 text-xs font-medium text-teal-700 mb-6">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Turning data into{' '}
              <span className="bg-gradient-to-r from-teal-600 to-emerald-500 bg-clip-text text-transparent">
                intelligent systems
              </span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              I&apos;m an AI & LLM engineer with 4 years of experience leading data pods, curating training datasets,
              and building analytics platforms that make model quality measurable.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Recently I led a 9-person pod inside Turing&apos;s 600-engineer program, scaling throughput to 70-80
              high-quality trajectories per week while keeping compliance at 100%. I still love rolling up my sleeves
              to write Python, enforce SOPs, and close the loop between model experimentation and business needs.
            </p>

            {/* Highlight stats */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div key={h.label} className={`flex items-center gap-3 rounded-2xl border p-3 ${h.color}`}>
                  <div className="flex-shrink-0">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{h.label}</div>
                    <div className="text-xs opacity-70">{h.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative rings behind photo */}
              <div className="absolute -inset-4 rounded-full border-2 border-dashed border-teal-200/50 animate-spin-slow" />
              <div className="absolute -inset-8 rounded-full border border-orange-200/30" />
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full overflow-hidden shadow-xl shadow-teal-500/10 ring-4 ring-white">
                <img
                  src="/profile.png"
                  alt="Malik Hassan Raza"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating accent dots */}
              <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-rose-400 shadow-lg" />
              <div className="absolute -bottom-1 -left-3 w-4 h-4 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400 shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
