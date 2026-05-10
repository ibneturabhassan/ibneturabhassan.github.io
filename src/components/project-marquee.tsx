"use client";

import Link from "next/link";
import Image from "next/image";

import { Reveal } from "@/components/reveal";
import type { ProjectItem } from "@/types/portfolio";

export function ProjectMarquee({ projects }: { projects: ProjectItem[] }) {
  const loopProjects = [...projects, ...projects];

  return (
    <div className="project-marquee-shell">
      <div className="project-marquee-track">
        {loopProjects.map((project, index) => (
          <Reveal
            as={Link}
            className="marquee-project-card"
            direction="up"
            delay={(index % projects.length) * 70}
            href={`/projects/${project.slug}`}
            aria-hidden={index >= projects.length}
            tabIndex={index >= projects.length ? -1 : 0}
            key={`${project.slug}-${index}`}
          >
            <div className="marquee-project-visual">
              <Image
                alt={project.visualAlt}
                fill
                sizes="(max-width: 900px) 80vw, 28vw"
                src={project.visual}
              />
            </div>
            <div className="marquee-project-copy">
              <span className="eyebrow">{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <div className="marquee-project-meta">
                <span>{project.year}</span>
                <span>{project.outcome}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
