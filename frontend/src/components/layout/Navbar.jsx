import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/clerk-react';
import { VibeLearnLogo, BellIcon, BarsIcon, XIcon } from '../ui/Icons';
import Button from '../ui/Button';

export default function Navbar() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isCoursesActive = location.pathname.startsWith('/courses');
  const isMyLearningActive = location.pathname.startsWith('/my-learning');

  return (
    <header className="sticky top-0 z-50 h-[72px] bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
          <VibeLearnLogo />
        </Link>

        {/* Center: Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          <Link
            to="/courses"
            className={`relative h-full flex items-center text-sm font-medium transition-colors ${
              isCoursesActive
                ? 'text-neutral-900 font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Courses
            {isCoursesActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full" />
            )}
          </Link>

          <Link
            to="/my-learning"
            className={`relative h-full flex items-center text-sm font-medium transition-colors ${
              isMyLearningActive
                ? 'text-neutral-900 font-semibold'
                : 'text-neutral-600 hover:text-neutral-900'
            }`}
          >
            My Learning
            {isMyLearningActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500 rounded-full" />
            )}
          </Link>
        </nav>

        {/* Right: Actions (Notification & Clerk Auth) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-full transition-colors relative"
            title="Notifications"
          >
            <BellIcon className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary-500 rounded-full ring-2 ring-white" />
          </button>

          {/* Clerk Auth Components */}
          <SignedOut>
            <div className="flex items-center gap-2">
              <SignInButton mode="modal">
                <Button variant="secondary" size="sm">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="primary" size="sm">
                  Get Started
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center gap-3">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'w-9 h-9 ring-2 ring-primary-500/20',
                  },
                }}
              />
            </div>
          </SignedIn>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-600 hover:text-neutral-900 rounded-md"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <BarsIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-4 pt-2 pb-6 space-y-4 shadow-lg animate-fadeIn">
          <div className="flex flex-col space-y-2">
            <Link
              to="/courses"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-md text-base font-medium ${
                isCoursesActive
                  ? 'bg-primary-50 text-primary-600 font-semibold'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Courses
            </Link>
            <Link
              to="/my-learning"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 rounded-md text-base font-medium ${
                isMyLearningActive
                  ? 'bg-primary-50 text-primary-600 font-semibold'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              My Learning
            </Link>
          </div>

          <div className="pt-3 border-t border-neutral-200 flex flex-col gap-3">
            <SignedOut>
              <SignInButton mode="modal">
                <Button variant="secondary" className="w-full">
                  Sign In
                </Button>
              </SignInButton>
              <SignUpButton mode="modal">
                <Button variant="primary" className="w-full">
                  Get Started
                </Button>
              </SignUpButton>
            </SignedOut>

            <SignedIn>
              <div className="flex items-center justify-between px-2">
                <span className="text-sm font-medium text-neutral-600">Account</span>
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </header>
  );
}
