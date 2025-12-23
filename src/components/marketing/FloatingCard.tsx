import { ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  animationClass?: string;
}

export function FloatingCard({
  children,
  className = '',
  animationClass = 'animate-float'
}: FloatingCardProps) {
  return (
    <div
      className={`glass-card rounded-2xl p-4 shadow-lg ${animationClass} ${className}`}
    >
      {children}
    </div>
  );
}

// Progress Card variant
export function ProgressCard({ className = '' }: { className?: string }) {
  return (
    <FloatingCard className={`w-[160px] ${className}`} animationClass="animate-float">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <span className="text-xs text-gray-500">Progress</span>
        </div>
        <p className="text-sm font-semibold text-gray-800">Track<br/>Your Progress</p>
        <div className="flex items-center gap-1">
          <span className="text-lg font-bold text-green-500">+59%</span>
          <span className="text-xs text-gray-400">growth</span>
        </div>
      </div>
    </FloatingCard>
  );
}

// Balance Card variant
export function BalanceCard({ className = '' }: { className?: string }) {
  return (
    <FloatingCard className={`w-[180px] ${className}`} animationClass="animate-float-delayed">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
            <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-xs text-gray-500">Crypto</span>
        </div>
        <p className="text-sm text-gray-600">Track your<br/>crypto journey<br/>effortlessly</p>
        <p className="text-xl font-bold text-gray-800">$12,450.00</p>
      </div>
    </FloatingCard>
  );
}

// Profile Card variant
export function ProfileCard({ className = '' }: { className?: string }) {
  return (
    <FloatingCard className={`w-[160px] ${className}`} animationClass="animate-float-slow">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
            <span className="text-xs text-white font-semibold">S</span>
          </div>
          <span className="text-xs text-gray-500">Profile</span>
        </div>
        <p className="text-sm font-medium text-gray-800">Hi, Sam</p>
        <p className="text-xs text-gray-500">Account Wallet</p>
        <p className="text-lg font-bold text-gray-800">$5,921.20</p>
      </div>
    </FloatingCard>
  );
}

// Calculator Card variant
export function CalculatorCard({ className = '' }: { className?: string }) {
  return (
    <FloatingCard className={`w-[140px] ${className}`} animationClass="animate-float-delayed">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-xs text-gray-500">Calculator</span>
        </div>
        <div className="flex gap-1">
          <div className="h-6 w-6 rounded bg-gray-100"></div>
          <div className="h-6 w-6 rounded bg-gray-100"></div>
          <div className="h-6 w-6 rounded bg-gray-100"></div>
        </div>
      </div>
    </FloatingCard>
  );
}
