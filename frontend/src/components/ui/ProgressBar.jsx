
/**
 * Progress Bar component matching docs/system_design/DESIGN.md Section 11.
 */
export default function ProgressBar({
  percentage = 0,
  height = 'h-2',
  showLabel = false,
  className = '',
  trackClassName = 'bg-neutral-200',
  fillClassName = 'bg-primary-500',
}) {
  const clamped = Math.max(0, Math.min(100, Math.round(percentage)));

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-1 text-xs font-semibold text-neutral-700">
          <span>{clamped}% complete</span>
        </div>
      )}
      <div className={`w-full ${height} ${trackClassName} rounded-full overflow-hidden`}>
        <div
          className={`${height} ${fillClassName} rounded-full transition-all duration-300 ease-out`}
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
