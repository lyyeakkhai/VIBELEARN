import { SignedIn, SignedOut, SignInButton } from '@clerk/clerk-react';
import Button from '../ui/Button';
import { LockIcon } from '../ui/Icons';

/**
 * ProtectedRoute component:
 * Gates private pages (like /my-learning) behind Clerk authentication.
 */
export default function ProtectedRoute({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
          <div className="max-w-md w-full bg-white border border-neutral-200 rounded-xl p-8 text-center shadow-lg">
            <div className="w-14 h-14 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-4">
              <LockIcon className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              Sign In to Continue
            </h2>
            <p className="text-sm text-neutral-600 mb-6 leading-relaxed">
              Your personalized learning progress, enrolled courses, and resume positions are safely stored in your Vibelearn account.
            </p>
            <SignInButton mode="modal">
              <Button variant="primary" className="w-full">
                Sign In with Clerk
              </Button>
            </SignInButton>
          </div>
        </div>
      </SignedOut>
    </>
  );
}
