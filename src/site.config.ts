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
  /**
   * Optional looping video for the tile (path in /public, e.g. '/projects/demo.mp4').
   * Autoplays muted, on a loop. Takes priority over `image`.
   */
  video?: string;
  /** Optional still image for the tile — also used as the poster for `video` (path in /public). */
  image?: string;
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
  role: 'MSc Computer Science @ ETH Zürich',

  tagline: 'I build machine-learning systems — and dig into the math that makes them work.',

  // ── About (one string per paragraph) ──────────────────────────────────
  bio: [
    "I'm a Computer Science Master's student at ETH Zürich, focused on machine learning. My work runs across software engineering, model training, simulations, and computer vision — with a particular pull toward reinforcement learning, deep learning, and the mathematical foundations that make them tick.",
    "Right now I'm writing my Master's thesis on long-sequence modeling for autonomous drone racing at UZH's Robotics and Perception Group. Earlier work spans reproducible ML pipelines, shielded reinforcement-learning agents for autonomous driving, and software shipped to thousands of users — across a product-engineering role at Scandit and a software-engineering internship at Ergon Informatik. Based in Zürich.",
  ],

  // ── Skills (shown as tags) ────────────────────────────────────────────
  skills: [
    'Python',
    'C++',
    'PyTorch',
    'JAX',
    'scikit-learn',
    'Java',
    'Haskell',
    'Git',
    'Linux',
    'Bash',
    'CI/CD',
  ],

  // ── Links (leave a field out or empty to hide it) ─────────────────────
  socials: {
    github: 'https://github.com/diego-arapovic',
    linkedin: 'https://www.linkedin.com/in/diegoarapovic',
    // twitter: 'https://x.com/your-handle',
    emailEncoded: 'ZGllZ28uYXJhcG92aWNAZ21haWwuY29t', // base64 — never store the plain address
  },

  // ── Projects ──────────────────────────────────────────────────────────
  projects: [
    {
      name: 'Long-Sequence Modeling for Drone Racing',
      description:
        "My Master's thesis at UZH's Robotics and Perception Group (RPG), exploring long-sequence models for autonomous drone racing.",
      tech: ['Sequence Modeling', 'Deep Learning', 'Robotics', 'Python'],
    },
    {
      name: 'Safe Reinforcement Learning for Autonomous Driving',
      description:
        "Semester thesis at KU Leuven's DTAI lab: researched and tested RL agents for autonomous driving, demonstrating the advantages of shielded PPO, and parallelized training and evaluation across GPUs to cut experiment time.",
      tech: ['Reinforcement Learning', 'Shielded PPO', 'Autonomous Driving'],
    },
    {
      name: 'Vision Transformer Explainability',
      description:
        'An interactive blog and demo introducing a novel adaptation of activation maximization for the attention scores of ViT attention heads — peer-reviewed and presented at an academic conference.',
      tech: ['Vision Transformers', 'Explainability', 'Deep Learning'],
    },
    {
      name: 'RACER — Road Analysis through Clustering & Enhanced Reconstruction',
      description:
        'An ensemble-learning workflow with pre-training and fine-tuning over large, cleaned image datasets, plus end-to-end scripts for reproducible data prep, training, and evaluation.',
      tech: ['Ensemble Learning', 'Computer Vision', 'Python'],
    },
    {
      name: 'Datathon — RAG from Scratch',
      description:
        'Built a retrieval-augmented generation system from scratch during a two-day data-science hackathon, placing 4th at the ETH Analytics Club Datathon.',
      tech: ['RAG', 'LLMs', 'Python'],
    },
  ],

  // ── SEO ───────────────────────────────────────────────────────────────
  siteTitle: 'Diego Arapović — Machine Learning & Computer Science',
  siteDescription:
    "Personal site of Diego Arapović — a Computer Science Master's student at ETH Zürich working on machine learning, reinforcement learning, and computer vision.",
};
