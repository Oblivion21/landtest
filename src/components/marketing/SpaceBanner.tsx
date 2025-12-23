'use client';

import { Container } from './Container';
import { Button } from './Button';

export function SpaceBanner() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Dark space background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f35] to-[#0a1628]">
        {/* Stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        {/* Central star flare */}
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2">
          {/* Main glow */}
          <div className="w-32 h-32 star-flare" />

          {/* Bright center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_20px_10px_rgba(255,255,255,0.8),0_0_60px_30px_rgba(0,180,255,0.4)]" />

          {/* Horizontal flare */}
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-64 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-1/2 opacity-60" />

          {/* Vertical flare */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-0.5 h-32 bg-gradient-to-b from-transparent via-white to-transparent -translate-y-1/2 opacity-40" />
        </div>

        {/* Ambient glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cyan-500/10 to-transparent" />
      </div>

      <Container className="relative z-10">
        <div className="text-center text-white max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Expansion
            <br />
            potential of the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">cryptocurrency market</span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Fast tech progress and rising attention from leading financial and governmental institutions show that we are only at the start of the path.
          </p>

          <Button variant="outline" size="md" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:border-white/40">
            Learn more
            <svg className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
        </div>
      </Container>
    </section>
  );
}
