import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, ChevronUpIcon, PlayIcon, ClockIcon } from '../ui/Icons';

export default function ModuleAccordion({ module, courseSlug, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const { position, title, summary, duration, lessons = [] } = module;

  return (
    <div className="border border-neutral-200 rounded-lg bg-white overflow-hidden shadow-xs transition-all">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-neutral-50/70 transition-colors cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 rounded-full bg-primary-50 text-primary-700 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
            {position}
          </div>
          <div>
            <h4 className="text-base font-semibold text-neutral-900 group-hover:text-primary-600">
              {title}
            </h4>
            {summary && (
              <p className="text-xs text-neutral-500 mt-0.5 line-clamp-1">
                {summary}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 ml-4">
          <span className="text-xs font-medium text-neutral-500">{duration}</span>
          <div className="text-neutral-400">
            {isOpen ? <ChevronUpIcon className="w-4 h-4" /> : <ChevronDownIcon className="w-4 h-4" />}
          </div>
        </div>
      </button>

      {/* Expanded Lessons List */}
      {isOpen && (
        <div className="px-5 pb-4 pt-2 border-t border-neutral-100 bg-neutral-50/30 space-y-2">
          {lessons.length === 0 ? (
            <p className="text-xs text-neutral-400 py-2 italic pl-12">
              Lessons will be available upon enrollment.
            </p>
          ) : (
            lessons.map((lesson, idx) => (
              <Link
                key={lesson.id || idx}
                to={`/courses/${courseSlug}/lessons/${lesson.slug}`}
                className="flex items-center justify-between p-3 rounded-md hover:bg-white hover:shadow-xs transition-all border border-transparent hover:border-neutral-200 group"
              >
                <div className="flex items-center gap-3 pl-2">
                  <div className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                    <PlayIcon className="w-3 h-3" filled />
                  </div>
                  <span className="text-sm font-medium text-neutral-800 group-hover:text-primary-600 transition-colors">
                    {lesson.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
                  <ClockIcon className="w-3.5 h-3.5 text-neutral-400" />
                  <span>{lesson.duration}</span>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
