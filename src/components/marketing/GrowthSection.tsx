'use client';

import { Container } from './Container';
import { Button } from './Button';

export function GrowthSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f0f6fc] to-white">
      <Container>
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left side - Calculator Panel */}
          <div className="lg:col-span-7">
            {/* Section Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-6 w-6 rounded bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm text-gray-500">Calculator</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a1628] mb-8">
              See your growth <span className="gradient-text">potential</span>
            </h2>

            {/* Main Calculator Card */}
            <div className="bg-white rounded-3xl shadow-xl p-6 space-y-6">
              {/* Growth indicator */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full">
                  <span className="text-green-600 font-bold">+67%</span>
                  <svg className="h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                  <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <p className="text-sm text-gray-500">The average annual return of Mineral35 over the past 4 years</p>

              {/* Crypto Calculator Card */}
              <div className="bg-gradient-to-br from-[#0a4d3c] to-[#0d6b54] rounded-2xl p-5 text-white">
                <p className="text-sm opacity-80 mb-2">Easily estimate your savings and returns in seconds with our intuitive crypto calculator.</p>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="flex gap-1 mt-4">
                      {[60, 80, 50, 70, 90, 65, 85].map((h, i) => (
                        <div key={i} className="w-3 bg-green-400/60 rounded-t" style={{ height: `${h * 0.6}px` }} />
                      ))}
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-white/20 rounded-full text-sm hover:bg-white/30 transition-colors">
                    Open Calculator →
                  </button>
                </div>
              </div>

              {/* Contribution vs Investment chart */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500" />
                    <span className="text-xs text-gray-500">Your Contributions</span>
                  </div>
                  <div className="flex gap-1 items-end h-20">
                    {[30, 45, 55, 40, 60, 50, 70].map((h, i) => (
                      <div key={i} className="flex-1 bg-blue-500 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                    <span className="text-xs text-gray-500">Investment Gains</span>
                  </div>
                  <div className="flex gap-1 items-end h-20">
                    {[40, 60, 80, 55, 75, 90, 95].map((h, i) => (
                      <div key={i} className="flex-1 bg-green-500 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Input Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl shadow-xl p-6 space-y-6">
              <h3 className="font-semibold text-[#0a1628]">Investment Period</h3>

              {/* Period selector */}
              <div className="flex gap-2 flex-wrap">
                {['1 year', '2 years', '3 years', '4 years'].map((period, i) => (
                  <button
                    key={period}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      i === 3
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {period}
                  </button>
                ))}
              </div>

              {/* Average Annual */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Average Annual in Mineral35</span>
                  <span className="font-semibold text-green-500">67%</span>
                </div>
              </div>

              {/* Input fields */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-500 block mb-2">Initial Deposit</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                    <input
                      type="text"
                      defaultValue="20000"
                      className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm text-gray-500 block mb-2">Monthly Deposit</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                    <input
                      type="text"
                      defaultValue="0"
                      className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Projected Balance */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4">
                <p className="text-sm text-gray-500 mb-1">Projected Balance</p>
                <p className="text-3xl font-bold text-[#0a1628]">$29,669</p>
              </div>

              {/* Calculate Button */}
              <Button variant="secondary" size="lg" className="w-full">
                Calculate
              </Button>

              <p className="text-xs text-gray-400 leading-relaxed">
                The calculations shown in this tool are meant for illustrative purposes only. Past performance is no guarantee of future results. Investment decisions on Mineral involve risks and portfolios.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
