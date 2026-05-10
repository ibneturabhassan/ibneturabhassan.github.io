import Link from "next/link";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import { portfolioContent } from "@/content/portfolio";

export default function ProjectsPage() {
  const groupedProjects = portfolioContent.projects.reduce(
    (groups, project) => {
      const category = project.category;
      groups[category] = [...(groups[category] ?? []), project];
      return groups;
    },
    {} as Record<string, typeof portfolioContent.projects>
  );

  return (
    <main className="page-shell page-shell-subpage">
      <Reveal as="header" className="subpage-hero" direction="up">
        <span className="eyebrow">Project Systems</span>
        <h1>Applied AI work across products, evaluations, knowledge systems, and research.</h1>
        <p>
          A focused view of product builds, evaluation infrastructure, knowledge systems, and
          research-heavy experiments, organized by the kind of engineering problem each one solved.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/">
            Back Home
          </Link>
          <a className="button button-secondary" href={portfolioContent.primaryCta.href}>
            Email Malik
          </a>
        </div>
      </Reveal>

      <section className="section projects-index-sections">
        {Object.entries(groupedProjects).map(([category, projects], groupIndex) => (
          <Reveal className="project-category-block" direction="up" delay={groupIndex * 80} key={category}>
            <div className="project-category-heading">
              <span className="eyebrow">{category}</span>
              <span>{projects.length.toString().padStart(2, "0")} project{projects.length === 1 ? "" : "s"}</span>
            </div>
            <div className="projects-index-grid">
              {projects.map((project) => (
                <article className="project-index-card" key={project.slug}>
                  <div className="project-index-visual">
                    <Image alt={project.visualAlt} fill sizes="(max-width: 900px) 100vw, 50vw" src={project.visual} />
                  </div>
                  <div className="project-index-copy">
                    <div className="project-index-heading">
                      <span className="eyebrow">{project.role}</span>
                      <span className="meta-period">{project.year}</span>
                    </div>
                    <h2>{project.name}</h2>
                    <p>{project.summary}</p>
                    <div className="project-outcome">
                      <span className="eyebrow">Outcome</span>
                      <strong>{project.outcome}</strong>
                    </div>
                    <div className="chip-row">
                      {project.stack.slice(0, 6).map((item) => (
                        <span className="chip" key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                    <Link className="button button-secondary" href={`/projects/${project.slug}`}>
                      View Case Study
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        ))}
      </section>
    </main>
  );
}
