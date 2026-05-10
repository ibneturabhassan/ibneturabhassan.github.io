export type MetricItem = {
  label: string;
  value: string;
  note: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  logoSrc?: string;
  logoAlt?: string;
  logoClassName?: string;
  summary: string;
  highlights: string[];
  tools: string[];
};

export type ProjectItem = {
  slug: string;
  name: string;
  category: string;
  year: string;
  role: string;
  outcome: string;
  summary: string;
  details: string[];
  stack: string[];
  visual: string;
  visualAlt: string;
  overview: string;
  problem: string;
  ownership: string[];
  challenge: string;
  architecture: string[];
  impact: string[];
};

export type SkillGroup = {
  name: string;
  items: string[];
};

export type ContactCTA = {
  label: string;
  href: string;
  note: string;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type PortfolioContent = {
  name: string;
  title: string;
  heroLabel: string;
  heroHeadline: string;
  heroBody: string;
  availability: string;
  primaryCta: ContactCTA;
  secondaryCta: ContactCTA;
  schedulingCta?: ContactCTA;
  blogCta?: ContactCTA;
  metrics: MetricItem[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  skillGroups: SkillGroup[];
  education: {
    degree: string;
    school: string;
    year: string;
    logoSrc?: string;
    logoAlt?: string;
    logoClassName?: string;
  };
  footerLinks: FooterLink[];
  footerNote: string;
};
