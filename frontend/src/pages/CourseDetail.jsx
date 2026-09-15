import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ModuleAccordion from '../components/course/ModuleAccordion';
import ProgressBar from '../components/ui/ProgressBar';
import {
  ClockIcon,
  BookIcon,
  UsersIcon,
  SignalIcon,
  BookmarkIcon,
  PlayIcon,
  LightbulbIcon,
  LayersIcon,
  DatabaseIcon,
  SpeedometerIcon,
  CloudIcon,
  CodeIcon,
  SparklesIcon,
  ChevronDownIcon,
  CourseLogo,
} from '../components/ui/Icons';
import { MOCK_COURSES, getUserProgress } from '../data/mockData';

export default function CourseDetail() {
  const { courseSlug } = useParams();
  const navigate = useNavigate();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showAllModules, setShowAllModules] = useState(false);

  // Find target course or fallback to the primary one
  const course =
    MOCK_COURSES.find((c) => c.slug === courseSlug) || MOCK_COURSES[0];

  const userProgressData = getUserProgress();
  const courseProg = userProgressData[course.slug] || {
    progressPercent: 35,
    lastLessonSlug:
      course.modules[0]?.lessons[0]?.slug ||
      'nextjs-app-router-in-depth-fetching-in-server-components',
  };

  const resumeLessonSlug =
    courseProg.lastLessonSlug ||
    course.modules[4]?.lessons[0]?.slug ||
    course.modules[0]?.lessons[0]?.slug;

  const visibleModules = showAllModules
    ? course.modules
    : course.modules.slice(0, 6);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'layers':
        return LayersIcon;
      case 'database':
        return DatabaseIcon;
      case 'speedometer':
        return SpeedometerIcon;
      case 'cloud':
        return CloudIcon;
      case 'code':
        return CodeIcon;
      case 'sparkles':
        return SparklesIcon;
      default:
        return LightbulbIcon;
    }
  };

  return (
    <div className="space-y-12 pb-32">
      {/* 1. Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="flex items-center gap-2 text-xs font-medium text-neutral-500">
          <Link to="/" className="hover:text-primary-600 transition-colors">
            ⌂
          </Link>
          <span>&gt;</span>
          <Link to="/courses" className="hover:text-primary-600 transition-colors">
            All Courses
          </Link>
          <span>&gt;</span>
          <span className="text-neutral-900 font-semibold truncate">
            {course.title}
          </span>
        </nav>
      </div>

      {/* 2. Course Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Large Visual Cover */}
          <div className="lg:col-span-5">
            <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-neutral-950 via-emerald-950 to-neutral-900 border border-neutral-800 p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-xl group">
              <div className="absolute inset-0 bg-primary-500/10 blur-2xl pointer-events-none" />
              <CourseLogo type={course.logo} className="w-32 h-32 text-6xl shadow-2xl z-10" />
              <div className="mt-6 z-10 text-center">
                <span className="text-xl font-bold tracking-widest text-white uppercase block font-mono">
                  {course.title.toUpperCase()}
                </span>
                <span className="text-xs text-primary-400 font-mono tracking-wider mt-1 block">
                  VIBE LEARN ORIGINAL
                </span>
              </div>
            </div>
          </div>

          {/* Right: Course Header Info */}
          <div className="lg:col-span-7 space-y-5">
            <div>
              <Badge type={course.tagType || 'popular'}>{course.tag || 'Popular'}</Badge>
            </div>

            <h1 className="font-sans text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight leading-tight">
              {course.title.replace(course.highlightWord, '')}{' '}
              <span className="text-primary-500">{course.highlightWord}</span>
            </h1>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
              {course.summary}
            </p>

            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-neutral-600 font-medium py-2 border-y border-neutral-200">
              <div className="flex items-center gap-2">
                <SignalIcon className="w-4 h-4 text-neutral-500" />
                <span>{course.level}</span>
              </div>
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4 text-neutral-500" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <BookIcon className="w-4 h-4 text-neutral-500" />
                <span>{course.moduleCount} modules</span>
              </div>
              <div className="flex items-center gap-2">
                <UsersIcon className="w-4 h-4 text-neutral-500" />
                <span>{course.studentsCount.toLocaleString()} students</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() =>
                  navigate(`/courses/${course.slug}/lessons/${resumeLessonSlug}`)
                }
                className="gap-2.5"
              >
                <PlayIcon className="w-4 h-4" filled />
                <span>Continue Learning</span>
                <span>→</span>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="gap-2"
              >
                <BookmarkIcon
                  className={`w-4 h-4 ${isBookmarked ? 'text-primary-600' : ''}`}
                  filled={isBookmarked}
                />
                <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What You'll Learn Section */}
      {course.whatYoullLearn && course.whatYoullLearn.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center">
                <LightbulbIcon className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">What you'll learn</h2>
            </div>

            <span className="font-serif italic font-bold text-primary-600 text-lg sm:text-xl">
              Build for real world
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {course.whatYoullLearn.map((item) => {
              const IconComponent = getIconComponent(item.icon);
              return (
                <div
                  key={item.id}
                  className="bg-white border border-neutral-200 rounded-lg p-5 flex items-start gap-4 shadow-xs hover:border-primary-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 4. Course Content & Modules */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-neutral-200 rounded-xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
            <div className="flex items-center gap-2.5">
              <LayersIcon className="w-6 h-6 text-primary-500" />
              <h2 className="text-xl font-bold text-neutral-900">Course Content</h2>
            </div>
            <span className="text-xs sm:text-sm font-medium text-neutral-500">
              {course.moduleCount} modules • {course.duration}
            </span>
          </div>

          {/* Module Accordions */}
          <div className="space-y-3">
            {visibleModules.map((mod, idx) => (
              <ModuleAccordion
                key={mod.id}
                module={mod}
                courseSlug={course.slug}
                defaultOpen={idx === 4} // Module 5 (Data Fetching) open by default to match mockup
              />
            ))}
          </div>

          {course.modules.length > 6 && (
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setShowAllModules(!showAllModules)}
                className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 px-5 py-2.5 rounded-full transition-colors"
              >
                <span>
                  {showAllModules
                    ? 'Show fewer modules'
                    : `Show all ${course.modules.length} modules`}
                </span>
                <ChevronDownIcon
                  className={`w-3.5 h-3.5 transition-transform ${
                    showAllModules ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. Sticky Floating Progress Bar at Bottom */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-neutral-200 py-3.5 px-4 shadow-xl z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="w-9 h-9 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
              <SignalIcon className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] text-neutral-500 block">Your Progress</span>
              <span className="text-sm font-bold text-neutral-900">
                {courseProg.progressPercent}% complete
              </span>
            </div>
          </div>

          <div className="w-full sm:max-w-md">
            <ProgressBar percentage={courseProg.progressPercent} height="h-2" />
          </div>

          <Button
            variant="primary"
            size="md"
            onClick={() =>
              navigate(`/courses/${course.slug}/lessons/${resumeLessonSlug}`)
            }
            className="w-full sm:w-auto shrink-0 gap-2"
          >
            <span>Continue Learning</span>
            <span>→</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
