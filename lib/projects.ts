export type Project = {
    slug: string;
    title: string;
    tagline: string;
    year?: string;
    thumbnail: string; // put images in /public/projects/
    role?: string;
    stack: string[];
    highlights: string[]; // short bullets for home/projects list
    metrics?: string[];   // quick wins (latency, scale, etc.)
    links?: {
      github?: string;
      live?: string;
    };
    // long form for detail page
    overview: string;
    problem: string;
    solution: string[];
    impact: string[];
    architecture?: string[];
    challenges?: string[];
    learnings?: string[];
  };
  
  export const PROJECTS: Project[] = [
    {
      slug: "course-data-query-engine",
      title: "Course Data Query Engine",
      tagline: "Transforms messy academic datasets into structured, queryable data.",
      year: "2025",
      thumbnail: "/file.svg",
      role: "Full Stack / Backend",
      stack: ["TypeScript", "Node.js", "Next.js", "Testing", "REST API"],
      highlights: [
        "Built ingestion + validation pipeline for heterogeneous datasets.",
        "Designed query interfaces with robust input validation.",
        "Documented architecture and edge cases for maintainability.",
      ],
      metrics: ["End-to-end pipeline", "Automated tests", "Security-focused validation"],
      links: {
        github: "https://github.com/olddriver12356/REPO_LINK_1",
      },
      overview:
        "A backend-first system that ingests multiple dataset formats, normalizes them, and exposes consistent query behavior.",
      problem:
        "Datasets were inconsistent and error-prone, making it hard to query reliably or enforce correctness.",
      solution: [
        "Implemented dataset parsing + normalization with strict validation.",
        "Added test suites (black-box and glass-box) to prevent regressions.",
        "Structured the codebase for maintainability and team handoff.",
      ],
      impact: [
        "Improved reliability via automated testing and validation layers.",
        "Reduced ambiguity through clear API contracts and documentation.",
        "Supported iterative feature delivery in an Agile workflow.",
      ],
      architecture: [
        "Ingestion → Validation → Normalization → Query Layer",
        "Typed data models + centralized validation utilities",
      ],
      challenges: [
        "Handling edge cases across inconsistent datasets",
        "Designing validation that is strict but user-friendly",
      ],
      learnings: [
        "Clear API contracts save time for everyone.",
        "Test design is a product feature when correctness matters.",
      ],
    },
  
    {
      slug: "restaurant-db-system",
      title: "Restaurant Supply Chain & Review System",
      tagline: "Relational database system for operational workflows and analytics queries.",
      year: "2025",
      thumbnail: "/globe.svg",
      role: "Database / Backend",
      stack: ["SQL", "Oracle DB", "Relational Modeling", "Indexing"],
      highlights: [
        "Designed 15+ entity normalized schema with constraints.",
        "Loaded 1,000+ records and tuned queries with indexing.",
        "Improved query performance by ~30% through refinements.",
      ],
      metrics: ["15+ entities", "1,000+ records", "~30% faster queries"],
      links: {
        github: "https://github.com/olddriver12356/REPO_LINK_2",
      },
      overview:
        "A database design project focused on correct constraints, scalable schema design, and query performance.",
      problem:
        "Operational workflows required consistent data integrity and efficient query patterns across multiple entities.",
      solution: [
        "Built an ERD and converted it into a normalized relational schema.",
        "Implemented constraints and refined indexing based on query workload.",
        "Iterated in milestones with testing and realistic sample data.",
      ],
      impact: [
        "Improved query latency and reliability through indexing + schema refinement.",
        "Ensured data integrity via constraints and careful relationship design.",
      ],
      challenges: ["Balancing normalization with practical query performance"],
      learnings: ["Indexing is workload-driven — measure, then optimize."],
    },
  
    {
      slug: "ml-workflow-framework",
      title: "ML Workflow Framework",
      tagline: "Reusable ML pipelines with consistent evaluation and model selection.",
      year: "2025",
      thumbnail: "/window.svg",
      role: "ML / Data",
      stack: ["Python", "Pandas", "Scikit-Learn", "Cross-validation"],
      highlights: [
        "Built reusable pipelines for preprocessing → training → evaluation.",
        "Used CV + structured tuning to select reliable models.",
        "Standardized evaluation metrics across experiments.",
      ],
      metrics: ["Reusable pipeline", "CV + tuning", "Consistent metrics"],
      links: {
        github: "https://github.com/olddriver12356/REPO_LINK_3",
      },
      overview:
        "A modular ML workflow that makes experiments reproducible and evaluation consistent.",
      problem:
        "Ad-hoc modeling makes results hard to compare and easy to misinterpret.",
      solution: [
        "Created reusable preprocessing and training pipelines.",
        "Applied cross-validation and systematic hyperparameter tuning.",
        "Standardized metrics and reporting across experiments.",
      ],
      impact: [
        "Improved experiment reliability and comparability.",
        "Reduced ‘one-off notebook’ work by modularizing the workflow.",
      ],
      learnings: ["Reproducibility is a feature, not a nice-to-have."],
    },
  ];
  
  export function getProject(slug: string) {
    return PROJECTS.find((p) => p.slug === slug);
  }