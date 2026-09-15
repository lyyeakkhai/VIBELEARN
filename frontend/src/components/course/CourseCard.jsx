import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import {
  CourseLogo,
  ArrowRightIcon,
  ClockIcon,
  BookIcon,
  SignalIcon,
} from '../ui/Icons';

export default function CourseCard({ course }) {
  const {
    slug,
    title,
    summary,
    level,
    duration,
    moduleCount,
    tag,
    tagType = 'level',
    logo,
  } = course;

  return (
    <Link
      to={`/courses/${slug}`}
      className="group bg-white border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative overflow-hidden border-b-4 border-b-primary-500"
    >
      <div>
        {/* Top row: Logo & Arrow Action */}
        <div className="flex items-center justify-between mb-4">
          <CourseLogo type={logo} className="w-12 h-12" />
          <div className="w-9 h-9 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all">
            <ArrowRightIcon className="w-4 h-4" />
          </div>
        </div>

        {/* Tag row */}
        <div className="mb-3">
          <Badge type={tagType}>{tag || level}</Badge>
        </div>

        {/* Course Title */}
        <h3 className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mb-2">
          {title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-neutral-600 leading-relaxed line-clamp-2 mb-6">
          {summary}
        </p>
      </div>

      {/* Metadata footer */}
      <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium">
        <div className="flex items-center gap-1.5">
          <SignalIcon className="w-3.5 h-3.5 text-neutral-400" />
          <span>{level}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <ClockIcon className="w-3.5 h-3.5 text-neutral-400" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <BookIcon className="w-3.5 h-3.5 text-neutral-400" />
          <span>{moduleCount} modules</span>
        </div>
      </div>
    </Link>
  );
}
