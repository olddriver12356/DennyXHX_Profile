export type Project = {
    slug: string;
    title: string;
    tagline: string;
    year?: string;
    role?: string;
    thumbnail: string; // must exist in /public
    metrics?: string[];
    stack: string[];
    overview: string;
    problem: string;
    solution: string[];
    impact: string[];
    architecture?: string[];
    links?: { github?: string; live?: string };
    visual?: {
        icon: "database" | "sparkles" | "brain" | "code";
        gradientFrom?: string; // css color, e.g. "var(--accent)"
        gradientTo?: string;   // css color, e.g. "var(--accent-2)"
        kpis?: Array<{ label: string; value: string }>;
      }
  };
  
  export const PROJECTS: Project[] = [
    {
      slug: "Course Database Management Query Engine",
      title: "Course Data Query Engine",
      tagline: "Transforms messy academic datasets into structured, queryable data.",
      year: "2025",
      role: "Full Stack / Backend",
      thumbnail: "/course-data.svg",
      metrics: ["End-to-end pipeline", "Automated tests", "Security validation"],
      stack: ["TypeScript", "Node.js", "Next.js", "Testing", "REST API"],
      overview:
        "Built a modular backend pipeline that validates, transforms, and structures heterogeneous datasets into consistent queryable formats.",
      problem:
        "Academic datasets come in inconsistent formats and require strict validation and predictable outputs for downstream queries.",
      solution: [
        "Designed schema + validation rules to reject malformed inputs early.",
        "Implemented transformation pipeline to normalize and structure datasets.",
        "Added automated tests and clear error handling for maintainability.",
      ],
      impact: [
        "Delivered a reusable ingestion + validation pipeline for multiple datasets.",
        "Improved developer velocity via modular design and test coverage.",
        "Strengthened reliability with input validation and predictable outputs.",
      ],
      architecture: [
        "Parser → Validator → Transformer → Query layer",
        "Clear contracts between modules for testability",
      ],
      links: { github: "https://github.com/olddriver12356", live: "" },
    },
  
    {
      slug: "Restaurant Supply Chain & Review Management System",
      title: "Restaurant Supply Chain & Review System",
      tagline: "Relational database system for operational workflows and analytics queries.",
      year: "2025",
      role: "Database / Backend",
      thumbnail: "/restaurant-db.svg",
      metrics: ["15+ entities", "1,000+ records", "~30% faster queries"],
      stack: ["SQL", "Oracle DB", "Relational Modeling"],
      overview:
        "Designed and implemented a normalized schema with constraints, realistic seed data, and query optimization considerations.",
      problem:
        "Operational workflows need consistent data integrity, fast analytics queries, and clear relationships across entities.",
      solution: [
        "Built normalized relational schema with constraints (PK/FK/CK).",
        "Loaded realistic datasets and validated entity relationships.",
        "Optimized access patterns via indexing and schema refinement.",
      ],
      impact: [
        "Implemented a 15+ entity schema supporting real-world workflows.",
        "Loaded 1,000+ records for realistic query evaluation.",
        "Reduced query latency through structural improvements and indexing.",
      ],
      links: { github: "https://github.com/olddriver12356", live: "" },
    },
  
    {
      slug: "Machine Learning & Predictive Modeling",
      title: "ML Workflow Framework",
      tagline: "Reusable ML pipelines with consistent evaluation and model selection.",
      year: "2026",
      role: "ML / Data",
      thumbnail: "/ml-workflow.svg",
      metrics: ["Reusable pipeline", "CV + tuning", "Consistent metrics"],
      stack: ["Python", "Pandas", "Scikit-Learn"],
      overview:
        "Built modular ML workflows that standardize preprocessing, training, validation, and evaluation for structured datasets.",
      problem:
        "ML experiments become unreliable without consistent preprocessing and evaluation procedures across models and datasets.",
      solution: [
        "Modularized preprocessing + feature engineering.",
        "Implemented cross-validation and structured tuning.",
        "Standardized evaluation reporting for fair comparison.",
      ],
      impact: [
        "Improved repeatability of experiments with consistent pipelines.",
        "Enabled faster iteration by reusing components across datasets.",
        "Reduced selection bias via cross-validation and structured tuning.",
      ],
      links: { github: "https://github.com/olddriver12356", live: "" },
    },
  ];
  
  export function getProject(slug: string) {
    return PROJECTS.find((p) => p.slug === slug);
  }