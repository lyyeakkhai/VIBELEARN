import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ui/ProgressBar';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import {
  PlayIcon,
  CourseLogo,
  ArrowRightIcon,
  SparklesIcon,
} from '../components/ui/Icons';
import { MOCK_COURSES, getUserProgress } from '../data/mockData';

export default function MyLearning() {
  const navigate = useNavigate();
  const [progressState] = useState(() => getUserProgress());

  // Merge enrolled courses with their progress state
  const enrolledCourses = Object.keys(progressState).map((slug) => {
    const course = MOCK_COURSES.find((c) => c.slug === slug);
    const prog = progressState[slug];
    return {
      course,
      progress: prog,
    };
  }).filter((item) => Boolean(item.course));

  // Compute total statistics
  const totalCompletedLessons = Object.values(progressState).reduce(
    (acc, curr) => acc + (curr.completedLessons?.length || 0),
    0
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* 1. Header & Overview Stats */}
      <div className="space-y-6">
        <div>
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            My Learning
          </h1>
          <p className="text-sm sm:text-base text-neutral-600 mt-1">
            Pick up right where you left off and track your skill progression.
          </p>
        </div>

        {/* Quick Stats Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-xs">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
              Enrolled Courses
            </span>
            <span className="text-2xl font-extrabold text-neutral-900 mt-1 block">
              {enrolledCourses.length}
            </span>
          </div>

          <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-xs">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
              Completed Lessons
            </span>
            <span className="text-2xl font-extrabold text-primary-600 mt-1 block">
              {totalCompletedLessons}
            </span>
          </div>

          <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-xs">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
              Learning Streak
            </span>
            <span className="text-2xl font-extrabold text-amber-500 mt-1 block">
              5 Days 🔥
            </span>
          </div>

          <div className="bg-white border border-neutral-200 rounded-xl p-4 shadow-xs">
            <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block">
              Certificates
            </span>
            <span className="text-2xl font-extrabold text-neutral-900 mt-1 block">
              0 / 3
            </span>
          </div>
        </div>
      </div>

      {/* 2. In-Progress Courses */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-neutral-900">
            Active Courses ({enrolledCourses.length})
          </h2>
          <Link
            to="/courses"
            className="text-xs sm:text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1"
          >
            <span>Browse Catalog</span>
            <span>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {enrolledCourses.map(({ course, progress }) => {
            const resumeLessonSlug =
              progress.lastLessonSlug ||
              course.modules[0]?.lessons[0]?.slug ||
              '';

            return (
              <div
                key={course.id}
                className="bg-white border border-neutral-200 rounded-xl p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Top Row: Course Info */}
                  <div className="flex items-start gap-4">
                    <CourseLogo type={course.logo} className="w-12 h-12 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <Badge type="level">{course.level}</Badge>
                        <span className="text-xs font-bold text-primary-600">
                          {progress.progressPercent}% complete
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 truncate mt-1">
                        {course.title}
                      </h3>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div>
                    <ProgressBar percentage={progress.progressPercent} height="h-2" />
                  </div>

                  {/* Last lesson resume info */}
                  <div className="bg-neutral-50 border border-neutral-200/60 rounded-lg p-3 text-xs text-neutral-600 flex items-center justify-between">
                    <div className="truncate pr-2">
                      <span className="text-neutral-400 block text-[11px]">Current Lesson:</span>
                      <span className="font-semibold text-neutral-800 truncate block">
                        {progress.lastLessonTitle || 'Data Fetching in Server Components'}
                      </span>
                    </div>
                    <span className="text-primary-600 font-bold shrink-0">Module {progress.currentModuleIndex || 5}</span>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <Link
                    to={`/courses/${course.slug}`}
                    className="text-xs font-medium text-neutral-500 hover:text-neutral-800"
                  >
                    View Syllabus
                  </Link>

                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() =>
                      navigate(`/courses/${course.slug}/lessons/${resumeLessonSlug}`)
                    }
                    className="gap-2"
                  >
                    <PlayIcon className="w-3.5 h-3.5" filled />
                    <span>Resume Lesson</span>
                    <span>→</span>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3. Recommended Next Steps */}
      <div className="bg-[#F0FDF4] border border-primary-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary-500 text-white flex items-center justify-center shrink-0 shadow-sm">
            <SparklesIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-neutral-900">
              Ready to learn something new?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 max-w-xl">
              Explore our industry-standard courses on System Design, Artificial Intelligence, and Modern Backend Engineering.
            </p>
          </div>
        </div>

        <Link to="/courses" className="shrink-0">
          <Button variant="primary" size="md" iconRight={ArrowRightIcon}>
            Explore Courses
          </Button>
        </Link>
      </div>
    </div>
  );
}
