import { FlameIcon, TrendingUpIcon, PlayIcon } from './Icons';

/**
 * Pill-shaped Badge component matching docs/system_design/DESIGN.md Section 09.
 */
export default function Badge({
  type = 'default',
  children,
  className = '',
  icon: CustomIcon,
}) {
  const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase select-none';

  switch (type) {
    case 'video':
      return (
        <span className={`${baseStyles} bg-primary-500 text-white shadow-xs ${className}`}>
          <PlayIcon className="w-3 h-3" filled />
          <span>{children || 'VIDEO'}</span>
        </span>
      );

    case 'lesson':
      return (
        <span className={`${baseStyles} bg-primary-100 text-primary-800 ${className}`}>
          {CustomIcon && <CustomIcon className="w-3 h-3" />}
          <span>{children || 'LESSON'}</span>
        </span>
      );

    case 'popular':
      return (
        <span className={`${baseStyles} bg-primary-100 text-primary-700 ${className}`}>
          <FlameIcon className="w-3.5 h-3.5 text-primary-600" />
          <span>{children || 'POPULAR'}</span>
        </span>
      );

    case 'trending':
      return (
        <span className={`${baseStyles} bg-sky-100 text-sky-700 ${className}`}>
          <TrendingUpIcon className="w-3.5 h-3.5" />
          <span>{children || 'TRENDING'}</span>
        </span>
      );

    case 'level':
      return (
        <span className={`${baseStyles} bg-neutral-100 text-neutral-700 font-medium normal-case ${className}`}>
          {CustomIcon && <CustomIcon className="w-3 h-3 text-neutral-500" />}
          <span>{children}</span>
        </span>
      );

    case 'feature':
      return (
        <span className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider text-primary-600 bg-primary-50 border border-primary-200 shadow-xs ${className}`}>
          <span className="text-primary-500 text-sm">✦</span>
          <span>{children}</span>
        </span>
      );

    case 'search':
      return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-primary-700 bg-primary-100/70 border border-primary-200/50 ${className}`}>
          {children}
        </span>
      );

    default:
      return (
        <span className={`${baseStyles} bg-neutral-100 text-neutral-700 ${className}`}>
          {children}
        </span>
      );
  }
}
