import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/reveal";
import { portfolioContent } from "@/content/portfolio";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return portfolioContent.projects.map((project) => ({
    slug: project.slug
  }));
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = portfolioContent.projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="page-shell page-shell-subpage">
      <Reveal as="header" className="project-detail-hero" direction="up">
        <div className="project-detail-copy">
          <span className="eyebrow">{project.category}</span>
          <h1>{project.name}</h1>
          <p>{project.overview}</p>
        </div>
        <div className="project-detail-visual">
          <Image alt={project.visualAlt} fill sizes="(max-width: 900px) 100vw, 42vw" src={project.visual} />
        </div>
      </Reveal>

      <Reveal className="project-summary-strip" direction="up" delay={80}>
        <div>
          <span className="eyebrow">Year</span>
          <strong>{project.year}</strong>
        </div>
        <div>
          <span className="eyebrow">Role</span>
          <strong>{project.role}</strong>
        </div>
        <div>
          <span className="eyebrow">Category</span>
          <strong>{project.category}</strong>
        </div>
        <div>
          <span className="eyebrow">Outcome</span>
          <strong>{project.outcome}</strong>
        </div>
      </Reveal>

      <section className="project-detail-grid section">
        <Reveal as="article" className="detail-panel detail-panel-wide" direction="up" delay={60}>
          <span className="eyebrow">Overview</span>
          <p>{project.summary}</p>
        </Reveal>
        <Reveal as="article" className="detail-panel" direction="up" delay={120}>
          <span className="eyebrow">Problem</span>
          <p>{project.problem}</p>
        </Reveal>
        <Reveal as="article" className="detail-panel" direction="up" delay={180}>
          <span className="eyebrow">What I Owned</span>
          <ul className="bullet-list">
            {project.ownership.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal as="article" className="detail-panel" direction="up" delay={240}>
          <span className="eyebrow">Architecture</span>
          <ul className="bullet-list">
            {project.architecture.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal as="article" className="detail-panel" direction="up" delay={300}>
          <span className="eyebrow">Impact</span>
          <ul className="bullet-list">
            {project.impact.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal as="article" className="detail-panel" direction="up" delay={360}>
          <span className="eyebrow">Stack</span>
          <div className="chip-row">
            {project.stack.map((item) => (
              <span className="chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal className="detail-actions" direction="up" delay={120}>
        <Link className="button button-primary" href="/projects">
          More Projects
        </Link>
        <Link className="button button-secondary" href="/">
          Back Home
        </Link>
      </Reveal>
    </main>
  );
}
