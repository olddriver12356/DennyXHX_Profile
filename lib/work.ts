export type WorkItem = {
  slug: string;
  aliases?: string[];
  company: string;
  title: string;
  location?: string;
  start?: string;
  end?: string;
  summary: string;
  responsibilities: string[];
  impact?: string[];
  tech?: string[];
  links?: {
    website?: string;
  };
};

export const WORK: WorkItem[] = [
  {
    slug: "Investment-Analyst-Internship",
    aliases: ["work", "experience"],
    company: "ShanDong ZhongCheng Investment Management ltd.",
    title: "Investment Analyst Intern",
    location: "Taian, China",
    start: "2023 May",
    end: "2023 August",
    summary:
      "I was an investment analyst intern at ShanDong ZhongCheng Investment Management ltd. from 2023 May to 2023 August. I was able to learn about the Investment Analysis and Portfolio Management.",
    responsibilities: [
      "Read financial statements (income statement, balance sheet, cash flow)",
      "Analyze financial data and prepare reports",
      "Research and analyze investment opportunities",
      "Prepare investment proposals and presentations",
      "Assist with portfolio management and risk analysis",
      "Provide support for investment team and management",
      "Attend meetings and provide updates on investment activities",
    ],
    impact: ["Conducted comprehensive status analyses of 5+ corporate investment projects, supporting strategic decision-making and project optimization. ",
        "Performed investment cost estimations and ROI analyses, improving forecast accuracy by approximately 15% through iterative scenario modeling. ",
        "Collaborated with cross-functional teams of 6-8 members, maintaining high performance standards and incorporating feedback to enhance deliverable quality. "
    ],
    tech: ["Excel", "PowerPoint", "Word"],
  },
];

export function resolveWorkSlug(input: string) {
  const hit = WORK.find((w) => w.slug === input || (w.aliases ?? []).includes(input));
  return hit?.slug ?? input;
}

export function getWork(slug: string) {
  const canonical = resolveWorkSlug(slug);
  return WORK.find((w) => w.slug === canonical);
}

