export const site = {
  name: "Syed Shaida Hussain",
  title: "Full-Stack Developer",
  role: "Full-Stack Developer",
  location: "India",
  email: "syedshaida59991@gmail.com",
  github: "https://github.com/syed-shaida-hussain",
  linkedin: "https://linkedin.com/in/syed-shaida-hussain",
  url: "https://shaida-portfolio.vercel.app",
  tagline:
    "I build production-ready, scalable web applications.",
  description:
    "Full-Stack Developer building modern, high-performance web applications with React, Next.js, Node.js, PostgreSQL, MongoDB, and Prisma.",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export type SkillCategory = {
  id: string;
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Redux",
      "Redux Toolkit",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT", "NextAuth"],
  },
  {
    id: "database",
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    id: "tools",
    title: "Tools & Other",
    skills: [
      "Git",
      "Axios",
      "Web Accessibility",
      "SEO",
      "SSR",
      "Google Search Console",
    ],
  },
];

export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    id: "sd",
    role: "Software Developer",
    company: "Almuqeet Systems",
    period: "October 2025 — Present",
    type: "Full-time",
    points: [
      "Contributed to a production-level unified chat system integrating Telegram and WhatsApp, improving cross-platform communication efficiency by 30%.",
      "Developed and refactored reusable React components while modernizing legacy jQuery code.",
      "Used Redux Toolkit to optimize state management and reduce unnecessary re-renders by 30%.",
      "Improved accessibility, responsiveness, and frontend performance for 1000+ active users.",
    ],
  },
  {
    id: "intern",
    role: "Software Developer Intern",
    company: "Almuqeet Systems",
    period: "August 2025 — October 2025",
    type: "Internship",
    points: [
      "Built UI for a unified Telegram + WhatsApp chat platform, from component design to integration.",
      "Integrated REST APIs for message synchronization, file handling, and chat management.",
      "Focused on accessibility, performance optimization, and responsive development across devices.",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
    {
    id: "kashmeet",
    name: "KashMeet",
    tagline: "Kashmiri language learning platform",
    description:
      "A full-stack platform connecting learners with native tutors for live, one-on-one Kashmiri language lessons, with integrated scheduling, notifications, and session storage.",
    stack: [
      "Next.js",
      "Google Drive API",
      "API Routes",
      "Nodemailer",
      "Auth & Sessions",
    ],
    highlights: [
      "Google Drive API integration for resource storage and sharing",
      "Automated transactional email flows via Nodemailer",
      "Custom authentication and session management",
    ],
    live: "https://kashmeet.com",
  },
  {
    id: "discover-kashmir",
    name: "Discover Kashmir",
    tagline: "Travel & exploration platform",
    description:
      "A full-stack platform showcasing Kashmir's culture, landscapes, and destinations with a dynamic content management system, role-based access control, and optimized SEO and performance.",
    stack: ["Next.js", "MERN Stack", "Custom CMS", "SSR", "SEO"],
    highlights: [
      "Custom CMS for editorial content management",
      "Authentication with role-based access control",
      "Server-side rendering for fast, SEO-optimized pages",
    ],
    github: "https://github.com/syed-shaida-hussain/discover-kashmir",
    live: "https://discover-kashmir.vercel.app/",
  }
];

export type Capability = {
  id: string;
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    id: "frontend-eng",
    title: "Frontend Engineering",
    description:
      "Building responsive, accessible interfaces with React and Next.js, backed by clean component architecture and predictable state.",
  },
  {
    id: "backend-eng",
    title: "Backend Engineering",
    description:
      "Designing APIs, authentication systems, and business logic that hold up under real production traffic.",
  },
  {
    id: "database-arch",
    title: "Database & Architecture",
    description:
      "Working with PostgreSQL, MongoDB, and Prisma to design scalable, maintainable application structures.",
  },
  {
    id: "performance-seo",
    title: "Performance & SEO",
    description:
      "SSR, metadata optimization, accessibility, and technical SEO that gets pages found and keeps them fast.",
  },
  {
    id: "integration",
    title: "Integration",
    description:
      "Connecting third-party APIs and services — Google APIs, messaging platforms, and transactional email systems.",
  },
];

export const education = {
  school: "Cluster University Srinagar",
  degree: "BS in Information Technology",
  period: "March 2020 — November 2023",
  cgpa: "8.3 / 10",
};
