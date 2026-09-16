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
  /** Project page, report, or demo URL (optional). Makes the tile clickable. */
  link?: string;
  /** Text for the project link, e.g. 'Read thesis'. */
  linkLabel?: string;
  /** Source code URL, e.g. a GitHub repo (optional). */
  source?: string;
  /**
   * Optional looping video for the tile (path in /public, e.g. '/projects/demo.mp4').
   * Plays muted on a loop when visible. Takes priority over `image`.
   */
  video?: string;
  /** Optional still image for the tile — also used as the poster for `video` (path in /public). */
  image?: string;
  /** Description of the image for screen readers. */
  imageAlt?: string;
  /** Use 'contain' for diagrams that should be displayed without cropping. */
  imageFit?: 'cover' | 'contain';
}

export interface SiteConfig {
  /** Your full name. */
  name: string;
  /** Optional headshot shown in the hero (path in /public, e.g. '/me.jpg'). Set '' to hide. */
  avatar?: string;
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
  name: 'Diego Arapovic',
  avatar: '/diego-arapovic.jpg',
  role: 'MSc Computer Science @ ETH Zürich',

  tagline: 'I work on machine learning for intelligent systems that perceive, reason, and act in the physical world.',

  // ── About (one string per paragraph) ──────────────────────────────────
  bio: [
    "Right now I'm working on object manipulation with robotics arms at the ETH Robotics Club. I did my Master's thesis on long-sequence modeling for autonomous drone racing at UZH's Robotics and Perception Group. Earlier work spans reproducible ML pipelines, shielded reinforcement-learning agents for autonomous driving. Previously I worked in product-engineering at Scandit and a software-engineering at Ergon Informatik. Based in Zürich.",
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
      name: 'Robotic Object Manipulation',
      description:
        'Ongoing work on object manipulation with robotic arms at the ETH Robotics Club.',
      tech: ['Robotics', 'Object Manipulation'],
      link: 'https://www.linkedin.com/company/eth-robotics-club/home/',
      linkLabel: 'ETH Robotics Club',
      video: '/projects/robot-arms.mp4',
      image: '/projects/robot-arms.webp',
    },
    {
      name: 'Long-Sequence Modeling for Drone Racing',
      description:
        "My Master's thesis at UZH's Robotics and Perception Group (RPG), exploring long-sequence models for autonomous drone racing.",
      tech: ['Sequence Modeling', 'Deep Learning', 'Robotics', 'Python'],
      link: 'https://drive.google.com/file/d/1x4H_ZR0AcaHewGWfRVmborCFS7BRGFel/view?usp=sharing',
      linkLabel: 'Read thesis',
      image: '/projects/drone-racing.webp',
      imageAlt: 'Illuminated drone trajectories around an indoor racing course.',
      imageFit: 'contain',
    },
    {
      name: 'Safe Reinforcement Learning for Autonomous Driving',
      description:
        "Semester thesis at KU Leuven's DTAI lab: researched and tested RL agents for autonomous driving, demonstrating the advantages of shielded PPO, and parallelized training and evaluation across GPUs to cut experiment time.",
      tech: ['Reinforcement Learning', 'Shielded PPO', 'Autonomous Driving'],
      link: 'https://drive.google.com/file/d/1Tgz242ySZcX6XUMiHYIeBVVbwwP9rAdI/view?usp=sharing',
      linkLabel: 'Read thesis',
      video: '/projects/driving.mp4',
      image: '/projects/driving.webp',
    },
    {
      name: 'Vision Transformer Explainability',
      description:
        'An interactive blog and demo introducing a novel adaptation of activation maximization for the attention scores of ViT attention heads — peer-reviewed and presented at an academic conference.',
      tech: ['Vision Transformers', 'Explainability', 'Deep Learning'],
      link: 'https://explainability-vit.ivia.ch/',
      linkLabel: 'Explore the demo',
      image: '/projects/vit-explainability.webp',
      imageAlt: 'Vision Transformer encoder diagram showing attention heads across twelve transformer blocks.',
      imageFit: 'contain',
    },
    {
      name: 'RACER — Road Analysis through Clustering & Enhanced Reconstruction',
      description:
        'An ensemble-learning workflow with pre-training and fine-tuning over large, cleaned image datasets, plus end-to-end scripts for reproducible data prep, training, and evaluation.',
      tech: ['Ensemble Learning', 'Computer Vision', 'Python'],
      link: 'https://drive.google.com/file/d/1aSRhWOmBKhxDZlanElIwAMMR6KlBVak4/view?usp=sharing',
      linkLabel: 'Read report',
      image: '/projects/satellite-images.webp',
      imageAlt: 'Satellite image tiles showing roads, buildings, and vegetation.',
      imageFit: 'contain',
    },
    {
      name: 'Datathon — RAG from Scratch',
      description:
        'Built a retrieval-augmented generation system from scratch during a two-day data-science hackathon, placing 4th at the ETH Analytics Club Datathon.',
      tech: ['RAG', 'LLMs', 'Python'],
      image: '/projects/datathon.webp',
      imageAlt: 'Team members working together at the Analytics Club Datathon 2025.',
    },
  ],

  // ── SEO ───────────────────────────────────────────────────────────────
  siteTitle: 'Diego Arapovic — Machine Learning & Computer Science',
  siteDescription:
    "Personal site of Diego Arapovic — a Computer Science Master's student at ETH Zürich working on machine learning, reinforcement learning, and computer vision.",
};
