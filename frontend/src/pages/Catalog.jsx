import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import {
  SearchIcon,
  PlayIcon,
  CheckIcon,
  ExternalLinkIcon,
  ChevronDownIcon,
  CourseLogo,
} from '../components/ui/Icons';
import { MOCK_SEARCH_RESULTS, MOCK_COURSES } from '../data/mockData';
import CourseCard from '../components/course/CourseCard';

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState('data fetching');
  const [filterType, setFilterType] = useState('all'); // 'all', 'video', 'lesson', 'courses'
  const [sortBy, setSortBy] = useState('relevant');

  // Filtered search results
  const filteredResults = useMemo(() => {
    let results = MOCK_SEARCH_RESULTS;

    if (filterType === 'video') {
      results = results.filter((r) => r.type === 'video');
    } else if (filterType === 'lesson') {
      results = results.filter((r) => r.type === 'lesson');
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q) ||
          r.courseTitle.toLowerCase().includes(q)
      );
    }

    return results;
  }, [searchQuery, filterType]);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* 1. Header with Badge & Title */}
      <div className="text-center space-y-3">
        <div className="flex justify-center">
          <Badge type="search">SEARCH RESULTS</Badge>
        </div>

        <h1 className="font-sans text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
          Results for <span className="text-primary-500">"{searchQuery || 'all courses'}"</span>
        </h1>

        <p className="text-sm text-neutral-500">
          Found {filteredResults.length} results across {MOCK_COURSES.length} courses
        </p>
      </div>

      {/* 2. Search & Filter Bar */}
      <div className="bg-white border border-neutral-200 rounded-xl p-3 shadow-xs space-y-3">
        <div className="flex items-center gap-3 px-3 py-1">
          <SearchIcon className="w-5 h-5 text-neutral-400 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search topics, lessons, frameworks (e.g. data fetching, routing)..."
            className="w-full text-sm bg-transparent border-none focus:outline-none text-neutral-900 placeholder:text-neutral-400"
          />
          <div className="hidden sm:flex items-center gap-1 bg-neutral-100 text-neutral-500 rounded px-2 py-0.5 text-xs font-mono">
            <span>⌘</span>
            <span>K</span>
          </div>
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-xs text-neutral-400 hover:text-neutral-600 px-1"
            >
              Clear
            </button>
          )}
        </div>

        {/* Filter chips & Sort dropdown */}
        <div className="pt-2 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filterType === 'all'
                  ? 'bg-primary-50 text-primary-700 border border-primary-200 font-semibold'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              All Results ({MOCK_SEARCH_RESULTS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterType('video')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filterType === 'video'
                  ? 'bg-primary-50 text-primary-700 border border-primary-200 font-semibold'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              Videos
            </button>
            <button
              type="button"
              onClick={() => setFilterType('lesson')}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                filterType === 'lesson'
                  ? 'bg-primary-50 text-primary-700 border border-primary-200 font-semibold'
                  : 'text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              Modules & Lessons
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span>Sort by:</span>
            <div className="relative inline-block">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort search results"
                className="bg-neutral-50 border border-neutral-200 rounded-md py-1 pl-2 pr-7 text-xs font-medium text-neutral-700 focus:outline-none focus:border-primary-500 cursor-pointer appearance-none"
              >
                <option value="relevant">Most Relevant</option>
                <option value="newest">Newest First</option>
                <option value="popular">Most Popular</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-1.5 text-neutral-400">
                <ChevronDownIcon className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Results Section */}
      <div className="space-y-4">
        {filteredResults.length === 0 ? (
          <div className="bg-white border border-neutral-200 rounded-xl p-12 text-center space-y-4">
            <p className="text-base text-neutral-600">
              No results found for "{searchQuery}". Try a different keyword or browse all courses below.
            </p>
            <Button
              variant="secondary"
              onClick={() => {
                setSearchQuery('');
                setFilterType('all');
              }}
            >
              Reset Search
            </Button>
          </div>
        ) : (
          filteredResults.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-neutral-200 rounded-xl p-5 shadow-xs hover:shadow-md transition-all group flex flex-col md:flex-row gap-5 items-start md:items-center"
            >
              {/* Left visual representation */}
              {item.type === 'video' ? (
                /* Video card left thumbnail */
                <Link
                  to={`/courses/${item.courseSlug}/lessons/${item.lessonSlug}`}
                  className="w-full md:w-56 h-32 shrink-0 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950 rounded-lg relative overflow-hidden flex items-center justify-center group/thumb border border-neutral-800 shadow-inner"
                >
                  {/* Decorative code/diagram preview background */}
                  <div className="absolute inset-0 p-3 opacity-30 text-[9px] font-mono text-emerald-400 select-none overflow-hidden">
                    const data = await fetch('/api/users')<br />
                    .then(res =&gt; res.json())<br />
                    .catch(err =&gt; console.error(err))
                  </div>
                  {/* Play circle overlay */}
                  <div className="w-10 h-10 rounded-full bg-white/90 text-primary-600 flex items-center justify-center shadow-lg group-hover/thumb:scale-110 group-hover/thumb:bg-primary-500 group-hover/thumb:text-white transition-all z-10">
                    <PlayIcon className="w-4 h-4" filled />
                  </div>
                  {/* Duration badge */}
                  <span className="absolute bottom-2 right-2 bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono font-medium px-2 py-0.5 rounded">
                    {item.duration}
                  </span>
                </Link>
              ) : (
                /* Lesson card left bullet points box */
                <div className="w-full md:w-56 h-32 shrink-0 bg-neutral-50 border border-neutral-200 rounded-lg p-3 flex flex-col justify-between text-xs text-neutral-600">
                  <div className="space-y-1">
                    {item.bullets?.map((b, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-neutral-600">
                        <span className="w-1 h-1 rounded-full bg-primary-500 shrink-0" />
                        <span className="truncate">{b}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <div className="w-5 h-5 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center">
                      <CheckIcon className="w-3 h-3" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              )}

              {/* Right content details */}
              <div className="flex-1 min-w-0 space-y-2">
                {/* Course badge row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-neutral-500">
                    <CourseLogo type={item.logo} className="w-5 h-5 text-xs" />
                    <span>{item.courseTitle}</span>
                  </div>
                  <Badge type={item.type === 'video' ? 'video' : 'lesson'}>
                    {item.tag}
                  </Badge>
                </div>

                {/* Title */}
                <Link
                  to={`/courses/${item.courseSlug}/lessons/${item.lessonSlug}`}
                  className="block text-base sm:text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors"
                >
                  {item.title}
                </Link>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Footer metadata & Action Link */}
                <div className="pt-2 flex items-center justify-between text-xs text-neutral-500">
                  <div className="flex items-center gap-2 font-medium">
                    <span>{item.lessonTag || item.moduleTag}</span>
                    <span>•</span>
                    <span className="truncate">{item.moduleTitle || 'General Module'}</span>
                  </div>

                  <Link
                    to={`/courses/${item.courseSlug}/lessons/${item.lessonSlug}`}
                    className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                  >
                    {item.type === 'video' ? (
                      <>
                        <PlayIcon className="w-3.5 h-3.5" filled />
                        <span>Watch from {item.duration} &gt;</span>
                      </>
                    ) : (
                      <>
                        <span>View lesson</span>
                        <ExternalLinkIcon className="w-3.5 h-3.5" />
                      </>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 4. Full Course Directory Grid */}
      <div className="pt-8 border-t border-neutral-200">
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">
          All Courses ({MOCK_COURSES.length})
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_COURSES.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* 5. Bottom Help / Browse CTA Banner */}
      <div className="bg-[#E6F9F0] border border-primary-200 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center shrink-0 shadow-xs">
            <SearchIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-bold text-neutral-900">
              Can't find what you're looking for?
            </h3>
            <p className="text-xs text-neutral-600 mt-0.5">
              Try different keywords or browse our full course catalog.
            </p>
          </div>
        </div>

        <Button
          variant="secondary"
          size="md"
          onClick={() => setSearchQuery('')}
          className="shrink-0"
        >
          Browse all courses →
        </Button>
      </div>
    </div>
  );
}
