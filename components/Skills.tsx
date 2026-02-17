import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Brain, Database, Cloud, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: 'Programming & Languages',
    icon: Code2,
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    gradient: 'from-blue-500 to-blue-600',
    badgeHover: 'hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200',
    borderColor: 'hover:border-blue-200',
    skills: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'PHP'],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-600',
    gradient: 'from-purple-500 to-purple-600',
    badgeHover: 'hover:bg-purple-50 hover:text-purple-700 hover:border-purple-200',
    borderColor: 'hover:border-purple-200',
    skills: ['PyTorch', 'LLMs', 'LangChain', 'GenAI', 'Prompt Engineering', 'OpenAI APIs', 'Vector Databases', 'Pinecone'],
  },
  {
    title: 'Data Engineering & Analytics',
    icon: Database,
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-600',
    gradient: 'from-orange-500 to-orange-600',
    badgeHover: 'hover:bg-orange-50 hover:text-orange-700 hover:border-orange-200',
    borderColor: 'hover:border-orange-200',
    skills: ['ETL', 'IBM DataStage', 'Power BI', 'Data Warehousing', 'Data Visualization', 'Data Analytics', 'Alteryx', 'Pandas', 'NumPy', 'Matplotlib'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-600',
    gradient: 'from-teal-500 to-emerald-600',
    badgeHover: 'hover:bg-teal-50 hover:text-teal-700 hover:border-teal-200',
    borderColor: 'hover:border-teal-200',
    skills: ['AWS', 'Docker', 'Kubernetes', 'REST API'],
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    gradient: 'from-rose-500 to-rose-600',
    badgeHover: 'hover:bg-rose-50 hover:text-rose-700 hover:border-rose-200',
    borderColor: 'hover:border-rose-200',
    skills: ['Git/GitHub', 'Jira', 'SharePoint', 'MySQL', 'Selenium', 'BeautifulSoup', 'Web Scraping', 'Microsoft Excel'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-teal-50/30 to-background -z-10" />
      <div className="absolute top-20 left-[5%] w-64 h-64 rounded-full bg-purple-100/20 blur-3xl -z-10" />
      <div className="absolute bottom-20 right-[5%] w-72 h-72 rounded-full bg-blue-100/20 blur-3xl -z-10" />

      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-purple-50 border border-purple-200 px-3 py-1 text-xs font-medium text-purple-700 mb-4">
            Technical Skills
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            My{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">toolkit</span>
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <Card
              key={cat.title}
              className={`group p-6 border-border ${cat.borderColor} hover:shadow-card-hover transition-all duration-300`}
            >
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl ${cat.iconBg} mb-4`}>
                <cat.icon className={`h-5 w-5 ${cat.iconColor}`} />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-foreground">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className={`${cat.badgeHover} transition-colors`}>
                    {skill}
                  </Badge>
                ))}
              </div>
              <div className={`mt-5 h-1 w-12 rounded-full bg-gradient-to-r ${cat.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
