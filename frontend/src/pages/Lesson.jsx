import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import VideoPlayer from '../components/lesson/VideoPlayer';
import LessonSidebar from '../components/lesson/LessonSidebar';
import {
  ClockIcon,
  SignalIcon,
  UsersIcon,
  BookmarkIcon,
  CheckIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  FlaskIcon,
  LightbulbIcon,
  BookIcon,
  ExternalLinkIcon,
  GitHubIcon,
  BarsIcon,
  XIcon,
} from '../components/ui/Icons';
import {
  MOCK_COURSES,
  getUserProgress,
  toggleLessonCompletion,
} from '../data/mockData';

export default function Lesson() {
  const { courseSlug, lessonSlug } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState('content'); // 'content' | 'notes'
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [codeLabOpen, setCodeLabOpen] = useState(false);

  // Target course
  const course =
    MOCK_COURSES.find((c) => c.slug === courseSlug) || MOCK_COURSES[0];

  // Find target lesson
  let targetLesson = null;
  let targetModule = null;

  for (const mod of course.modules) {
    const found = mod.lessons?.find((l) => l.slug === lessonSlug);
    if (found) {
      targetLesson = found;
      targetModule = mod;
      break;
    }
  }

  // Fallback if not found
  if (!targetLesson) {
    targetModule = course.modules[4] || course.modules[0];
    targetLesson = targetModule.lessons[0];
  }

  // User progress state
  const [progressState, setProgressState] = useState(() => getUserProgress());
  const courseProg = progressState[course.slug] || {
    progressPercent: 35,
    completedLessons: [],
  };

  const isCurrentCompleted = courseProg.completedLessons?.includes(targetLesson.slug);

  const handleToggleComplete = () => {
    const updated = toggleLessonCompletion(course.slug, targetLesson.slug);
    setProgressState({ ...progressState, [course.slug]: updated });
  };

  // Find next and previous lessons
  const allLessons = course.modules.flatMap((m) =>
    (m.lessons || []).map((l) => ({ ...l, moduleTitle: m.title }))
  );
  const currentIndex = allLessons.findIndex((l) => l.slug === targetLesson.slug);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson =
    currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return (
    <div className="flex h-[calc(100vh-72px)] overflow-hidden relative">
      {/* 1. Desktop & Mobile Drawer Sidebar */}
      <div className="hidden lg:block h-full">
        <LessonSidebar
          course={course}
          currentLessonSlug={targetLesson.slug}
          completedLessons={courseProg.completedLessons || []}
          progressPercent={courseProg.progressPercent}
        />
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-xs"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="relative w-80 max-w-[85vw] bg-white h-full shadow-2xl z-10">
            <div className="p-3 flex justify-end border-b border-neutral-100">
              <button
                type="button"
                onClick={() => setMobileSidebarOpen(false)}
                className="p-1 text-neutral-500 hover:text-neutral-900"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <LessonSidebar
              course={course}
              currentLessonSlug={targetLesson.slug}
              completedLessons={courseProg.completedLessons || []}
              progressPercent={courseProg.progressPercent}
              onCloseMobile={() => setMobileSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      {/* 2. Main Content Scroll Area */}
      <main className="flex-1 overflow-y-auto flex flex-col justify-between">
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          {/* Mobile Sidebar Trigger & Breadcrumb bar */}
          <div className="flex items-center justify-between gap-4">
            <nav className="flex items-center gap-2 text-xs text-neutral-500 font-medium truncate">
              <Link to="/" className="hover:text-primary-600 transition-colors">
                ⌂
              </Link>
              <span>&gt;</span>
              <Link to="/courses" className="hover:text-primary-600 transition-colors">
                All Courses
              </Link>
              <span>&gt;</span>
              <Link
                to={`/courses/${course.slug}`}
                className="hover:text-primary-600 transition-colors truncate"
              >
                {course.title}
              </Link>
              <span>&gt;</span>
              <span className="text-neutral-900 font-semibold truncate">
                {targetModule?.title || 'Lesson'}
              </span>
            </nav>

            <button
              type="button"
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden flex items-center gap-1.5 text-xs font-semibold text-primary-600 bg-primary-50 px-3 py-1.5 rounded-md border border-primary-200"
            >
              <BarsIcon className="w-4 h-4" />
              <span>Curriculum</span>
            </button>
          </div>

          {/* Lesson Header */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Badge type="lesson">LESSON {targetModule?.position}.1</Badge>
              <button
                type="button"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="p-2 text-neutral-400 hover:text-primary-600 rounded-md transition-colors"
                title="Bookmark Lesson"
              >
                <BookmarkIcon
                  className={`w-5 h-5 ${isBookmarked ? 'text-primary-600' : ''}`}
                  filled={isBookmarked}
                />
              </button>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
              {targetLesson.title.split('&')[0]}
              {targetLesson.title.includes('&') && (
                <>
                  &{' '}
                  <span className="text-primary-500">
                    {targetLesson.title.split('&')[1]}
                  </span>
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-3xl">
              {targetLesson.overview ||
                targetModule?.summary ||
                'Learn how Next.js handles data fetching and caching in both Server and Client Components.'}
            </p>

            {/* Metadata row */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-500 font-medium pt-1">
              <div className="flex items-center gap-1.5">
                <ClockIcon className="w-4 h-4 text-neutral-400" />
                <span>{targetLesson.duration || '21m'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <SignalIcon className="w-4 h-4 text-neutral-400" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <UsersIcon className="w-4 h-4 text-neutral-400" />
                <span>{course.studentsCount.toLocaleString()} students</span>
              </div>
            </div>
          </div>

          {/* 3. 16:9 YouTube Video Player */}
          <div className="pt-2">
            <VideoPlayer
              videoId={targetLesson.youtubeVideoId}
              title={targetLesson.title}
            />
          </div>

          {/* 4. Tab Navigation (Lesson Content vs Notes) */}
          <div className="border-b border-neutral-200">
            <div className="flex items-center gap-8">
              <button
                type="button"
                onClick={() => setActiveTab('content')}
                className={`pb-3 text-sm font-bold tracking-wide transition-all relative cursor-pointer ${
                  activeTab === 'content'
                    ? 'text-primary-600'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                Lesson Content
                {activeTab === 'content' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('notes')}
                className={`pb-3 text-sm font-bold tracking-wide transition-all relative cursor-pointer ${
                  activeTab === 'notes'
                    ? 'text-primary-600'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                Notes
                {activeTab === 'notes' && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full" />
                )}
              </button>
            </div>
          </div>

          {/* 5. Tab Content: Lesson Content */}
          {activeTab === 'content' && (
            <div className="space-y-8 py-2">
              {/* Overview Section */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-neutral-900">Overview</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {targetLesson.overview ||
                    "In this lesson, you'll learn how Next.js handles data fetching and caching in both Server and Client Components. We'll explore different caching strategies and revalidation techniques to build fast and scalable applications."}
                </p>
              </div>

              {/* Session Code Lab Banner */}
              <div className="bg-[#ECFDF5] border border-primary-200 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 mt-0.5">
                    <FlaskIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-neutral-900">
                        Session Code Lab
                      </h4>
                      <span className="bg-primary-200/60 text-primary-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                        Interactive
                      </span>
                    </div>
                    <p className="text-xs text-neutral-600 mt-1 max-w-xl leading-relaxed">
                      Open the code lab below to practice what you've learned. Write your code, see instant feedback, and build real features!
                    </p>
                  </div>
                </div>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setCodeLabOpen(!codeLabOpen)}
                  className="shrink-0 whitespace-nowrap"
                >
                  {codeLabOpen ? 'Close Lab' : 'Open Lab →'}
                </Button>
              </div>

              {/* Code Lab Interactive Panel (Toggleable) */}
              {codeLabOpen && (
                <div className="bg-neutral-900 text-neutral-100 rounded-xl p-5 border border-neutral-800 font-mono text-xs shadow-xl space-y-3">
                  <div className="flex items-center justify-between border-b border-neutral-800 pb-2">
                    <span className="text-emerald-400 font-bold">● app/products/page.jsx</span>
                    <span className="text-neutral-500 text-[11px]">Interactive Workspace</span>
                  </div>
                  <pre className="overflow-x-auto text-neutral-300 py-2">
{`export default async function ProductsPage() {
  // 1. Fetch data on the server with Next.js cache revalidation
  const res = await fetch('https://api.vibelearn.dev/products', {
    next: { revalidate: 60 }
  });
  const products = await res.json();

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Catalog ({products.length})</h1>
      {/* Render products */}
    </main>
  );
}`}
                  </pre>
                  <p className="text-[11px] text-neutral-400 pt-2 border-t border-neutral-800">
                    💡 Server Components allow direct server-side data fetching without useEffect or client bundles.
                  </p>
                </div>
              )}

              {/* In this lesson you will list */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-neutral-900">
                  In this lesson you will:
                </h4>
                <div className="space-y-2">
                  {(
                    targetLesson.keyPoints || [
                      'Understand the different data fetching methods in Next.js',
                      'Learn how caching works in Server Components',
                      'Implement revalidation and cache control',
                      'Optimize performance with advanced caching strategies',
                    ]
                  ).map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-500 text-white flex items-center justify-center shrink-0 mt-0.5">
                        <CheckIcon className="w-3 h-3" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm text-neutral-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pro Tip Box */}
              <div className="bg-primary-50/60 border border-primary-200 rounded-xl p-4 flex items-start gap-3.5">
                <div className="text-primary-600 shrink-0 mt-0.5">
                  <LightbulbIcon className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-primary-700">
                    Pro Tip
                  </h5>
                  <p className="text-xs sm:text-sm text-neutral-700 mt-1 leading-relaxed">
                    {targetLesson.proTip ||
                      'Use caching and revalidation wisely to ensure your app stays fast and data remains fresh without unnecessary requests.'}
                  </p>
                </div>
              </div>

              {/* Resources */}
              <div className="space-y-4">
                <h4 className="text-base font-bold text-neutral-900">Resources</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Resource 1 */}
                  <a
                    href="https://nextjs.org/docs"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white border border-neutral-200 rounded-lg p-4 shadow-xs hover:border-primary-400 transition-colors flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <BookIcon className="w-5 h-5 text-primary-600" />
                        <ExternalLinkIcon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-primary-500" />
                      </div>
                      <h5 className="text-xs font-bold text-neutral-900 mb-1">
                        Next.js Documentation
                      </h5>
                      <p className="text-[11px] text-neutral-500 line-clamp-2">
                        Official guides on data fetching and caching.
                      </p>
                    </div>
                  </a>

                  {/* Resource 2 */}
                  <a
                    href="https://nextjs.org/docs/app/building-your-application/caching"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white border border-neutral-200 rounded-lg p-4 shadow-xs hover:border-primary-400 transition-colors flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <BookIcon className="w-5 h-5 text-primary-600" />
                        <ExternalLinkIcon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-primary-500" />
                      </div>
                      <h5 className="text-xs font-bold text-neutral-900 mb-1">
                        Caching Guide
                      </h5>
                      <p className="text-[11px] text-neutral-500 line-clamp-2">
                        Deep dive into Next.js caching architecture.
                      </p>
                    </div>
                  </a>

                  {/* Resource 3 */}
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-white border border-neutral-200 rounded-lg p-4 shadow-xs hover:border-primary-400 transition-colors flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <GitHubIcon className="w-5 h-5 text-neutral-800" />
                        <ExternalLinkIcon className="w-3.5 h-3.5 text-neutral-400 group-hover:text-primary-500" />
                      </div>
                      <h5 className="text-xs font-bold text-neutral-900 mb-1">
                        Example Repository
                      </h5>
                      <p className="text-[11px] text-neutral-500 line-clamp-2">
                        Explore the code samples for this lesson.
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* 6. Tab Content: Notes */}
          {activeTab === 'notes' && (
            <div className="bg-white border border-neutral-200 rounded-xl p-6 shadow-xs space-y-4 prose prose-emerald max-w-none text-neutral-800">
              <h3 className="text-xl font-bold text-neutral-900 border-b border-neutral-100 pb-3">
                Lesson Notes: {targetLesson.title}
              </h3>
              <div className="text-sm leading-relaxed space-y-3 whitespace-pre-wrap">
                {targetLesson.notes ||
                  `Data fetching in modern React frameworks runs securely on the server.
By eliminating waterfalls and leveraging built-in request deduplication, Server Components maximize rendering performance without adding bytes to the client bundle.`}
              </div>
            </div>
          )}
        </div>

        {/* 7. Bottom Navigation Bar */}
        <div className="sticky bottom-0 bg-white border-t border-neutral-200 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4 shadow-lg z-30">
          <div>
            {prevLesson ? (
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  navigate(`/courses/${course.slug}/lessons/${prevLesson.slug}`)
                }
                className="gap-2"
              >
                <ArrowLeftIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Previous Lesson</span>
              </Button>
            ) : (
              <div />
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Mark as Complete Toggle */}
            <Button
              variant={isCurrentCompleted ? 'secondary' : 'outline'}
              size="sm"
              onClick={handleToggleComplete}
              className="gap-1.5"
            >
              <CheckIcon
                className={`w-4 h-4 ${isCurrentCompleted ? 'text-primary-600' : 'text-neutral-400'}`}
                strokeWidth={isCurrentCompleted ? 3 : 2}
              />
              <span>{isCurrentCompleted ? 'Completed' : 'Mark as Complete'}</span>
            </Button>

            {/* Next Lesson Button */}
            {nextLesson ? (
              <Button
                variant="primary"
                size="sm"
                onClick={() =>
                  navigate(`/courses/${course.slug}/lessons/${nextLesson.slug}`)
                }
                className="gap-2"
              >
                <span>Next Lesson</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </Button>
            ) : (
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate('/my-learning')}
              >
                Go to Dashboard →
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
