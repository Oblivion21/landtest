'use client';

import { Container } from './Container';

export function PhoneSection() {
  return (
    <section className="py-16 tech-pattern">
      <Container>
        <div className="flex flex-col items-center">
          {/* Phone Mockup */}
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative w-[280px] sm:w-[320px] bg-[#0a1628] rounded-[3rem] p-3 shadow-2xl">
              {/* Inner screen bezel */}
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status bar area */}
                <div className="h-8 bg-gradient-to-b from-gray-100 to-white flex items-center justify-center">
                  <div className="w-20 h-5 bg-black rounded-full"></div>
                </div>

                {/* App Content */}
                <div className="p-4 space-y-4">
                  {/* App Header */}
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="font-bold text-[#0a1628]">VaultX</span>
                  </div>

                  {/* Portfolio Name */}
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500">VaultX'35</p>
                    <p className="text-xs text-gray-400">Global Crypto Portfolio</p>
                  </div>

                  {/* Balance Card */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 space-y-2">
                    <p className="text-xs text-gray-500">Current Balance</p>
                    <p className="text-3xl font-bold text-[#0a1628]">$1,234.00</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-primary text-white text-sm rounded-full font-medium">
                      Indicate
                    </button>
                    <button className="flex-1 py-2 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">
                      Description
                    </button>
                  </div>

                  {/* Chart placeholder */}
                  <div className="h-24 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-50 rounded-xl flex items-end justify-around px-2 pb-2">
                    {[40, 60, 45, 80, 55, 70, 90].map((height, i) => (
                      <div
                        key={i}
                        className="w-4 bg-gradient-to-t from-blue-400 to-cyan-400 rounded-t"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements around phone */}
            <div className="absolute -left-16 top-1/4 text-gray-300 opacity-50">
              <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="absolute -right-16 top-1/3 text-gray-300 opacity-50">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <div className="absolute -left-12 bottom-1/4 text-gray-300 opacity-50">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
