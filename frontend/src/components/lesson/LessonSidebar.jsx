import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeftIcon,
  CheckIcon,
  PlayIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  FlaskIcon,
  CourseLogo,
} from '../ui/Icons';
import ProgressBar from '../ui/ProgressBar';

export default function LessonSidebar({
  course,
  currentLessonSlug,
  completedLessons = [],
  progressPercent = 35,
  onCloseMobile,
}) {
  const { slug: courseSlug, title: courseTitle, logo, modules = [] } = course;

  // Find module containing the current lesson
  const initialOpenModuleId =
    modules.find((m) => m.lessons?.some((l) => l.slug === currentLessonSlug))?.id ||
    modules[0]?.id;

  const [openModuleId, setOpenModuleId] = useState(initialOpenModuleId);

  return (
    <aside className="w-full lg:w-80 shrink-0 bg-white border-r border-neutral-200 flex flex-col h-full overflow-y-auto">
      {/* Top Header: Back to Course */}
      <div className="p-5 border-b border-neutral-200">
        <Link
          to={`/courses/${courseSlug}`}
          onClick={onCloseMobile}
          className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-600 hover:text-primary-600 transition-colors mb-4"
        >
          <ArrowLeftIcon className="w-3.5 h-3.5" />
          <span>Back to course</span>
        </Link>

        {/* Course Mini Header */}
        <div className="flex items-center gap-3 mb-3">
          <CourseLogo type={logo} className="w-10 h-10 shrink-0" />
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold text-neutral-900 truncate">
              {courseTitle}
            </h3>
            <span className="text-xs text-neutral-500 font-medium">
              {progressPercent}% complete
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar percentage={progressPercent} height="h-1.5" />
      </div>

      {/* Curriculum Module List */}
      <div className="flex-1 divide-y divide-neutral-100 overflow-y-auto p-2">
        <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
          Curriculum ({modules.length} modules)
        </div>

        {modules.map((mod) => {
          const isOpen = openModuleId === mod.id;
          const hasActiveLesson = mod.lessons?.some((l) => l.slug === currentLessonSlug);
          const isModCompleted =
            mod.position < 5 ||
            (mod.lessons?.length > 0 &&
              mod.lessons.every((l) => completedLessons.includes(l.slug)));

          return (
            <div key={mod.id} className="rounded-md overflow-hidden my-1">
              <button
                type="button"
                onClick={() => setOpenModuleId(isOpen ? null : mod.id)}
                className={`w-full px-3 py-2.5 flex items-center justify-between text-left transition-colors rounded-md ${
                  hasActiveLesson
                    ? 'bg-primary-50/70 text-primary-900 font-medium'
                    : 'hover:bg-neutral-50 text-neutral-700'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                      hasActiveLesson
                        ? 'bg-primary-500 text-white'
                        : isModCompleted
                        ? 'bg-primary-100 text-primary-700'
                        : 'bg-neutral-100 text-neutral-600'
                    }`}
                  >
                    {mod.position}
                  </div>
                  <div className="truncate">
                    <span className="text-xs font-semibold block truncate">
                      {mod.title}
                    </span>
                    <span className="text-[11px] text-neutral-400">
                      {mod.duration}
                      {hasActiveLesson && ' • Now playing'}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-2">
                  {isModCompleted ? (
                    <div className="w-4 h-4 rounded-full bg-primary-500 text-white flex items-center justify-center">
                      <CheckIcon className="w-2.5 h-2.5" strokeWidth={3} />
                    </div>
                  ) : hasActiveLesson ? (
                    <PlayIcon className="w-4 h-4 text-primary-500" filled />
                  ) : isOpen ? (
                    <ChevronUpIcon className="w-4 h-4 text-neutral-400" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 text-neutral-400" />
                  )}
                </div>
              </button>

              {/* Module Lessons Dropdown */}
              {isOpen && mod.lessons && mod.lessons.length > 0 && (
                <div className="pl-6 pr-2 py-1 space-y-1 bg-neutral-50/50 rounded-b-md">
                  {mod.lessons.map((lesson) => {
                    const isLessonActive = lesson.slug === currentLessonSlug;
                    const isLessonDone = completedLessons.includes(lesson.slug);

                    return (
                      <Link
                        key={lesson.id}
                        to={`/courses/${courseSlug}/lessons/${lesson.slug}`}
                        onClick={onCloseMobile}
                        className={`flex items-center justify-between px-3 py-2 rounded text-xs transition-colors group ${
                          isLessonActive
                            ? 'bg-white shadow-xs font-semibold text-primary-700 border-l-2 border-primary-500'
                            : 'text-neutral-600 hover:text-neutral-900 hover:bg-white/80'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          {isLessonDone ? (
                            <span className="w-3.5 h-3.5 rounded-full bg-primary-500 text-white flex items-center justify-center shrink-0">
                              <CheckIcon className="w-2 h-2" strokeWidth={3} />
                            </span>
                          ) : isLessonActive ? (
                            <span className="w-2.5 h-2.5 rounded-full bg-primary-500 ring-4 ring-primary-100 shrink-0" />
                          ) : (
                            <span className="w-2 h-2 rounded-full border border-neutral-300 shrink-0" />
                          )}
                          <span className="truncate">{lesson.title}</span>
                        </div>
                        <span className="text-[10px] text-neutral-400 shrink-0 ml-2">
                          {lesson.duration}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Sidebar Action Callouts */}
      <div className="p-4 border-t border-neutral-200 space-y-2 bg-neutral-50/50">
        <div className="p-3 bg-white border border-neutral-200 rounded-md shadow-xs flex items-center justify-between group cursor-pointer hover:border-primary-500 transition-colors">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center">
              <FlaskIcon className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-800">Session Code Lab</p>
              <p className="text-[11px] text-neutral-500">Practice with real code</p>
            </div>
          </div>
          <span className="text-neutral-400 group-hover:text-primary-500">→</span>
        </div>

        <div className="p-3 bg-white border border-neutral-200 rounded-md shadow-xs flex items-center justify-between group cursor-pointer hover:border-primary-500 transition-colors">
          <div>
            <p className="text-xs font-bold text-neutral-800">Need help?</p>
            <p className="text-[11px] text-neutral-500">Join our community</p>
          </div>
          <span className="text-neutral-400 group-hover:text-primary-500">→</span>
        </div>
      </div>
    </aside>
  );
}
