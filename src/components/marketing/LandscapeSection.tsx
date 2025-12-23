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
                <stop offset="100%" stopColor="#f0f9ff"/>
              </linearGradient>
              <linearGradient id="hillGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4ade80"/>
                <stop offset="100%" stopColor="#22c55e"/>
              </linearGradient>
              <linearGradient id="hillGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#86efac"/>
                <stop offset="100%" stopColor="#4ade80"/>
              </linearGradient>
              <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#67e8f9"/>
                <stop offset="100%" stopColor="#22d3ee"/>
              </linearGradient>
            </defs>

            {/* Sky background */}
            <rect fill="url(#skyGrad)" width="1200" height="300"/>

            {/* Back hills */}
            <path d="M0 180 Q200 100 400 160 Q600 220 800 150 Q1000 80 1200 140 L1200 300 L0 300 Z" fill="url(#hillGrad2)" opacity="0.6"/>

            {/* Front hills */}
            <path d="M0 220 Q150 150 350 200 Q550 250 750 190 Q950 130 1200 180 L1200 300 L0 300 Z" fill="url(#hillGrad1)"/>

            {/* Water/reflection at bottom */}
            <path d="M0 260 Q300 240 600 255 Q900 270 1200 250 L1200 300 L0 300 Z" fill="url(#waterGrad)" opacity="0.5"/>

            {/* Small decorative elements */}
            <circle cx="100" cy="50" r="20" fill="white" opacity="0.6"/>
            <circle cx="1100" cy="60" r="15" fill="white" opacity="0.5"/>
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
          {/* Left card - dark */}
          <div className="bg-gradient-to-br from-[#0d4a5c] to-[#0a3d4d] rounded-3xl p-6 text-white relative overflow-hidden">
            {/* VaultX badge */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            <p className="text-lg mb-4">
              Analyzing their <span className="text-cyan-300">experience</span> reveals the truth <span className="font-semibold">that the market itself provides the best growth for your savings.</span>
            </p>

            <Button variant="secondary" size="sm" className="mt-4">
              Learn more
              <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>

            {/* Crypto icons row */}
            <div className="flex gap-2 mt-6">
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

          {/* Right card - light with image */}
          <div className="bg-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
            {/* Background portrait placeholder */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20">
              <svg viewBox="0 0 200 300" className="w-full h-full" preserveAspectRatio="xMaxYMin slice">
                <defs>
                  <linearGradient id="miniPortrait" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4a90a4"/>
                    <stop offset="100%" stopColor="#2d5a6b"/>
                  </linearGradient>
                </defs>
                <ellipse cx="100" cy="80" rx="50" ry="60" fill="url(#miniPortrait)"/>
                <ellipse cx="100" cy="220" rx="80" ry="100" fill="url(#miniPortrait)"/>
              </svg>
            </div>

            {/* Bundles badge */}
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600 mb-4">Bundles</span>

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
