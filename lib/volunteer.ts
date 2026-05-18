export type VolunteerItem = {
  slug: string;
  aliases?: string[];
  org: string;
  role: string;
  location?: string;
  start?: string;
  end?: string;
  summary: string;
  contributions: string[];
  impact?: string[];
  skills?: string[];
  links?: {
    website?: string;
  };
};

export const VOLUNTEER: VolunteerItem[] = [
  {
    slug: "Vancouver-Conservation-Campaign",
    aliases: ["volunteer"],
    org: "Conservative Party of British Columbia",
    role: "General Volunteer",
    location: "Vancouver, Canada",
    start: "2024",
    end: "2024",
    summary:
      "Volunteered with the BC Conservative Party during the 2024 provincial election, supporting voter registration drives, community outreach, and get-out-the-vote operations across Vancouver.",
    contributions: [
      "Canvassed door-to-door to engage voters and communicate party platform",
      "Conducted voter registration and assisted eligible voters in completing registration",
      "Coordinated transportation to polling stations on election day",
      "Attended campaign events and represented the party at community gatherings",
    ],
    impact: ["Helped the Conservative Party of British Columbia to win the election in 2024 by 10%"],
    skills: ["Communication", "Teamwork", "Leadership", "Public Speaking", "Event Planning", "Social Media", "Marketing", "Sales"],
  },
];

export function resolveVolunteerSlug(input: string) {
  const hit = VOLUNTEER.find((v) => v.slug === input || (v.aliases ?? []).includes(input));
  return hit?.slug ?? input;
}

export function getVolunteer(slug: string) {
  const canonical = resolveVolunteerSlug(slug);
  return VOLUNTEER.find((v) => v.slug === canonical);
}

