import { VibeLearnLogo } from '../ui/Icons';

export default function Footer() {
  return (
    <footer className="relative mt-auto pt-16 pb-12 overflow-hidden bg-gradient-to-b from-transparent to-primary-50/40">
      {/* Soft decorative background wave */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-primary-100/30 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center gap-3">
        <VibeLearnLogo className="w-9 h-9" textClassName="text-2xl font-bold text-neutral-900 tracking-tight" />
        <p className="text-sm font-medium text-neutral-500 tracking-wide">
          Better Skills. A Brighter Future.
        </p>
      </div>
    </footer>
  );
}
