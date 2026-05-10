import Link from "next/link";

import { CalendlyBooking } from "@/components/calendly-booking";
import { ProjectMarquee } from "@/components/project-marquee";
import { Reveal } from "@/components/reveal";
import { portfolioContent } from "@/content/portfolio";

function SectionHeading({
  eyebrow,
  title
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <div className="section-rule" />
      <h2>{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero section" id="top">
        <Reveal className="hero-copy" direction="up">
          <span className="eyebrow">{portfolioContent.heroLabel}</span>
          <h1>{portfolioContent.heroHeadline}</h1>
          <p className="hero-body">{portfolioContent.heroBody}</p>

          <div className="hero-actions">
            <a className="button button-primary" href={portfolioContent.primaryCta.href}>
              {portfolioContent.primaryCta.label}
            </a>
            <a
              className="button button-secondary"
              href={portfolioContent.secondaryCta.href}
              download
            >
              {portfolioContent.secondaryCta.label}
            </a>
          </div>
        </Reveal>

        <Reveal as="aside" className="hero-panel" direction="left" delay={120} aria-label="Positioning summary">
          <div className="hero-panel-header">
            <span className="eyebrow">Current Focus</span>
            <span className="status-dot" aria-hidden="true" />
          </div>
          <p>{portfolioContent.availability}</p>
          <ul className="hero-list">
            <li>Production-minded RAG and knowledge systems</li>
            <li>LLM benchmarks, coding evals, and failure analysis</li>
            <li>Internal AI workflows that reduce repeated manual work</li>
            <li>Product engineering with measurable delivery discipline</li>
          </ul>
        </Reveal>
      </section>

      <section className="metrics-grid section">
        {portfolioContent.metrics.map((metric, index) => (
          <Reveal as="article" className="metric-card" direction="up" delay={index * 80} key={metric.label}>
            <span className="eyebrow">{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.note}</p>
          </Reveal>
        ))}
      </section>

      <section className="section" id="work">
        <Reveal direction="up">
          <SectionHeading eyebrow="Selected Work" title="Experience shaped by shipping and evaluation discipline." />
        </Reveal>
        <div className="experience-list">
          {portfolioContent.experience.map((item, index) => (
            <Reveal
              as="article"
              className="experience-row"
              direction="up"
              delay={index * 90}
              key={`${item.company}-${item.period}`}
            >
              <div className="experience-meta">
                <span className="meta-period">{item.period}</span>
                {item.location ? <span className="meta-location">{item.location}</span> : null}
                {item.logoSrc ? (
                  <img
                    alt={item.logoAlt ?? `${item.company} logo`}
                    className={`brand-logo experience-meta-logo ${item.logoClassName ?? ""}`.trim()}
                    src={item.logoSrc}
                  />
                ) : null}
              </div>

              <div className="experience-body">
                <div className="experience-heading">
                  <span className="eyebrow">{item.company}</span>
                  <h3>{item.role}</h3>
                </div>

                <ul className="bullet-list">
                  <li>{item.summary}</li>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="chip-row">
                  {item.tools.map((tool) => (
                    <span className="chip" key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <Reveal className="projects-section-header" direction="up">
          <SectionHeading eyebrow="Featured Systems" title="Products, evaluation infrastructure, and applied AI experiments." />
          <Link className="button button-secondary" href="/projects">
            View All Projects
          </Link>
        </Reveal>
        <Reveal direction="up" delay={120}>
          <ProjectMarquee projects={portfolioContent.projects} />
        </Reveal>
      </section>

      <section className="section stack-section" id="stack">
        <Reveal direction="up">
          <SectionHeading eyebrow="System Stack" title="The tools and patterns behind the work." />
        </Reveal>
        <div className="skill-grid">
          {portfolioContent.skillGroups.map((group, index) => (
            <Reveal as="article" className="skill-card" direction="up" delay={index * 90} key={group.name}>
              <span className="eyebrow">{group.name}</span>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section education-section" id="education">
        <Reveal direction="up">
          <SectionHeading eyebrow="Education" title="Academic foundation." />
        </Reveal>
        <Reveal as="article" className="credential-card education-card education-row" direction="up" delay={80}>
          <div className="education-meta">
            <span className="meta-period">{portfolioContent.education.year}</span>
            {portfolioContent.education.logoSrc ? (
              <img
                alt={portfolioContent.education.logoAlt ?? "Education logo"}
                className={`brand-logo brand-logo-education education-meta-logo ${portfolioContent.education.logoClassName ?? ""}`.trim()}
                src={portfolioContent.education.logoSrc}
              />
            ) : null}
          </div>
          <div className="education-body">
            <span className="eyebrow">Degree</span>
            <h3>{portfolioContent.education.degree}</h3>
            <p>{portfolioContent.education.school}</p>
          </div>
        </Reveal>
      </section>

      <section className="section contact-section" id="contact">
        <Reveal className="contact-panel" direction="up">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Let&apos;s talk about the AI systems you&apos;re building.</h2>
            <p>
              Open to conversations around RAG products, internal AI tooling, evaluation infrastructure,
              and applied LLM systems that need both speed and operational reliability.
            </p>
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href={portfolioContent.primaryCta.href}>
              {portfolioContent.primaryCta.label}
            </a>
            <a className="button button-secondary" href={portfolioContent.secondaryCta.href} download>
              {portfolioContent.secondaryCta.label}
            </a>
            {portfolioContent.schedulingCta ? (
              <CalendlyBooking cta={portfolioContent.schedulingCta} />
            ) : null}
            {portfolioContent.blogCta ? (
              <a className="button button-secondary" href={portfolioContent.blogCta.href} target="_blank" rel="noreferrer">
                {portfolioContent.blogCta.label}
              </a>
            ) : null}
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <div>
          <span>{portfolioContent.footerNote}</span>
          <span>{portfolioContent.title}</span>
        </div>
        <nav aria-label="Footer navigation">
          {portfolioContent.footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("https://") ? "_blank" : undefined}
              rel={link.href.startsWith("https://") ? "noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </footer>
    </main>
  );
}
