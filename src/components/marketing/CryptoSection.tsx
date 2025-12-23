'use client';

import { Container } from './Container';
import { Button } from './Button';

// Crypto icon components
function CryptoIcon({ color, letter }: { color: string; letter: string }) {
  return (
    <div className={`h-8 w-8 rounded-full ${color} flex items-center justify-center text-white font-bold text-xs`}>
      {letter}
    </div>
  );
}

export function CryptoSection() {
  return (
    <section className="py-20 tech-pattern">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          {/* Decorative icons around text */}
          <div className="relative w-full">
            {/* Scattered crypto icons - positioned absolutely */}
            <div className="absolute -left-4 top-0 opacity-30">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="absolute -right-8 top-8 opacity-30">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="absolute left-8 bottom-0 opacity-30">
              <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="absolute right-4 bottom-8 opacity-30">
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
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
            <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Button>
        </div>
      </Container>
    </section>
  );
}
