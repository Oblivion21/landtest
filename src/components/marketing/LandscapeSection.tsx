'use client';

import { Container } from './Container';
import { Button } from './Button';

export function LandscapeSection() {
  return (
    <section className="py-20 overflow-hidden">
      <Container>
        {/* Landscape illustration */}
        <div className="relative h-[200px] sm:h-[280px] mb-16 rounded-3xl overflow-hidden">
          <svg viewBox="0 0 1200 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e0f4ff"/>
                <stop offset="50%" stopColor="#c8e8f7"/>
                <stop offset="100%" stopColor="#f0f9ff"/>
              </linearGradient>
              <linearGradient id="hillGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4ade80"/>
                <stop offset="50%" stopColor="#22c55e"/>
                <stop offset="100%" stopColor="#16a34a"/>
              </linearGradient>
              <linearGradient id="hillGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#86efac"/>
                <stop offset="50%" stopColor="#4ade80"/>
                <stop offset="100%" stopColor="#22c55e"/>
              </linearGradient>
              <linearGradient id="hillGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#bbf7d0"/>
                <stop offset="100%" stopColor="#86efac"/>
              </linearGradient>
              <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#67e8f9"/>
                <stop offset="50%" stopColor="#22d3ee"/>
                <stop offset="100%" stopColor="#06b6d4"/>
              </linearGradient>
              <linearGradient id="waterReflect" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.3"/>
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.5"/>
                <stop offset="100%" stopColor="#67e8f9" stopOpacity="0.3"/>
              </linearGradient>
            </defs>

            {/* Sky background */}
            <rect fill="url(#skyGrad)" width="1200" height="300"/>

            {/* Distant hills - lighter */}
            <path d="M0 200 Q150 150 300 180 Q450 210 600 170 Q750 130 900 160 Q1050 190 1200 150 L1200 300 L0 300 Z" fill="url(#hillGrad3)" opacity="0.5"/>

            {/* Middle hills */}
            <path d="M0 220 Q200 160 400 200 Q600 240 800 190 Q1000 140 1200 180 L1200 300 L0 300 Z" fill="url(#hillGrad2)" opacity="0.7"/>

            {/* Front hills */}
            <path d="M0 240 Q150 200 350 230 Q550 260 750 220 Q950 180 1200 210 L1200 300 L0 300 Z" fill="url(#hillGrad1)"/>

            {/* Water */}
            <path d="M0 270 Q300 260 600 268 Q900 276 1200 265 L1200 300 L0 300 Z" fill="url(#waterGrad)"/>

            {/* Water reflection shimmer */}
            <path d="M0 275 Q300 268 600 273 Q900 278 1200 272 L1200 290 L0 290 Z" fill="url(#waterReflect)"/>

            {/* Small clouds */}
            <ellipse cx="100" cy="40" rx="40" ry="20" fill="white" opacity="0.7"/>
            <ellipse cx="140" cy="35" rx="30" ry="15" fill="white" opacity="0.8"/>
            <ellipse cx="1000" cy="50" rx="50" ry="25" fill="white" opacity="0.6"/>
            <ellipse cx="1060" cy="45" rx="35" ry="18" fill="white" opacity="0.7"/>
          </svg>
        </div>

        {/* Content below landscape */}
        <div className="flex items-center gap-2 mb-4">
          <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="text-sm text-gray-500">How the index works</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1628] max-w-2xl leading-tight mb-12">
          The best minds have been
          <br />
          <span className="gradient-text">seeking approaches</span> to capital
          <br />
          management for decades.
        </h2>

        {/* Two cards row */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left card - dark teal */}
          <div className="bg-gradient-to-br from-[#0d4a5c] to-[#0a3d4d] rounded-3xl p-6 text-white relative overflow-hidden min-h-[280px]">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            {/* VaultX badge */}
            <div className="flex items-center gap-2 mb-6 relative z-10">
              <div className="h-10 w-10 rounded-xl bg-white/20 flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            {/* Chart icon */}
            <div className="absolute top-6 right-6">
              <svg className="h-5 w-5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>

            <p className="text-lg mb-6 relative z-10 leading-relaxed">
              Analyzing their <span className="text-cyan-300">experience</span> reveals the truth <span className="font-semibold">that the market itself provides the best growth for your savings.</span>
            </p>

            <Button variant="secondary" size="sm" className="relative z-10">
              Learn more
              <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>

            {/* Crypto icons row */}
            <div className="flex gap-2 mt-8 relative z-10">
              {[
                { color: 'bg-blue-500', letter: 'T' },
                { color: 'bg-cyan-400', letter: 'V' },
                { color: 'bg-yellow-500', letter: 'B' },
                { color: 'bg-green-500', letter: 'S' },
                { color: 'bg-purple-500', letter: 'E' },
                { color: 'bg-orange-500', letter: 'D' },
              ].map((crypto, i) => (
                <div key={i} className={`h-8 w-8 rounded-full ${crypto.color} flex items-center justify-center text-white font-bold text-xs shadow-lg`}>
                  {crypto.letter}
                </div>
              ))}
            </div>
          </div>

          {/* Right card - light with portrait */}
          <div className="bg-gradient-to-br from-[#87ceeb]/30 to-[#e0f4ff] rounded-3xl p-6 shadow-xl relative overflow-hidden min-h-[280px]">
            {/* Background portrait silhouette */}
            <div className="absolute top-0 right-0 w-2/3 h-full opacity-30">
              <svg viewBox="0 0 200 300" className="w-full h-full" preserveAspectRatio="xMaxYMin slice">
                <defs>
                  <linearGradient id="miniPortrait2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4a90a4"/>
                    <stop offset="100%" stopColor="#2d5a6b"/>
                  </linearGradient>
                  <linearGradient id="miniHair" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2d1810"/>
                    <stop offset="100%" stopColor="#3d2518"/>
                  </linearGradient>
                </defs>
                {/* Hair */}
                <g fill="url(#miniHair)">
                  <circle cx="100" cy="50" r="30"/>
                  <circle cx="75" cy="60" r="25"/>
                  <circle cx="125" cy="60" r="25"/>
                  <circle cx="65" cy="90" r="22"/>
                  <circle cx="135" cy="90" r="22"/>
                </g>
                {/* Face */}
                <ellipse cx="100" cy="100" rx="45" ry="55" fill="url(#miniPortrait2)"/>
                {/* Body */}
                <ellipse cx="100" cy="250" rx="70" ry="90" fill="url(#miniPortrait2)"/>
              </svg>
            </div>

            {/* Bundles badge */}
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-white/80 rounded-full text-xs text-gray-600 mb-6 shadow-sm">Bundles</span>

              <div className="space-y-4">
                <div>
                  <p className="text-3xl font-bold text-[#0a1628]">$8,234.00</p>
                  <p className="text-sm text-gray-500">2.35 <span className="text-green-500">↑</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
