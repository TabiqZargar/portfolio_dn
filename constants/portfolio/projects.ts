import type {
  PortfolioProject,
  ProjectShowcaseComponent,
} from "@/constants/types"

export const portfolioProjects: PortfolioProject[] = [
  {
    type: "project",
    slug: "codescope-ai",
    title: "CodeScope AI",
    col: 1,
    order: 1,
    githubUrl: "https://github.com/TabiqZargar/CodeScope-AI",
    liveUrl: "https://code-scope-ai-inky.vercel.app/",
    media: [
      { type: "image", src: "/screenshots/codescope-ai.png", alt: "CodeScope AI overview", width: 1200, height: 800 },
    ],
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "AI Integration",
    ],
    description:
      "An AI-powered code analysis tool that scans repositories and provides insights on code quality, structure, and potential improvements. Built to help developers understand codebases faster through automated analysis.",
    challenges: [
      "Handling large `codebase scans` without blocking the UI or degrading response times.",
      "Presenting `AI-generated insights` in a scannable, developer-friendly format without overwhelming the interface.",
      "Managing `file tree navigation` alongside analysis results while keeping context across multiple files.",
    ],
    solutions: [
      "Implemented streaming responses with progressive `result rendering` to keep the interface responsive during analysis.",
      "Structured insights into categorized `analysis cards` with syntax highlighting, file references, and severity levels.",
      "Built a `split-pane layout` with synchronized file tree and detail view using shared state management.",
    ],
  },
  {
    type: "project",
    slug: "study-runtime",
    title: "Study Runtime",
    col: 2,
    order: 1,
    githubUrl: "https://github.com/TabiqZargar/Smart-Exam-Planner",
    liveUrl: "https://smart-exam-planner.vercel.app/",
    media: [
      { type: "image", src: "/screenshots/study-runtime.png", alt: "Study Runtime overview", width: 1200, height: 800 },
    ],
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "MongoDB",
      "Prisma",
    ],
    description:
      "A study planning and session management application that helps students organize their study schedule, track session progress, and maintain consistent study habits through structured runtime tracking.",
    challenges: [
      "Building a `session timer` that accurately tracks study time across browser tabs without losing state on navigation.",
      "Designing a `planning interface` that supports flexible scheduling without becoming visually cluttered.",
      "Persisting `session history` and progress data reliably across devices and sessions.",
    ],
    solutions: [
      "Used `Web Workers` and localStorage fallback to maintain timer accuracy across tab switches and page reloads.",
      "Created a `drag-and-drop schedule builder` with collapsible day views and inline editing.",
      "Implemented `Prisma + MongoDB` with optimistic updates for real-time progress syncing.",
    ],
  },
  {
    type: "project",
    slug: "gitscope",
    title: "GitScope",
    col: 1,
    order: 2,
    githubUrl: "https://github.com/TabiqZargar/GitScope",
    liveUrl: "https://git-scope-mu.vercel.app/",
    media: [
      { type: "image", src: "/screenshots/gitscope.png", alt: "GitScope overview", width: 1200, height: 800 },
    ],
    stack: [
      "React",
      "TypeScript",
      "GitHub API",
      "Tailwind CSS",
    ],
    description:
      "A GitHub repository analytics tool that visualizes contribution patterns, code frequency, and repository health metrics. Designed to give developers a quick overview of any public repository's activity and structure.",
    challenges: [
      "Aggregating `GitHub API data` across multiple endpoints without hitting rate limits or causing excessive loading states.",
      "Visualizing `contribution data` in meaningful charts that convey trends without requiring interpretation.",
      "Handling `repository metadata` for large repos with extensive commit histories efficiently.",
    ],
    solutions: [
      "Implemented `request batching` and caching layers to minimize API calls while keeping data fresh.",
      "Built `interactive charts` with tooltips and time-range selectors for contribution and code frequency views.",
      "Used `pagination` and lazy loading for commit history and file tree data to maintain performance.",
    ],
  },
  {
    type: "project",
    slug: "ascii-studio",
    title: "ASCII Studio",
    col: 2,
    order: 2,
    githubUrl: "https://github.com/TabiqZargar/Ascii-Studio",
    liveUrl: "https://ascii-studio-lovat.vercel.app/",
    media: [
      { type: "image", src: "/screenshots/ascii-studio.png", alt: "ASCII Studio overview", width: 659, height: 756 },
    ],
    stack: [
      "React",
      "TypeScript",
      "Canvas API",
      "Tailwind CSS",
    ],
    description:
      "A browser-based tool that converts images into ASCII art with customizable character sets, resolution settings, and export options. Built for creative exploration of character-based image representation.",
    challenges: [
      "Processing `image data` into ASCII characters in real-time without blocking the main thread.",
      "Providing `live preview` updates as users adjust resolution, character density, and contrast settings.",
      "Supporting `export formats` that preserve the ASCII layout for sharing and embedding.",
    ],
    solutions: [
      "Offloaded `pixel analysis` to a Web Worker to keep the UI responsive during conversion.",
      "Implemented `debounced updates` with canvas-based rendering for smooth live preview.",
      "Added `text and PNG export` with configurable dimensions and character spacing.",
    ],
  },
  {
    type: "project",
    slug: "cube-timer",
    title: "Cube Timer",
    col: 1,
    order: 3,
    githubUrl: "https://github.com/TabiqZargar/Cube",
    liveUrl: "https://tabiqzargar.github.io/Cube/",
    media: [
      { type: "image", src: "/screenshots/cube-timer.png", alt: "Cube Timer overview", width: 1689, height: 1920 },
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
    description:
      "A Rubik's cube solving timer with session tracking, solve history, and statistical analysis. Supports multiple timing methods and provides insights into solve time distribution and improvement trends.",
    challenges: [
      "Achieving `millisecond-accurate timing` that responds instantly to keyboard and touch input.",
      "Displaying `session statistics` that update in real-time as new solves are recorded.",
      "Managing `solve history` with consistent formatting across sessions.",
    ],
    solutions: [
      "Used `high-resolution timestamps` with requestAnimationFrame for frame-accurate timing.",
      "Built a `live stats panel` with mean, best, and session averages that recalculate on each solve.",
      "Implemented `localStorage persistence` with structured session objects for reliable history tracking.",
    ],
  },
  {
    type: "project",
    slug: "youtube-clone",
    title: "YouTube Clone",
    col: 2,
    order: 3,
    githubUrl: "https://github.com/TabiqZargar/Backend_yt",
    media: [
      { type: "image", src: "/screenshots/youtube-clone-cover.png", alt: "YouTube Clone overview", width: 1200, height: 800 },
    ],
    stack: [
      "JavaScript",
      "Node.js",
    ],
    description:
      "A backend service built with JavaScript for a YouTube-style video platform. Provides the API layer that powers video browsing, catalog data, and the playback experience for the YouTube Clone.",
    challenges: [
      "Replicating the `horizontal carousel` scroll behavior with smooth momentum and peek preview.",
      "Building a `search interface` that provides instant results without excessive API requests.",
      "Matching the `responsive layout` across desktop, tablet, and mobile viewports.",
    ],
    solutions: [
      "Implemented `CSS scroll snap` with JavaScript-enhanced navigation for smooth carousel scrolling.",
      "Added `debounced search` with result caching and skeleton loading states.",
      "Used `responsive grid` and breakpoint-aware component rendering for consistent cross-device layout.",
    ],
  },
]

export const portfolioShowcaseComponents: ProjectShowcaseComponent[] = [
  {
    type: "showcase",
    title: "Card Hover",
    stack: ["motion", "react"],
    media: {
      type: "component",
      componentKey: "card-hover",
      alt: "Interactive holographic card hover component",
    },
    col: 1,
    order: 4,
    xLink: "",
    prompt: "Create a reusable Holographic Referral Card component for an existing React + TypeScript codebase.",
  },
  {
    type: "showcase",
    title: "Theme Toggle",
    stack: [""],
    media: {
      type: "component",
      componentKey: "theme-toggle",
      alt: "theme toggle",
    },
    col: 1,
    order: 1,
    xLink: "",
  },
]
