/**
 * Mock data for Vibelearn Phase 2 (Frontend First).
 * Modeled strictly after docs/seed.ndjson and docs/videos.json.
 */

export const MOCK_COURSES = [
  {
    id: "course.nextjs-app-router-in-depth",
    slug: "nextjs-app-router-in-depth",
    title: "Next.js for Production",
    highlightWord: "Production",
    summary:
      "Build scalable, high-performance web applications with Next.js, best practices, and production-ready deployment strategies.",
    level: "Intermediate",
    duration: "18h 24m",
    moduleCount: 12,
    studentsCount: 3426,
    tag: "Popular",
    tagType: "popular",
    logo: "nextjs",
    color: "#000000",
    coverImageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    whatYoullLearn: [
      {
        id: "app-router",
        title: "App Router Foundations",
        description: "Master the App Router, layouts, loading states, and nested routing.",
        icon: "layers",
      },
      {
        id: "data-fetching",
        title: "Data Fetching & Caching",
        description: "Fetch data efficiently and leverage caching for better performance.",
        icon: "database",
      },
      {
        id: "performance",
        title: "Performance Optimization",
        description: "Optimize rendering, assets, and bundle size for faster apps.",
        icon: "speedometer",
      },
      {
        id: "deployment",
        title: "Deployment & Scaling",
        description: "Deploy with confidence and scale your Next.js applications.",
        icon: "cloud",
      },
    ],
    modules: [
      {
        id: "mod-1",
        position: 1,
        title: "Introduction to Next.js",
        summary: "Understand the core features of Next.js and why it's the modern React framework.",
        duration: "45m",
        lessons: [
          {
            id: "les-1-1",
            slug: "nextjs-app-router-in-depth-introduction",
            title: "Why Next.js & The App Router",
            duration: "20m",
            youtubeVideoId: "9602Yzvd7ik",
            isCompleted: true,
          },
          {
            id: "les-1-2",
            slug: "nextjs-app-router-in-depth-mental-model",
            title: "Client vs Server Components Mental Model",
            duration: "25m",
            youtubeVideoId: "rGPpQdbDbwo",
            isCompleted: true,
          },
        ],
      },
      {
        id: "mod-2",
        position: 2,
        title: "Project Setup & Structure",
        summary: "Set up a new Next.js project and explore the folder structure.",
        duration: "1h 12m",
        lessons: [
          {
            id: "les-2-1",
            slug: "nextjs-app-router-in-depth-file-system-routing",
            title: "File-System Routing Fundamentals",
            duration: "32m",
            youtubeVideoId: "9602Yzvd7ik",
            isCompleted: true,
          },
          {
            id: "les-2-2",
            slug: "nextjs-app-router-in-depth-colocation",
            title: "Component Colocation & Organization",
            duration: "40m",
            youtubeVideoId: "k48WMdl2eUc",
            isCompleted: true,
          },
        ],
      },
      {
        id: "mod-3",
        position: 3,
        title: "Routing & Layouts",
        summary: "Learn about file-based routing, layouts, and nested routes.",
        duration: "1h 36m",
        lessons: [
          {
            id: "les-3-1",
            slug: "nextjs-app-router-in-depth-layouts-and-templates",
            title: "Layouts, Templates & Route Groups",
            duration: "46m",
            youtubeVideoId: "k48WMdl2eUc",
            isCompleted: true,
          },
          {
            id: "les-3-2",
            slug: "nextjs-app-router-in-depth-dynamic-routes-and-params",
            title: "Dynamic Routes, Slug Params & Parallel Routes",
            duration: "50m",
            youtubeVideoId: "j3QJ1Rhxxbw",
            isCompleted: true,
          },
        ],
      },
      {
        id: "mod-4",
        position: 4,
        title: "Server Components",
        summary: "Build components with server-side rendering and zero-bundle size.",
        duration: "1h 42m",
        lessons: [
          {
            id: "les-4-1",
            slug: "nextjs-app-router-in-depth-server-components",
            title: "React Server Components Architecture",
            duration: "52m",
            youtubeVideoId: "rGPpQdbDbwo",
            isCompleted: true,
          },
          {
            id: "les-4-2",
            slug: "nextjs-app-router-in-depth-interleaving",
            title: "Interleaving Client and Server Components",
            duration: "50m",
            youtubeVideoId: "9602Yzvd7ik",
            isCompleted: true,
          },
        ],
      },
      {
        id: "mod-5",
        position: 5,
        title: "Data Fetching & Caching",
        summary: "Fetch data efficiently and leverage caching for better performance.",
        duration: "1h 28m",
        lessons: [
          {
            id: "les-5-1",
            slug: "nextjs-app-router-in-depth-fetching-in-server-components",
            title: "Fetching in Server Components",
            duration: "21m",
            youtubeVideoId: "rGPpQdbDbwo",
            isCompleted: false,
            overview:
              "In this lesson, you'll learn how Next.js handles data fetching and caching in both Server and Client Components. We'll explore different caching strategies and revalidation techniques to build fast and scalable applications.",
            keyPoints: [
              "Understand the different data fetching methods in Next.js",
              "Learn how caching works in Server Components",
              "Implement revalidation and cache control",
              "Optimize performance with advanced caching strategies",
            ],
            proTip:
              "Use caching and revalidation wisely to ensure your app stays fast and data remains fresh without unnecessary requests.",
            resources: [
              {
                title: "Next.js Data Fetching Documentation",
                description: "Official Next.js docs on data fetching methods.",
                url: "https://nextjs.org/docs/app/building-your-application/data-fetching",
                type: "doc",
              },
              {
                title: "Caching and Revalidation Guide",
                description: "Deep dive into Next.js caching strategies.",
                url: "https://nextjs.org/docs/app/building-your-application/caching",
                type: "book",
              },
              {
                title: "Example Repository",
                description: "Explore the source code for this lesson.",
                url: "https://github.com/vercel/next.js/tree/canary/examples",
                type: "github",
              },
            ],
            notes: `### Data Fetching in Next.js Server Components

Server Components in Next.js provide an async/await first approach to fetching data directly where it's used, with zero client-side JavaScript overhead for the fetching logic.

#### Key Principles:
1. **Direct Database & API Access:** Server components execute exclusively on the server, meaning sensitive secrets, API tokens, and database credentials remain secure.
2. **Parallel Fetching:** Initiate requests concurrently with \`Promise.all()\` to prevent sequential request waterfalls.
3. **Automatic Deduplication:** React extends the native \`fetch\` API to automatically memoize and deduplicate identical GET requests across the component tree during a single render pass.

\`\`\`javascript
// Example Server Component Data Fetch
async function ProductList() {
  const res = await fetch('https://api.example.com/products', {
    next: { revalidate: 3600 } // ISR: Cache for 1 hour
  });
  const products = await res.json();

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
\`\`\`

#### Caching Layers:
- **Request Memoization:** De-duplicates requests in a React component render tree.
- **Data Cache:** Persists HTTP responses across requests and deployments.
- **Full Route Cache:** Stores HTML and RSC payload at build or revalidation time.
- **Router Cache:** Client-side in-memory cache of route segments as the user navigates.`,
          },
          {
            id: "les-5-2",
            slug: "nextjs-app-router-in-depth-caching-strategies",
            title: "Caching Strategies",
            duration: "23m",
            youtubeVideoId: "k48WMdl2eUc",
            isCompleted: false,
          },
          {
            id: "les-5-3",
            slug: "nextjs-app-router-in-depth-revalidation",
            title: "Revalidation & Cache Control",
            duration: "18m",
            youtubeVideoId: "9602Yzvd7ik",
            isCompleted: false,
          },
          {
            id: "les-5-4",
            slug: "nextjs-app-router-in-depth-hands-on-caching",
            title: "Hands-on: Implement Caching",
            duration: "26m",
            youtubeVideoId: "j3QJ1Rhxxbw",
            isCompleted: false,
          },
        ],
      },
      {
        id: "mod-6",
        position: 6,
        title: "Authentication",
        summary: "Implement secure authentication using Clerk and middleware in your app.",
        duration: "1h 18m",
        lessons: [
          {
            id: "les-6-1",
            slug: "nextjs-app-router-in-depth-auth-setup",
            title: "Setting Up Clerk in Next.js",
            duration: "38m",
            youtubeVideoId: "9602Yzvd7ik",
            isCompleted: false,
          },
          {
            id: "les-6-2",
            slug: "nextjs-app-router-in-depth-protected-routes",
            title: "Protecting Routes and Server Actions",
            duration: "40m",
            youtubeVideoId: "rGPpQdbDbwo",
            isCompleted: false,
          },
        ],
      },
      {
        id: "mod-7",
        position: 7,
        title: "API Routes & Handlers",
        summary: "Create modern Route Handlers with Web Request/Response APIs.",
        duration: "1h 26m",
        lessons: [],
      },
      {
        id: "mod-8",
        position: 8,
        title: "Middleware & Edge Functions",
        summary: "Run fast logic before a request completes with Next.js middleware.",
        duration: "1h 10m",
        lessons: [],
      },
      {
        id: "mod-9",
        position: 9,
        title: "Performance Optimization",
        summary: "Optimize images, fonts, scripts, and bundle sizes for Core Web Vitals.",
        duration: "1h 34m",
        lessons: [],
      },
      {
        id: "mod-10",
        position: 10,
        title: "Deployment on Vercel",
        summary: "Deploy your Next.js application with zero-config edge delivery.",
        duration: "56m",
        lessons: [],
      },
      {
        id: "mod-11",
        position: 11,
        title: "Monitoring & Logging",
        summary: "Set up OpenTelemetry and error reporting in production.",
        duration: "1h 08m",
        lessons: [],
      },
      {
        id: "mod-12",
        position: 12,
        title: "Best Practices & Next Steps",
        summary: "Architecture checklist and roadmap for enterprise Next.js development.",
        duration: "52m",
        lessons: [],
      },
    ],
  },
  {
    id: "course.docker-essentials",
    slug: "devops-with-docker-and-kubernetes",
    title: "Docker Essentials",
    highlightWord: "Essentials",
    summary:
      "Containerize applications and streamline your development workflow from scratch to production.",
    level: "Beginner",
    duration: "10h 12m",
    moduleCount: 8,
    studentsCount: 2150,
    tag: "Popular",
    tagType: "popular",
    logo: "docker",
    color: "#0DB7ED",
    coverImageUrl: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1200&q=80",
    whatYoullLearn: [
      {
        id: "containers",
        title: "Container Foundations",
        description: "Understand cgroups, namespaces, and Docker daemon architecture.",
        icon: "layers",
      },
      {
        id: "dockerfile",
        title: "Writing Multi-Stage Dockerfiles",
        description: "Craft slim, secure production images for Node, Python, and Go.",
        icon: "code",
      },
      {
        id: "compose",
        title: "Docker Compose Multi-Service",
        description: "Orchestrate web apps, Postgres databases, and Redis caches locally.",
        icon: "database",
      },
      {
        id: "ci-cd",
        title: "CI/CD & Registry Deployment",
        description: "Automate image builds and deploy to cloud container hosts.",
        icon: "cloud",
      },
    ],
    modules: [
      {
        id: "dock-mod-1",
        position: 1,
        title: "Why Containers?",
        summary: "Moving beyond virtual machines to lightweight application isolation.",
        duration: "45m",
        lessons: [
          {
            id: "dock-1-1",
            slug: "docker-why-containers",
            title: "Container Fundamentals",
            duration: "20m",
            youtubeVideoId: "9602Yzvd7ik",
            isCompleted: false,
          },
        ],
      },
      {
        id: "dock-mod-2",
        position: 2,
        title: "Images, Containers & Registries",
        summary: "Pulling, running, inspecting, and managing containers with the Docker CLI.",
        duration: "1h 15m",
        lessons: [],
      },
    ],
  },
  {
    id: "course.typescript-deep-dive",
    slug: "typescript-for-application-developers",
    title: "TypeScript Deep Dive",
    highlightWord: "Deep Dive",
    summary:
      "Go beyond the basics and write safer, more expressive code with advanced types and patterns.",
    level: "Intermediate",
    duration: "14h 36m",
    moduleCount: 10,
    studentsCount: 1890,
    tag: "Trending",
    tagType: "trending",
    logo: "typescript",
    color: "#3178C6",
    coverImageUrl: "https://images.unsplash.com/photo-1516116211227-bbc13c744ef5?auto=format&fit=crop&w=1200&q=80",
    whatYoullLearn: [
      {
        id: "generics",
        title: "Advanced Generics & Constraints",
        description: "Build robust, reusable libraries with conditional types and infer keyword.",
        icon: "code",
      },
      {
        id: "discriminated",
        title: "Discriminated Unions",
        description: "Model state machines and domain logic with impossible states eliminated.",
        icon: "layers",
      },
      {
        id: "template-literals",
        title: "Template Literal Types",
        description: "Type safe routes, event buses, and internationalization strings.",
        icon: "sparkles",
      },
      {
        id: "type-narrowing",
        title: "Strict Type Narrowing & Guards",
        description: "Write runtime validation schemas that seamlessly infer TypeScript types.",
        icon: "speedometer",
      },
    ],
    modules: [
      {
        id: "ts-mod-1",
        position: 1,
        title: "Structural Typing vs Nominal Typing",
        summary: "How TypeScript's type system really computes type compatibility.",
        duration: "50m",
        lessons: [],
      },
    ],
  },
  {
    id: "course.react-performance-engineering",
    slug: "react-performance-engineering",
    title: "React Performance Engineering",
    highlightWord: "Engineering",
    summary:
      "Measure before you optimize. Master the React Profiler, render phases, and memory management.",
    level: "Advanced",
    duration: "12h 10m",
    moduleCount: 7,
    studentsCount: 1540,
    tag: "Popular",
    tagType: "popular",
    logo: "react",
    color: "#61DAFB",
    coverImageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=80",
    whatYoullLearn: [
      {
        id: "profiler",
        title: "React DevTools Profiler",
        description: "Identify unnecessary re-renders and commit phase bottlenecks.",
        icon: "speedometer",
      },
      {
        id: "memoization",
        title: "Pragmatic Memoization",
        description: "When to use useMemo, useCallback, and React Compiler optimizations.",
        icon: "code",
      },
    ],
    modules: [],
  },
  {
    id: "course.building-ai-apps-with-llms",
    slug: "building-ai-apps-with-llms",
    title: "Building AI Apps with LLMs",
    highlightWord: "LLMs",
    summary:
      "From first API call to a feature you can ship: prompting, structured outputs, streaming, and tool use.",
    level: "Intermediate",
    duration: "16h 40m",
    moduleCount: 9,
    studentsCount: 2840,
    tag: "Trending",
    tagType: "trending",
    logo: "ai",
    color: "#10B981",
    coverImageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    whatYoullLearn: [],
    modules: [],
  },
  {
    id: "course.postgresql-for-developers",
    slug: "postgresql-for-developers",
    title: "PostgreSQL for Developers",
    highlightWord: "Developers",
    summary:
      "SQL you will actually write in production: indexing strategies, query plans, and transactions.",
    level: "Intermediate",
    duration: "11h 20m",
    moduleCount: 8,
    studentsCount: 1720,
    tag: "Beginner",
    tagType: "level",
    logo: "database",
    color: "#336791",
    coverImageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80",
    whatYoullLearn: [],
    modules: [],
  },
];

/**
 * Search results mock representing both video lessons and module lessons
 * as seen on course-page.png
 */
export const MOCK_SEARCH_RESULTS = [
  {
    id: "res-1",
    type: "video",
    title: "Data Fetching in Server Components",
    courseTitle: "Next.js for Production",
    courseSlug: "nextjs-app-router-in-depth",
    lessonSlug: "nextjs-app-router-in-depth-fetching-in-server-components",
    description:
      "Learn how to fetch data on the server using async/await and Next.js best practices for better performance.",
    duration: "12:45",
    lessonTag: "Lesson 5.1",
    moduleTitle: "Data Fetching & Caching",
    logo: "nextjs",
    tag: "VIDEO",
    previewType: "code",
  },
  {
    id: "res-2",
    type: "video",
    title: "Fetching Data with useEffect",
    courseTitle: "React Complete Guide",
    courseSlug: "react-performance-engineering",
    lessonSlug: "react-fetching-useeffect",
    description:
      "Understand how to fetch data in React components using useEffect and handle loading states, errors, and cleanup.",
    duration: "08:32",
    lessonTag: "Lesson 7.2",
    moduleTitle: "Data Fetching & Caching",
    logo: "react",
    tag: "VIDEO",
    previewType: "code",
  },
  {
    id: "res-3",
    type: "video",
    title: "Building REST API & Fetching Data",
    courseTitle: "Node.js Backend Mastery",
    courseSlug: "devops-with-docker-and-kubernetes",
    lessonSlug: "nodejs-rest-api-fetching",
    description:
      "Create REST API endpoints and learn how clients fetch and consume data effectively.",
    duration: "15:18",
    lessonTag: "Lesson 3.4",
    moduleTitle: "API & Data Handling",
    logo: "nodejs",
    tag: "VIDEO",
    previewType: "diagram",
  },
  {
    id: "res-4",
    type: "lesson",
    title: "Data Fetching & Caching",
    courseTitle: "Next.js for Production",
    courseSlug: "nextjs-app-router-in-depth",
    lessonSlug: "nextjs-app-router-in-depth-fetching-in-server-components",
    description:
      "Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance.",
    bullets: ["Fetching strategies", "Caching techniques", "Revalidation methods"],
    moduleTag: "Module 5",
    logo: "nextjs",
    tag: "LESSON",
    previewType: "list",
  },
  {
    id: "res-5",
    type: "lesson",
    title: "Fetching Data in React",
    courseTitle: "React Complete Guide",
    courseSlug: "react-performance-engineering",
    lessonSlug: "react-fetching-useeffect",
    description:
      "Learn multiple ways to fetch data in React applications and handle different states.",
    bullets: ["Fetch with fetch API", "Axios in fetch", "Error handling"],
    moduleTag: "Module 7",
    logo: "react",
    tag: "LESSON",
    previewType: "list",
  },
  {
    id: "res-6",
    type: "video",
    title: "Fetch API Basics",
    courseTitle: "JavaScript Fundamentals",
    courseSlug: "typescript-for-application-developers",
    lessonSlug: "javascript-fetch-api-basics",
    description:
      "Introduction to the Fetch API, Promises, and handling JSON data in modern JavaScript.",
    duration: "06:41",
    lessonTag: "Lesson 4.3",
    moduleTitle: "Promises & Async/Await",
    logo: "javascript",
    tag: "VIDEO",
    previewType: "code",
  },
];

/**
 * LocalStorage-backed progress store for realistic UI interactions
 */
const STORAGE_KEY = "vibelearn_user_progress";

function getInitialProgress() {
  return {
    "nextjs-app-router-in-depth": {
      courseSlug: "nextjs-app-router-in-depth",
      progressPercent: 35,
      completedLessons: [
        "nextjs-app-router-in-depth-introduction",
        "nextjs-app-router-in-depth-mental-model",
        "nextjs-app-router-in-depth-file-system-routing",
        "nextjs-app-router-in-depth-colocation",
        "nextjs-app-router-in-depth-layouts-and-templates",
        "nextjs-app-router-in-depth-dynamic-routes-and-params",
        "nextjs-app-router-in-depth-server-components",
        "nextjs-app-router-in-depth-interleaving",
      ],
      completedModules: [1, 2, 3, 4],
      lastLessonSlug: "nextjs-app-router-in-depth-fetching-in-server-components",
      lastLessonTitle: "Fetching in Server Components",
      currentModuleIndex: 5,
    },
    "devops-with-docker-and-kubernetes": {
      courseSlug: "devops-with-docker-and-kubernetes",
      progressPercent: 15,
      completedLessons: ["docker-why-containers"],
      completedModules: [1],
      lastLessonSlug: "docker-why-containers",
      lastLessonTitle: "Container Fundamentals",
      currentModuleIndex: 2,
    },
  };
}

export function getUserProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = getInitialProgress();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    return JSON.parse(raw);
  } catch {
    return getInitialProgress();
  }
}

export function saveUserProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error("Failed to save progress", err);
  }
}

export function toggleLessonCompletion(courseSlug, lessonSlug) {
  const progress = getUserProgress();
  const courseProg = progress[courseSlug] || {
    courseSlug,
    progressPercent: 0,
    completedLessons: [],
    completedModules: [],
    lastLessonSlug: lessonSlug,
    currentModuleIndex: 1,
  };

  const isCompleted = courseProg.completedLessons.includes(lessonSlug);
  if (isCompleted) {
    courseProg.completedLessons = courseProg.completedLessons.filter((s) => s !== lessonSlug);
  } else {
    courseProg.completedLessons.push(lessonSlug);
  }

  // Find course total lessons to compute percentage
  const course = MOCK_COURSES.find((c) => c.slug === courseSlug);
  if (course) {
    let totalLessons = 0;
    course.modules.forEach((m) => {
      totalLessons += (m.lessons || []).length;
    });
    if (totalLessons > 0) {
      courseProg.progressPercent = Math.min(
        100,
        Math.round((courseProg.completedLessons.length / totalLessons) * 100)
      );
    }
  }

  progress[courseSlug] = courseProg;
  saveUserProgress(progress);
  return courseProg;
}
