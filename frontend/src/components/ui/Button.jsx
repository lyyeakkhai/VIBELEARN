
/**
 * Button component based on docs/system_design/DESIGN.md:
 * - Standard height: 44px
 * - Border radius: 12px (rounded-md)
 * - Variants: primary, secondary, tertiary, outline, text
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  icon: Icon,
  iconRight: IconRight,
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/20 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'h-9 px-3 text-xs rounded-sm gap-1.5',
    md: 'h-11 px-4 text-sm rounded-md gap-2',
    lg: 'h-12 px-6 text-base rounded-md gap-2.5',
  }[size] || 'h-11 px-4 text-sm rounded-md gap-2';

  const variantStyles = {
    primary:
      'bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 disabled:bg-primary-200 disabled:text-white shadow-sm',
    secondary:
      'bg-white text-primary-600 border border-neutral-200 hover:border-primary-500 hover:bg-primary-50 active:bg-primary-100 shadow-sm',
    outline:
      'bg-transparent border border-neutral-300 text-neutral-700 hover:bg-neutral-100 active:bg-neutral-200',
    tertiary:
      'bg-transparent text-neutral-600 hover:text-primary-600 hover:underline active:text-primary-700 p-0 h-auto',
    text:
      'bg-transparent text-primary-500 hover:text-primary-600 active:text-primary-700 px-2 h-auto',
    dark:
      'bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700 shadow-sm',
  }[variant] || 'bg-primary-500 text-white hover:bg-primary-600';

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      {...props}
    >
      {Icon && <Icon className={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} />}
      <span>{children}</span>
      {IconRight && <IconRight className={size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'} />}
    </button>
  );
}
