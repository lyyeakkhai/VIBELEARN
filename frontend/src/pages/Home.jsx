import { Link } from 'react-router-dom';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import CourseCard from '../components/course/CourseCard';
import { MOCK_COURSES } from '../data/mockData';
import {
  ArrowRightIcon,
  PlayIcon,
  CodeIcon,
  LightbulbIcon,
  LayersIcon,
  UsersIcon,
  SparklesIcon,
} from '../components/ui/Icons';

export default function Home() {
  const popularCourses = MOCK_COURSES.slice(0, 3);

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 lg:pt-20 overflow-hidden">
        {/* Soft background ambient gradient */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Column */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <Badge type="feature">INTELLIGENT LEARNING</Badge>
              </div>

              <h1 className="font-serif text-5xl sm:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
                Learn in a{' '}
                <span className="text-primary-500 font-bold">smarter</span>,
                <br />
                <span className="text-primary-500 font-bold">faster</span> way.
              </h1>

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-xl">
                Vibe Learn helps you build real skills with structured courses, hands-on practice, and personalized learning paths.
              </p>

              <div className="pt-2">
                <Link to="/courses">
                  <Button variant="primary" size="lg" iconRight={ArrowRightIcon}>
                    Explore Courses
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Hero Column: Interactive Graphic Illustration */}
            <div className="lg:col-span-6 flex justify-center items-center relative">
              <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
                {/* Decorative background circle & rings */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-100/70 via-primary-50/50 to-transparent rounded-full -z-10" />
                <div className="absolute inset-4 border-2 border-dashed border-primary-200/60 rounded-full -z-10 animate-spin-slow" />

                {/* Floating Card: Top Right (Video Play) */}
                <div className="absolute -top-2 right-12 bg-white/90 backdrop-blur-xs border border-primary-200 p-3.5 rounded-xl shadow-lg flex items-center gap-3 animate-float-slow">
                  <div className="w-10 h-10 rounded-lg bg-primary-500 text-white flex items-center justify-center shadow-xs">
                    <PlayIcon className="w-5 h-5" filled />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-800 block">HD Lessons</span>
                    <span className="text-[11px] text-neutral-500">Expert video walk-throughs</span>
                  </div>
                </div>

                {/* Main Hero Graphic: Laptop with Graduation Cap */}
                <div className="relative w-80 sm:w-96 bg-white border border-neutral-200 rounded-2xl p-4 shadow-xl">
                  <div className="w-full aspect-video bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl flex flex-col items-center justify-center text-white relative overflow-hidden p-6 text-center border border-neutral-700">
                    <div className="w-16 h-16 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mb-3 ring-8 ring-primary-500/10">
                      <span className="text-3xl">🎓</span>
                    </div>
                    <span className="text-lg font-bold font-serif">Vibe Learn Studio</span>
                    <span className="text-xs text-primary-300 mt-1">Interactive Coding & Exercises</span>
                  </div>
                  {/* Laptop base line */}
                  <div className="w-full h-3 bg-neutral-200 rounded-b-xl mt-2 mx-auto" />
                </div>

                {/* Floating Card: Bottom Left (Code Snippet) */}
                <div className="absolute -bottom-2 left-6 bg-white/90 backdrop-blur-xs border border-primary-200 p-3.5 rounded-xl shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center">
                    <CodeIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-800 block">&lt;/&gt; Clean Code</span>
                    <span className="text-[11px] text-neutral-500">Production best practices</span>
                  </div>
                </div>

                {/* Floating Sparkle accent */}
                <div className="absolute top-12 left-4 text-primary-400">
                  <SparklesIcon className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. POPULAR LEARNING PATHS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-primary-600 mb-2">
              <span className="inline-block w-4 h-0.5 bg-primary-500 rounded-full" />
              <span>Our Courses</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-sans text-neutral-900">
              Popular Learning Paths
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base mt-2 max-w-xl">
              Choose from our curated courses and start your journey towards new skills and better opportunities.
            </p>
          </div>

          {/* Decorative handwritten slogan */}
          <div className="mt-4 md:mt-0 font-serif italic text-2xl font-bold text-primary-600 select-none tracking-wide text-right">
            Learn Grow Achieve
          </div>
        </div>

        {/* 3-Column Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* 3. WHY VIBE LEARN SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F4FBF7] border border-primary-100 rounded-2xl p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Headline */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-primary-600">
                Why Vibe Learn?
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-neutral-900 leading-tight">
                Build the skills that matter.
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                More than just courses — Vibe Learn gives you the tools, support, and structure to grow your career and achieve your goals.
              </p>
            </div>

            {/* Right 2x2 Feature Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  <LightbulbIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900">Expert-Led Content</h4>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Learn from industry professionals with real-world production experience.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  <SparklesIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900">Hands-On Practice</h4>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Build real projects and apply what you learn immediately with code labs.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  <LayersIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900">Structured Paths</h4>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Follow clear paths from fundamentals to advanced enterprise architecture.
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center shrink-0">
                  <UsersIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-neutral-900">Lifetime Access</h4>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    Learn at your own pace, anytime, with ongoing updates and community support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
