import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  icon?: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary';

  const variants = {
    primary: 'bg-[#0a1628] text-white hover:bg-[#1a2638] hover:-translate-y-0.5',
    secondary: 'bg-primary text-white hover:bg-primary-dark hover:-translate-y-0.5',
    outline: 'bg-white border-2 border-[#e2e8f0] text-[#0a1628] hover:border-primary hover:bg-[#f8fafc]',
    dark: 'bg-[#0a1628] text-white hover:bg-[#1a2638] hover:-translate-y-0.5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-sm gap-2',
    lg: 'px-8 py-4 text-base gap-3',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
