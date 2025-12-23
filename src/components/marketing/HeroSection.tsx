'use client';

import { Navbar } from './Navbar';
import { ProgressCard, BalanceCard, ProfileCard, CalculatorCard } from './FloatingCard';
import { Button } from './Button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Frame Container */}
      <div className="hero-frame relative mx-4 sm:mx-8 lg:mx-16 mt-4">
        {/* Cloud/Sky Background with gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 600'%3E%3Cdefs%3E%3ClinearGradient id='sky' x1='0%25' y1='0%25' x2='0%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2387CEEB'/%3E%3Cstop offset='100%25' style='stop-color:%23E0F4FF'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23sky)' width='1000' height='600'/%3E%3Cellipse cx='200' cy='150' rx='120' ry='60' fill='white' opacity='0.8'/%3E%3Cellipse cx='250' cy='140' rx='80' ry='50' fill='white' opacity='0.9'/%3E%3Cellipse cx='700' cy='100' rx='150' ry='70' fill='white' opacity='0.7'/%3E%3Cellipse cx='800' cy='200' rx='100' ry='50' fill='white' opacity='0.6'/%3E%3C/svg%3E")`
          }}
        />

        {/* Navigation */}
        <div className="relative z-20">
          <Navbar />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 pt-8 pb-32 sm:pt-12 sm:pb-48 lg:pt-16 lg:pb-64">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0a1628] max-w-3xl leading-tight">
            The rise <span className="text-primary">of your savings</span>
            <br />begins here
          </h1>

          <p className="mt-6 text-gray-600 max-w-lg text-sm sm:text-base">
            A turnkey way to invest in crypto, designed with top global standards of capital management.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <Button variant="dark" size="md">
              <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Start in the Web Version
            </Button>
            <Button variant="secondary" size="md">
              <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.74 3.98-1.73 6.64-2.87 7.97-3.44 3.79-1.58 4.58-1.86 5.09-1.87.11 0 .37.03.54.17.14.12.18.28.2.45-.01.06.01.24 0 .38z"/>
              </svg>
              Join via Telegram
            </Button>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-10">
            <span className="text-sm text-gray-600">Rated 4.9/5 by 2500+ customers</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
          </div>

          {/* VaultX Icon */}
          <div className="mt-8">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mx-auto opacity-60">
              <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Portrait Placeholder - positioned at bottom center */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
          <div className="relative">
            {/* Portrait placeholder */}
            <div className="w-[280px] sm:w-[350px] lg:w-[400px] h-[300px] sm:h-[380px] lg:h-[450px] rounded-t-full bg-gradient-to-b from-blue-200/50 to-transparent overflow-hidden">
              {/* Silhouette placeholder */}
              <svg viewBox="0 0 400 500" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
                <defs>
                  <linearGradient id="portraitGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4a90a4" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#2d5a6b" stopOpacity="0.9"/>
                  </linearGradient>
                </defs>
                {/* Head and shoulders silhouette */}
                <ellipse cx="200" cy="140" rx="75" ry="90" fill="url(#portraitGrad)"/>
                <ellipse cx="200" cy="350" rx="140" ry="180" fill="url(#portraitGrad)"/>
                {/* Hair accent */}
                <path d="M125 100 Q200 20 275 100 Q280 140 275 160 Q200 80 125 160 Q120 140 125 100" fill="#2d3748" opacity="0.7"/>
                {/* Glasses */}
                <g fill="none" stroke="#1a202c" strokeWidth="3">
                  <ellipse cx="165" cy="130" rx="30" ry="25"/>
                  <ellipse cx="235" cy="130" rx="30" ry="25"/>
                  <line x1="195" y1="130" x2="205" y2="130"/>
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="hidden lg:block">
          <div className="absolute top-[35%] left-[8%] z-20">
            <ProgressCard />
          </div>

          <div className="absolute top-[40%] left-[25%] z-20">
            <BalanceCard />
          </div>

          <div className="absolute top-[35%] right-[25%] z-20">
            <ProfileCard />
          </div>

          <div className="absolute top-[45%] right-[8%] z-20">
            <CalculatorCard />
          </div>
        </div>
      </div>
    </section>
  );
}
