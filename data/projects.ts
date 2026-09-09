// ─────────────────────────────────────────────────────────
// Add a new project any time by adding another object to
// this array. The Projects page picks it up automatically —
// no other file needs to change.
//
// "metric" is the small stat shown top-right of the card
// (e.g. "5 tables", "3 dashboards") — optional, omit if none.
// "chart" controls the small decorative visual: "bar" | "line" | "donut"
// ─────────────────────────────────────────────────────────

export type Project = {
  id: string;
  title: string;
  period: string;
  description: string;
  stack: string[];
  metric?: string;
  chart: "bar" | "line" | "donut";
  link?: string;
};

export const projects: Project[] = [
  {
    id: "marketing-intelligence-dashboard",
    title: "Marketing Intelligence Dashboard",
    period: "Experion Technologies · 2026",
    description:
      "Multi-page Power BI dashboard for a Global Marketing Team, with Power Query/DAX transformations and scheduled auto-refresh so stakeholders always see live data.",
    stack: ["Power BI", "Power Query", "DAX"],
    metric: "Multi-page",
    chart: "bar",
  },
  {
    id: "hawkins-wheels",
    title: "Hawkins Wheels — Vehicle Rental Management System",
    period: "Academic Project",
    description:
      "End-to-end rental management system with booking, inventory and billing workflows, built on VB.NET with a SQL Server backend.",
    stack: ["VB.NET", "SQL Server"],
    metric: "Full CRUD",
    chart: "donut",
    link: "https://github.com/kasitpm",
  },
  {
    id: "adaptive-vehicle-lighting",
    title: "Adaptive Vehicle Lighting — Dual-LDR Embedded System",
    period: "Conference Paper · ICCI 2026",
    description:
      "Research on a dual-LDR embedded system for adaptive vehicle lighting, presented at the International Conference in collaboration with global partners.",
    stack: ["Embedded Systems", "Research"],
    chart: "line",
  },
  {
    id: "navic-gnss",
    title: "Exploring India's Indigenous GNSS (NavIC)",
    period: "Paper · Vidyarthi Vichar, Feb 2026",
    description:
      "A study on NavIC's evolution, current challenges and future potential as India's indigenous satellite navigation system.",
    stack: ["Research", "GNSS"],
    chart: "line",
  },
];
