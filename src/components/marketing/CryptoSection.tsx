'use client';

import { Container } from './Container';
import { Button } from './Button';

export function CryptoSection() {
  return (
    <section className="py-20 tech-pattern relative">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto relative">
          {/* Decorative crypto/tech icons scattered around */}

          {/* Left side decorations */}
          <div className="absolute -left-20 top-0 opacity-20">
            <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>

          <div className="absolute -left-16 top-32 opacity-25">
            <svg className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>

          <div className="absolute -left-24 bottom-20 opacity-20">
            <svg className="h-10 w-10 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
          </div>

          {/* Right side decorations */}
          <div className="absolute -right-20 top-8 opacity-20">
            <svg className="h-7 w-7 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>

          <div className="absolute -right-16 top-40 opacity-25">
            <svg className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>

          <div className="absolute -right-24 bottom-16 opacity-20">
            <svg className="h-8 w-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
          </div>

          {/* Bottom decorations */}
          <div className="absolute left-0 bottom-0 opacity-15">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>

          <div className="absolute right-8 bottom-8 opacity-15">
            <svg className="h-6 w-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight">
            A clear <span className="inline-block">🔑</span> entry to the the
            <br />
            complicated <span className="inline-block">🌐💰</span> world of
            <br />
            <span className="gradient-text">cryptocurrencies</span>
          </h2>

          <p className="mt-8 text-gray-600 max-w-md">
            Mineral does not require special knowledge. It is easy to use and accessible to anyone who wants to increase their savings.
          </p>

          <Button variant="dark" size="md" className="mt-8">
            Learn more
            <svg className="h-4 w-4 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </Container>
    </section>
  );
}
