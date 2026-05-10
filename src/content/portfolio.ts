import type { PortfolioContent } from "@/types/portfolio";

export const portfolioContent: PortfolioContent = {
  name: "Malik Hassan Raza",
  title: "GenAI Engineer",
  heroLabel: "GenAI Engineer",
  heroHeadline: "I build reliable RAG products, LLM evaluations, and internal AI tools.",
  heroBody:
    "4+ years across AI and data systems, turning product needs into production-grade retrieval workflows, evaluation loops, and tooling that teams can trust under real use.",
  availability:
    "Focused on applied LLM systems where retrieval quality, evaluation discipline, and workflow design all matter.",
  primaryCta: {
    label: "Email Malik",
    href: "mailto:raza.malikhassan55@gmail.com",
    note: "raza.malikhassan55@gmail.com"
  },
  secondaryCta: {
    label: "Download Resume",
    href: "/resume-malikhassanraza.pdf",
    note: "PDF"
  },
  schedulingCta: {
    label: "Book a Call",
    href: "https://calendly.com/hassan-malik-18/30min",
    note: "30 min"
  },
  blogCta: {
    label: "Read on Medium",
    href: "https://medium.com/@hassan.malik.18",
    note: "@hassan.malik.18"
  },
  metrics: [
    {
      label: "Led 9 Engineers",
      value: "9 engineers",
      note: "Led a GenAI pod inside a 600+ person organization"
    },
    {
      label: "6-Language Eval Scope",
      value: "6 langs",
      note: "Benchmarks spanning Python, TypeScript, Rust, C, C++, and C#"
    },
    {
      label: "30% Support Reduction",
      value: "-30%",
      note: "Slack volume reduced through internal RAG chatbot"
    },
    {
      label: "70-80 LLM Tasks / Week",
      value: "70-80 / wk",
      note: "High-quality LLM trajectories shipped at Turing"
    }
  ],
  experience: [
    {
      company: "Mistral AI",
      role: "AI Engineer (LLM Evaluations)",
      period: "03/2026 - Present",
      logoSrc: "/brand-logos/mistral-ai-official.svg",
      logoAlt: "Mistral AI logo",
      logoClassName: "brand-logo-mistral",
      summary:
        "Designing rigorous coding benchmarks and evaluation environments that expose reasoning gaps and improve model quality across multi-language tasks.",
      highlights: [
        "Built challenging coding benchmarks spanning Python, TypeScript, Rust, C, C++, and C#.",
        "Reviewed model-generated code, open-source pull requests, and code reviews for correctness, performance, and readability.",
        "Documented failure modes, edge cases, and reasoning gaps to support model fine-tuning and RLHF workflows."
      ],
      tools: ["Python", "TypeScript", "Rust", "C++", "RLHF", "Benchmarking"]
    },
    {
      company: "Turing",
      role: "GenAI Engineer (LLMs, Python)",
      period: "01/2023 - 10/2025",
      location: "Remote",
      logoSrc: "/brand-logos/turing-official.svg",
      logoAlt: "Turing logo",
      logoClassName: "brand-logo-turing",
      summary:
        "Led delivery across large-scale GenAI initiatives, pairing LLM orchestration with evaluation discipline, internal tooling, and product-facing AI systems.",
      highlights: [
        "Led a pod of 9 GenAI engineers and scaled production to 70-80 high-quality LLM trajectories per week.",
        "Built an automated LLM-based data quality analysis pipeline using Python, REST APIs, and GPT-4.",
        "Engineered an internal RAG chatbot with LangChain and Qdrant, reducing Slack message volume by 30%."
      ],
      tools: ["Python", "LangChain", "Qdrant", "GPT-4", "REST APIs", "SFT / RLHF"]
    },
    {
      company: "Systems Limited",
      role: "Junior Consultant, Data Analytics",
      period: "07/2021 - 01/2023",
      location: "Islamabad",
      logoSrc: "/brand-logos/systems-limited-official.svg",
      logoAlt: "Systems Limited logo",
      logoClassName: "brand-logo-systems",
      summary:
        "Built the data discipline underneath reporting and migration work, improving ingestion efficiency, reporting speed, and post-migration trust.",
      highlights: [
        "Built ETL pipelines in IBM DataStage, improving ingestion efficiency by 30% for a telecom client.",
        "Developed Power BI dashboards and optimized SQL queries, reducing reporting time by 40%.",
        "Implemented automated validation workflows with Python and Alteryx, achieving 98%+ post-migration data accuracy."
      ],
      tools: ["IBM DataStage", "Power BI", "SQL", "Python", "Alteryx", "ETL"]
    }
  ],
  projects: [
    {
      slug: "bookflow",
      name: "BookFlow",
      category: "Flagship Product Build",
      year: "2026",
      role: "Founder / GenAI Product Engineer",
      outcome: "Long-form book generation workflow grounded in creator voice and retrieval.",
      summary:
        "A GenAI SaaS platform that turns existing creator content into structured books while preserving voice, tone, and long-form coherence.",
      details: [
        "Designed style-learning and semantic retrieval flows for outline generation and chapter-by-chapter drafting.",
        "Implemented orchestration across LangChain, Pinecone, PostgreSQL, and AWS-backed workflows.",
        "Integrated LLM-driven generation, revision, and consistency controls for long-form output."
      ],
      stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Pinecone", "LangChain", "AWS", "Stripe"],
      visual: "/project-bookflow.svg",
      visualAlt: "Abstract technical illustration showing layered retrieval graphs and manuscript generation flow.",
      overview:
        "BookFlow is a product concept and implementation track focused on turning existing creator material into publishable long-form books. The system is built around voice preservation, retrieval quality, and chapter-level orchestration rather than one-shot generation.",
      problem:
        "Long-form AI writing breaks down when voice, structure, and source grounding are treated as one prompt instead of a workflow.",
      ownership: [
        "Defined the creator-facing generation workflow from source ingestion through chapter drafting.",
        "Designed retrieval and style-learning flows for voice preservation and semantic recall.",
        "Connected product, data, generation, revision, and billing concerns into one coherent SaaS architecture."
      ],
      challenge:
        "The hard part was not just generating text, but maintaining consistency of tone, structure, and factual grounding across long spans of content while still giving the user a workflow they could control.",
      architecture: [
        "RAG pipeline for style learning, semantic recall, and source-aware drafting.",
        "Chapter-by-chapter generation flow with revision loops and continuity checks.",
        "Application stack spanning React, TypeScript, PostgreSQL, Pinecone, LangChain, AWS, and billing infrastructure."
      ],
      impact: [
        "Demonstrates product thinking, workflow design, and real-world GenAI system composition.",
        "Shows how retrieval, orchestration, and structured editing can work together in a creator-facing product."
      ]
    },
    {
      slug: "membership-inference-attacks",
      name: "Membership Inference Attacks using Shadow Models",
      category: "Research Engineering",
      year: "2021",
      role: "Research Engineer",
      outcome: "Reproducible attack pipeline with measurable classifier membership leakage signals.",
      summary:
        "A research-heavy attack pipeline built to probe whether target classifiers reveal membership information through their output behavior.",
      details: [
        "Scaled modular shadow-model experimentation to simulate varied training conditions.",
        "Built feature-rich attack models using softmax vectors, entropy, margin, and loss metrics.",
        "Reached TPR@FPR=0.144 and AUC=0.655 while keeping the experimentation workflow reproducible."
      ],
      stack: ["Python", "PyTorch", "Model Evaluation", "Research Pipelines", "Experiment Tracking"],
      visual: "/project-membership.svg",
      visualAlt: "Abstract technical illustration with matrices, confidence bars, and a decision boundary grid.",
      overview:
        "This project focused on measuring how much a model's output behavior leaks information about whether a sample appeared in training data. The work combined experimental rigor with repeatable pipeline design.",
      problem:
        "Membership leakage is hard to reason about without a repeatable experiment loop that compares shadow models and attack signals consistently.",
      ownership: [
        "Built the modular experimentation flow for varied shadow-model configurations.",
        "Engineered attack features from softmax vectors, entropy, margins, and loss-oriented signals.",
        "Kept the workflow reproducible so results could be compared across runs."
      ],
      challenge:
        "The central challenge was building a pipeline that could compare many shadow-model configurations without turning the experimentation process into a one-off notebook exercise.",
      architecture: [
        "Modular shadow-model pipeline with configurable data splitting and scaling strategies.",
        "Feature extraction from softmax vectors, entropy, margins, and loss-oriented signals.",
        "Experiment loop designed for reproducibility on top of existing MIA framework components."
      ],
      impact: [
        "Achieved TPR@FPR=0.144 and AUC=0.655.",
        "Serves as a strong example of research engineering, metrics discipline, and experiment design."
      ]
    },
    {
      slug: "internal-rag-assistant",
      name: "Internal RAG Assistant",
      category: "Knowledge Systems",
      year: "2024",
      role: "GenAI Engineer",
      outcome: "Internal chatbot that reduced Slack message volume by 30 percent.",
      summary:
        "A retrieval-first assistant built for internal SOP and documentation access, designed to reduce message overhead and improve speed-to-answer inside distributed teams.",
      details: [
        "Engineered the assistant with Python, LangChain, and Qdrant for semantic retrieval across internal knowledge.",
        "Focused on response consistency and documentation coverage rather than generic chatbot behavior.",
        "Reduced Slack message volume by 30 percent by giving teams faster access to SOPs and operating context."
      ],
      stack: ["Python", "LangChain", "Qdrant", "RAG", "Internal Tooling", "Prompt Design"],
      visual: "/project-rag-assistant.svg",
      visualAlt: "Abstract technical illustration showing a retrieval console feeding grounded answers into an internal assistant panel.",
      overview:
        "This assistant was built to answer internal process questions quickly and consistently. Instead of relying on people to manually repeat SOP knowledge in chat, the system exposed internal documentation through a retrieval-oriented interface.",
      problem:
        "Distributed teams were losing time to repeated SOP questions and manual knowledge lookup inside chat workflows.",
      ownership: [
        "Engineered the RAG assistant with Python, LangChain, and Qdrant.",
        "Shaped retrieval, response composition, and prompting around operational accuracy.",
        "Focused the product behavior on internal documentation coverage rather than generic chat."
      ],
      challenge:
        "The challenge was creating something reliable enough to be used in day-to-day operations, where hallucinated or vague answers would cost trust immediately.",
      architecture: [
        "Qdrant-backed retrieval layer over SOP and documentation content.",
        "LangChain orchestration for retrieval, response composition, and grounding behavior.",
        "Prompting and validation patterns oriented toward operational clarity rather than open-ended conversation."
      ],
      impact: [
        "Reduced Slack message volume by 30 percent.",
        "Improved access to internal documentation and lowered repeated support burden."
      ]
    },
    {
      slug: "llm-quality-analysis-pipeline",
      name: "LLM Quality Analysis Pipeline",
      category: "Evaluation Infrastructure",
      year: "2024",
      role: "GenAI Engineer",
      outcome: "Automated pipeline for surfacing systemic quality issues missed by manual review.",
      summary:
        "A Python and API-based evaluation workflow that used LLM analysis to detect recurring data quality issues and delivery gaps at scale.",
      details: [
        "Built an automated analysis pipeline using Python, REST APIs, and GPT-4.",
        "Targeted systemic issues and quality gaps that manual review alone was missing.",
        "Helped evaluation and delivery teams move from anecdotal debugging to structured issue detection."
      ],
      stack: ["Python", "REST APIs", "GPT-4", "Evaluation Workflows", "Quality Analysis"],
      visual: "/project-quality-pipeline.svg",
      visualAlt: "Abstract technical illustration showing evaluation nodes, quality signals, and alert routing across a pipeline graph.",
      overview:
        "This system treated quality analysis as a pipeline rather than an afterthought. It used automation to classify patterns in model output and surface recurring problems early enough to matter.",
      problem:
        "Manual review alone was missing recurring quality issues as LLM delivery volume increased.",
      ownership: [
        "Built the Python and REST API pipeline for automated quality analysis.",
        "Used GPT-4-assisted checks to identify repeated issue patterns.",
        "Helped shift review from anecdotal debugging to structured quality detection."
      ],
      challenge:
        "Manual review creates blind spots when output volume grows. The challenge was designing a process that preserved nuance while still scaling to repeated evaluation work.",
      architecture: [
        "Python pipeline coordinating task ingestion, API access, and LLM-based quality checks.",
        "Structured issue detection aimed at systematic failures rather than isolated examples.",
        "Feedback loop designed to support model iteration and delivery improvement."
      ],
      impact: [
        "Improved the visibility of systemic quality issues across LLM workflows.",
        "Strengthened evaluation discipline in a high-throughput production environment."
      ]
    },
    {
      slug: "coding-benchmark-suite",
      name: "Coding Benchmark Suite",
      category: "Model Benchmarking",
      year: "2026",
      role: "AI Engineer",
      outcome: "Multi-language coding benchmark environment for model comparison and failure analysis.",
      summary:
        "A benchmark suite for evaluating coding performance across languages, with structured failure analysis to support model alignment and RLHF work.",
      details: [
        "Designed coding benchmarks spanning Python, TypeScript, Rust, C, C++, and C#.",
        "Reviewed generated code and pull request-style outputs for correctness, readability, and performance.",
        "Documented failure modes and edge cases to support fine-tuning and alignment workflows."
      ],
      stack: ["Benchmark Design", "Python", "TypeScript", "Rust", "C++", "RLHF", "Failure Analysis"],
      visual: "/project-benchmark-suite.svg",
      visualAlt: "Abstract technical illustration of benchmark grids, language lanes, and evaluation terminals in a dark technical interface.",
      overview:
        "This project captures the evaluation side of applied AI work: creating tasks that expose meaningful differences in model reasoning rather than just generating leaderboard numbers.",
      problem:
        "Coding models need benchmarks that expose reasoning gaps across languages, code review contexts, and edge cases.",
      ownership: [
        "Designed benchmark tasks across Python, TypeScript, Rust, C, C++, and C#.",
        "Reviewed generated code and pull request-style outputs for correctness and readability.",
        "Documented failure modes to support fine-tuning, RLHF, and model comparison workflows."
      ],
      challenge:
        "The real challenge was coverage. The suite had to span multiple languages and code review patterns while still staying rigorous enough to reveal actual reasoning gaps.",
      architecture: [
        "Task and benchmark design across six programming languages.",
        "Evaluation workflow combining generated code review, edge-case analysis, and comparative scoring.",
        "Environment support for repeatable coding evaluation and RLHF-adjacent feedback loops."
      ],
      impact: [
        "Created a stronger basis for structured model comparison.",
        "Supported model alignment work through more precise failure reporting."
      ]
    }
  ],
  skillGroups: [
    {
      name: "Programming",
      items: ["Python", "TypeScript", "SQL", "REST APIs", "Git / GitHub", "Pandas", "NumPy"]
    },
    {
      name: "LLM / GenAI Systems",
      items: ["LangChain", "LangGraph", "RAG", "Prompt Engineering", "OpenAI APIs", "Vector Databases", "LLM Evaluation"]
    },
    {
      name: "Data / Delivery",
      items: ["Qdrant", "Pinecone", "PostgreSQL", "MySQL", "AWS", "IBM DataStage", "Power BI", "Alteryx"]
    }
  ],
  education: {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    school: "National University of Sciences and Technology, Islamabad",
    year: "06/2021",
    logoSrc: "/brand-logos/nust-official.png",
    logoAlt: "NUST logo",
    logoClassName: "brand-logo-nust"
  },
  footerLinks: [
    { label: "Email", href: "mailto:raza.malikhassan55@gmail.com" },
    { label: "Resume", href: "/resume-malikhassanraza.pdf" },
    { label: "Book a Call", href: "https://calendly.com/hassan-malik-18/30min" },
    { label: "Medium", href: "https://medium.com/@hassan.malik.18" }
  ],
  footerNote:
    "Built around resume-backed work in GenAI evaluation, retrieval systems, and production-quality AI delivery."
};
