/**
 * ─────────────────────────────────────────────────────────────────────────
 *  EDIT ME — this is the only file you need to touch to personalize the site.
 *  Everything (hero, about, projects, contact, SEO) reads from here.
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface Project {
  /** Project title. */
  name: string;
  /** One or two sentences describing what it is and why it's interesting. */
  description: string;
  /** Tech/tools used — rendered as little tags. */
  tech: string[];
  /** Live demo / website URL (optional). */
  link?: string;
  /** Source code URL, e.g. a GitHub repo (optional). */
  source?: string;
  /** Featured projects render as a large hero card; others as a grid. */
  featured?: boolean;
}

export interface SiteConfig {
  /** Your full name. */
  name: string;
  /** Short professional title, e.g. "Software Engineer". */
  role: string;
  /** A punchy one-liner shown big in the hero. */
  tagline: string;
  /** One or more paragraphs for the About section. */
  bio: string[];
  /** Skills / tools shown as tags in the About section. */
  skills: string[];
  socials: {
    github?: string;
    linkedin?: string;
    /** x.com / Twitter profile (optional). */
    twitter?: string;
    /**
     * Email, BASE64-ENCODED — so the plain address never appears in the built
     * HTML or this (public) repo, which keeps it away from automated scrapers.
     * It's turned into a `mailto:` link in the browser (see Layout.astro).
     * To change it: run `btoa('you@example.com')` in a browser console
     * (or `printf '%s' 'you@example.com' | base64`) and paste the result here.
     * Set to '' to hide email entirely. Never put the plain address here.
     */
    emailEncoded?: string;
  };
  projects: Project[];
  /** Used for the <title> tag and SEO. */
  siteTitle: string;
  /** Used for the meta description and social previews. */
  siteDescription: string;
}

export const site: SiteConfig = {
  // ── Identity ──────────────────────────────────────────────────────────
  name: 'Diego Arapović',
  role: 'Software Developer', // TODO: your real title

  tagline: 'I build clean, thoughtful software for the web.', // TODO

  // ── About (one string per paragraph) ──────────────────────────────────
  bio: [
    // TODO: replace with your own story.
    "Hi, I'm Diego — a developer who enjoys turning fuzzy ideas into polished, dependable products. I care about the details: fast load times, clear interfaces, and code that's a pleasure to maintain.",
    "When I'm not shipping, you'll find me exploring new tools, contributing to side projects, and learning whatever's just outside my comfort zone.",
  ],

  // ── Skills (shown as tags) ────────────────────────────────────────────
  skills: [
    // TODO: your actual stack
    'TypeScript',
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'HTML & CSS',
    'Git',
  ],

  // ── Links (leave a field out or empty to hide it) ─────────────────────
  socials: {
    github: 'https://github.com/your-username', // TODO
    linkedin: 'https://www.linkedin.com/in/your-handle', // TODO
    // twitter: 'https://x.com/your-handle',
    emailEncoded: 'ZGllZ28uYXJhcG92aWNAZ21haWwuY29t', // base64 — never store the plain address
  },

  // ── Projects ──────────────────────────────────────────────────────────
  projects: [
    {
      // TODO: your real project
      name: 'My Project',
      description:
        'A short, compelling description of what you built, the problem it solves, and what makes it special. Aim for one or two punchy sentences.',
      tech: ['TypeScript', 'React', 'Tailwind CSS'],
      link: 'https://example.com', // live demo (optional)
      source: 'https://github.com/your-username/your-project', // repo (optional)
      featured: true,
    },
    // Add more projects here — non-featured ones appear in a grid below.
  ],

  // ── SEO ───────────────────────────────────────────────────────────────
  siteTitle: 'Diego Arapović — Software Developer',
  siteDescription:
    'Personal site and project portfolio of Diego Arapović, a software developer.',
};
