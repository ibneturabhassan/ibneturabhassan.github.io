import Link from 'next/link'
import type { Project } from '@/data/projects'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const typeColors: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
  LLM: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', gradient: 'from-purple-500 to-purple-600' },
  'Data Engineering': { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', gradient: 'from-orange-500 to-orange-600' },
  Analytics: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', gradient: 'from-blue-500 to-blue-600' },
  Research: { bg: 'bg-teal-50', text: 'text-teal-700', border: 'border-teal-200', gradient: 'from-teal-500 to-teal-600' },
}

export default function ProjectCard({ project }: { project: Project }) {
  const colors = typeColors[project.type] || typeColors.Research

  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="h-full transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 border-border overflow-hidden">
        {/* Colored top accent bar */}
        <div className={`h-1.5 bg-gradient-to-r ${colors.gradient}`} />
        <CardHeader>
          <div className="flex items-start justify-between gap-3">
            <CardTitle className="text-lg font-medium group-hover:text-foreground transition-colors">{project.title}</CardTitle>
            <Badge className={`${colors.bg} ${colors.text} ${colors.border} border text-[10px] px-2 py-0.5 flex-shrink-0`}>
              {project.type}
            </Badge>
          </div>
          <span className="text-xs text-muted-foreground font-medium">{project.year}</span>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">{project.shortDescription}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.slice(0, 5).map((t) => (
              <Badge key={t} variant="secondary" className="text-[11px] hover:bg-muted transition-colors">
                {t}
              </Badge>
            ))}
            {project.tags.length > 5 && (
              <Badge variant="outline" className="text-[11px]">
                +{project.tags.length - 5}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <div className={`text-sm font-medium ${colors.text} group-hover:translate-x-1 transition-transform inline-flex items-center gap-1`}>
            View details <ArrowRight className="h-4 w-4" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
