export type EducationItem = {
  slug: string;
  aliases?: string[];
  school: string;
  program: string;
  location?: string;
  start?: string;
  end?: string;
  summary: string;
  Grade?: string[];
  coursework?: string[];
  links?: {
    website?: string;
  };
};

export const EDUCATION: EducationItem[] = [
  {
    slug: "The-University-of-British-Columbia",
    aliases: ["education"],
    school: "The University of British Columbia(UBC)",
    program: "Bachelor of Commerce, Business and Computer Science Specialization",
    location: "Vancouver, Canada",
    start: "2022",
    end: "2028",
    summary:
      "I am a Business and Computer Science student at the UBC Sauder School of Business with a strong interest in data systems, software engineering, and technology-driven problem solving. My academic background combines technical depth in algorithms, databases, and machine learning with business-focused thinking around systems, strategy, and organizational impact.",
    Grade: [
      "GPA: 3.7/4.0",
    ],
    coursework: ["Databases", "Software Engineering", "Machine Learning", "SQL", "Communication and Leadership", 
        "Algorithms", "Data Structures", "Operating Systems", "Project Management", "Business Analytics", "Business Strategy", "Business Law", "Business Ethics", 
    ],
  },
  {
    slug: "Peking-University",
    aliases: ["education"],
    school: "Peking University",
    program: "Exchange Student",
    location: "Beijing, China",
    start: "Summer 2024",
    summary:
      "Completed an exchange term at Peking University, taking coursework in Finance Applications and Financial Estimation and Analysis alongside students from across Asia.",
    Grade: [
      "Grade: A",
    ],
    coursework: ["Finance Applications", "Financial Estimation and Analysis"],
  },
];

export function resolveEducationSlug(input: string) {
  const hit = EDUCATION.find((e) => e.slug === input || (e.aliases ?? []).includes(input));
  return hit?.slug ?? input;
}

export function getEducation(slug: string) {
  const canonical = resolveEducationSlug(slug);
  return EDUCATION.find((e) => e.slug === canonical);
}

