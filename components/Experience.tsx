import { Card, CardContent } from "@/components/ui/card"
import { Rocket, BarChart3 } from "lucide-react"

const jobs = [
  {
    title: 'Software Engineer · AI & LLM',
    company: 'Turing',
    location: 'Remote',
    date: 'Jan 2023 - Oct 2025',
    icon: Rocket,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    accentColor: 'border-l-teal-500',
    dotColor: 'bg-teal-500',
    items: [
      'Led a pod of 9 AI engineers within a 600-person org, consistently shipping 70-80 curated trajectories per week across code generation, reasoning, and conversational LLM tracks.',
      'Formalized SOPs, validation workflows, and reviewer playbooks that drove 100% compliance and drastically reduced delivery defects.',
      'Standardized task taxonomies and benchmarking rubrics, enabling smoother cross-functional handoffs and measurable model improvements.',
      'Produced high-signal datasets for supervised fine-tuning and RLHF, delivered detailed evaluation rationales, and earned "Rising Star", "Top Trainer", and "Top Lead" recognition.',
    ],
  },
  {
    title: 'Junior Consultant · Data Analytics',
    company: 'Systems Limited',
    location: 'Islamabad, Pakistan',
    date: 'Jul 2021 - Jan 2023',
    icon: BarChart3,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    accentColor: 'border-l-orange-500',
    dotColor: 'bg-orange-500',
    items: [
      'Built high-performance IBM DataStage ETL pipelines that improved ingestion efficiency by 30% for a major telecom client while protecting end-to-end data quality.',
      'Developed Power BI dashboards and optimized SQL, cutting reporting cycles by 40% and accelerating decision-making across business units.',
      'Automated post-migration validation with Python and Alteryx, sustaining 98%+ data accuracy and strengthening internal controls.',
      'Coordinated closely with cross-functional stakeholders to unblock migrations and translate analytics needs into actionable engineering tasks.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative bg-white py-16 sm:py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-gradient-to-br from-teal-100/30 to-transparent blur-3xl -z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-tl from-orange-100/30 to-transparent blur-3xl -z-0" />

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 border border-teal-200 px-3 py-1 text-xs font-medium text-teal-700 mb-4">
            Work History
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Professional{' '}
            <span className="bg-gradient-to-r from-teal-600 to-blue-500 bg-clip-text text-transparent">experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-300 via-orange-300 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {jobs.map((job) => (
              <div key={job.title} className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-shrink-0 items-start pt-6">
                  <div className={`w-3 h-3 rounded-full ${job.dotColor} ring-4 ring-white shadow-sm`} />
                </div>

                <Card className={`flex-1 border-l-4 ${job.accentColor} hover:shadow-card-hover transition-all duration-300`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${job.iconBg} flex items-center justify-center`}>
                        <job.icon className={`h-5 w-5 ${job.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                          <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">{job.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-0.5">{job.company} · {job.location}</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {job.items.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className={`mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 ${job.dotColor}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
