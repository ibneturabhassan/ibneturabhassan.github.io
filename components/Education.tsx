import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, FlaskConical } from "lucide-react"

export default function Education() {
  return (
    <section id="education" className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="absolute top-10 right-[10%] w-64 h-64 rounded-full bg-blue-100/20 blur-3xl -z-0" />

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200 px-3 py-1 text-xs font-medium text-blue-700 mb-4">
            Education
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Academic{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text text-transparent">background</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-l-4 border-l-blue-500 hover:shadow-card-hover transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-xl font-semibold text-foreground">BS in Computer Science</h3>
                    <span className="text-xs font-medium text-muted-foreground bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">
                      Graduated Jun 2021
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    National University of Sciences and Technology (NUST) · Islamabad, Pakistan
                  </p>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    <div className="flex items-start gap-3 rounded-xl bg-purple-50 border border-purple-100 p-3">
                      <FlaskConical className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-purple-800">Final Year Project</div>
                        <div className="text-xs text-purple-600 mt-0.5">Sleep Quality Analysis using Deep Learning (LSTM, 98% accuracy)</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-xl bg-teal-50 border border-teal-100 p-3">
                      <GraduationCap className="h-5 w-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-medium text-teal-800">Key Coursework</div>
                        <div className="text-xs text-teal-600 mt-0.5">AI, Data Warehousing, Large-scale Software Design</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
