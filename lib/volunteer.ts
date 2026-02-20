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
      "I was a general volunteer for the Conservative Party of British Columbia from 2024 to 2024. I was mainly responsible for the voter registration and voter outreach.",
    contributions: [
      "Register voters and outreach to potential voters",
      "Go door to door to promote the Conservative Party",
      "Drive people to the polling station",
      "Attend events and meetings to promote the Conservative Party",
      "Provide support for the Conservative Party",
      "Attend meetings and provide updates on the progress of the Conservative Party",
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

