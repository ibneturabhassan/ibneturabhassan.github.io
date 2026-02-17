"use client"
import { useMemo, useState } from 'react'
import ProjectCard from './ProjectCard'
import { projects as allProjects } from '@/data/projects'
import { Button } from '@/components/ui/button'

const filters = ['All', 'LLM', 'Data Engineering', 'Analytics', 'Research'] as const

type Filter = typeof filters[number]

const filterColors: Record<string, string> = {
  All: 'bg-gradient-to-r from-teal-600 to-emerald-600 text-white hover:from-teal-700 hover:to-emerald-700',
  LLM: 'bg-purple-600 text-white hover:bg-purple-700',
  'Data Engineering': 'bg-orange-500 text-white hover:bg-orange-600',
  Analytics: 'bg-blue-600 text-white hover:bg-blue-700',
  Research: 'bg-teal-600 text-white hover:bg-teal-700',
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('All')

  const filtered = useMemo(() => {
    if (filter === 'All') return allProjects
    return allProjects.filter((p) => p.type === filter)
  }, [filter])

  return (
    <section id="projects" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-[10%] w-72 h-72 rounded-full bg-purple-100/20 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-[10%] w-64 h-64 rounded-full bg-orange-100/20 blur-3xl -z-10" />

      <div className="container">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 border border-orange-200 px-3 py-1 text-xs font-medium text-orange-700 mb-4">
            Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Featured{' '}
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">projects</span>
          </h2>
        </div>

        {/* Filter pills */}
        <div className="flex justify-center gap-2 flex-wrap mb-8">
          {filters.map((f) => (
            <Button
              key={f}
              size="sm"
              onClick={() => setFilter(f)}
              className={
                filter === f
                  ? filterColors[f]
                  : 'bg-white text-foreground/70 border border-border hover:bg-muted hover:text-foreground'
              }
            >
              {f}
            </Button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
