'use client';

import { Container } from './Container';
import { Button } from './Button';

export function SpaceBanner() {
  // Generate deterministic star positions
  const stars = Array.from({ length: 80 }, (_, i) => ({
    left: ((i * 17 + 23) % 100),
    top: ((i * 31 + 11) % 100),
    size: i % 3 === 0 ? 1.5 : 1,
    opacity: 0.3 + (i % 5) * 0.15
  }));

  return (
    <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      {/* Dark space background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f35] to-[#061018]">
        {/* Stars */}
        <div className="absolute inset-0">
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                opacity: star.opacity,
              }}
            />
          ))}
        </div>

        {/* Light beam rising from bottom */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full">
          {/* Wide glow at base */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-t from-cyan-500/20 via-cyan-500/5 to-transparent rounded-t-full blur-3xl" />

          {/* Narrower central beam */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[500px] bg-gradient-to-t from-white/30 via-cyan-400/10 to-transparent rounded-t-full blur-2xl" />

          {/* Central bright line */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-[300px] bg-gradient-to-t from-white via-cyan-300/50 to-transparent" />
        </div>

        {/* Central star flare */}
        <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2">
          {/* Main glow */}
          <div className="w-40 h-40 star-flare" />

          {/* Bright center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_30px_15px_rgba(255,255,255,0.9),0_0_80px_40px_rgba(0,180,255,0.5)]" />

          {/* Horizontal flare */}
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-96 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-1/2 opacity-70" />

          {/* Secondary horizontal flare */}
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent -translate-x-1/2 blur-sm" />

          {/* Vertical flare */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-0.5 h-48 bg-gradient-to-b from-transparent via-white to-transparent -translate-y-1/2 opacity-50" />
        </div>

        {/* Ambient glow at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-cyan-500/15 to-transparent" />

        {/* Side ambient glows */}
        <div className="absolute bottom-0 left-[20%] w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[20%] w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
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

          <p className="text-gray-400 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
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
