'use client';

import { Navbar } from './Navbar';
import { Button } from './Button';

// Progress Card
function ProgressCard() {
  return (
    <div className="glass-card rounded-2xl p-4 shadow-lg animate-float w-[160px]">
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
    </div>
  );
}

// Balance Card
function BalanceCard() {
  return (
    <div className="glass-card rounded-2xl p-4 shadow-lg animate-float-delayed w-[180px]">
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
        <p className="text-xl font-bold text-gray-800">$12,450.00 <span className="text-xs font-normal text-gray-400">Assets</span></p>
      </div>
    </div>
  );
}

// Profile Card
function ProfileCard() {
  return (
    <div className="glass-card rounded-2xl p-4 shadow-lg animate-float-slow w-[160px]">
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
    </div>
  );
}

// Calculator Card
function CalculatorCard() {
  return (
    <div className="glass-card rounded-2xl p-4 shadow-lg animate-float-delayed w-[140px]">
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
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Frame Container */}
      <div className="hero-frame relative mx-4 sm:mx-8 lg:mx-16 mt-4">
        {/* Clouds Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Cloud 1 - Top left */}
          <div className="absolute top-[10%] left-[5%] w-40 h-20 bg-white/60 rounded-full blur-xl" />
          <div className="absolute top-[8%] left-[8%] w-32 h-16 bg-white/70 rounded-full blur-lg" />

          {/* Cloud 2 - Top right */}
          <div className="absolute top-[5%] right-[10%] w-48 h-24 bg-white/50 rounded-full blur-xl" />
          <div className="absolute top-[8%] right-[15%] w-36 h-18 bg-white/60 rounded-full blur-lg" />

          {/* Cloud 3 - Middle left */}
          <div className="absolute top-[30%] left-[-5%] w-56 h-28 bg-white/40 rounded-full blur-2xl" />

          {/* Cloud 4 - Middle right */}
          <div className="absolute top-[25%] right-[-5%] w-52 h-26 bg-white/45 rounded-full blur-2xl" />

          {/* Cloud 5 - Near portrait */}
          <div className="absolute top-[40%] left-[20%] w-32 h-16 bg-white/50 rounded-full blur-xl" />
          <div className="absolute top-[35%] right-[20%] w-36 h-20 bg-white/45 rounded-full blur-xl" />
        </div>

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
            <span className="text-sm text-gray-600">Rated 4.9/5 by 2100+ customers</span>
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

        {/* Portrait - Woman with glasses */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
          <div className="relative">
            <div className="w-[280px] sm:w-[350px] lg:w-[420px] h-[320px] sm:h-[400px] lg:h-[480px] overflow-hidden">
              <svg viewBox="0 0 420 500" className="w-full h-full" preserveAspectRatio="xMidYMax slice">
                <defs>
                  <linearGradient id="skinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c4a98f"/>
                    <stop offset="50%" stopColor="#b89a7d"/>
                    <stop offset="100%" stopColor="#a88b6e"/>
                  </linearGradient>
                  <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2d1810"/>
                    <stop offset="50%" stopColor="#3d2518"/>
                    <stop offset="100%" stopColor="#2a1508"/>
                  </linearGradient>
                  <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4a9ead"/>
                    <stop offset="100%" stopColor="#3d8494"/>
                  </linearGradient>
                  <radialGradient id="eyeGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#8B4513"/>
                    <stop offset="70%" stopColor="#654321"/>
                    <stop offset="100%" stopColor="#3d2914"/>
                  </radialGradient>
                  <linearGradient id="glassesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#87CEEB" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#ADD8E6" stopOpacity="0.2"/>
                  </linearGradient>
                </defs>

                {/* Curly Hair - Back */}
                <g fill="url(#hairGrad)">
                  {/* Large curls on left side */}
                  <circle cx="115" cy="120" r="45"/>
                  <circle cx="95" cy="160" r="40"/>
                  <circle cx="80" cy="210" r="38"/>
                  <circle cx="85" cy="260" r="35"/>
                  <circle cx="100" cy="300" r="32"/>
                  <circle cx="120" cy="80" r="35"/>

                  {/* Large curls on right side */}
                  <circle cx="305" cy="120" r="45"/>
                  <circle cx="325" cy="160" r="40"/>
                  <circle cx="340" cy="210" r="38"/>
                  <circle cx="335" cy="260" r="35"/>
                  <circle cx="320" cy="300" r="32"/>
                  <circle cx="300" cy="80" r="35"/>

                  {/* Top hair curls */}
                  <circle cx="150" cy="55" r="30"/>
                  <circle cx="190" cy="40" r="32"/>
                  <circle cx="230" cy="38" r="34"/>
                  <circle cx="270" cy="45" r="30"/>
                  <circle cx="210" cy="55" r="28"/>
                </g>

                {/* Face */}
                <ellipse cx="210" cy="200" rx="90" ry="110" fill="url(#skinGrad)"/>

                {/* Neck */}
                <path d="M170 290 Q170 350 180 400 L240 400 Q250 350 250 290" fill="url(#skinGrad)"/>

                {/* Shirt/Shoulders */}
                <path d="M100 400 Q120 380 180 390 L240 390 Q300 380 320 400 L340 500 L80 500 Z" fill="url(#shirtGrad)"/>

                {/* Curly Hair - Front overlay */}
                <g fill="url(#hairGrad)">
                  <circle cx="140" cy="100" r="25"/>
                  <circle cx="280" cy="100" r="25"/>
                  <circle cx="160" cy="75" r="20"/>
                  <circle cx="260" cy="75" r="20"/>
                </g>

                {/* Eyebrows */}
                <path d="M150 155 Q170 148 190 155" fill="none" stroke="#3d2518" strokeWidth="3" strokeLinecap="round"/>
                <path d="M230 155 Q250 148 270 155" fill="none" stroke="#3d2518" strokeWidth="3" strokeLinecap="round"/>

                {/* Eyes */}
                <g>
                  {/* Left eye */}
                  <ellipse cx="170" cy="175" rx="18" ry="12" fill="white"/>
                  <circle cx="172" cy="175" r="8" fill="url(#eyeGrad)"/>
                  <circle cx="174" cy="173" r="3" fill="white"/>
                  <circle cx="170" cy="176" r="2" fill="#000"/>

                  {/* Right eye */}
                  <ellipse cx="250" cy="175" rx="18" ry="12" fill="white"/>
                  <circle cx="248" cy="175" r="8" fill="url(#eyeGrad)"/>
                  <circle cx="250" cy="173" r="3" fill="white"/>
                  <circle cx="246" cy="176" r="2" fill="#000"/>
                </g>

                {/* Glasses */}
                <g fill="none" stroke="#1a365d" strokeWidth="3">
                  {/* Left lens frame */}
                  <ellipse cx="170" cy="175" rx="35" ry="28" fill="url(#glassesGrad)"/>
                  {/* Right lens frame */}
                  <ellipse cx="250" cy="175" rx="35" ry="28" fill="url(#glassesGrad)"/>
                  {/* Bridge */}
                  <path d="M205 175 L215 175" strokeWidth="2"/>
                  {/* Temple arms */}
                  <path d="M135 168 L100 155" strokeWidth="2"/>
                  <path d="M285 168 L320 155" strokeWidth="2"/>
                </g>

                {/* Nose */}
                <path d="M210 180 Q215 210 210 230 Q205 235 210 240" fill="none" stroke="#a88b6e" strokeWidth="2" strokeLinecap="round"/>

                {/* Lips */}
                <path d="M185 265 Q210 275 235 265" fill="none" stroke="#c27070" strokeWidth="4" strokeLinecap="round"/>
                <path d="M190 267 Q210 258 230 267" fill="none" stroke="#d48888" strokeWidth="3" strokeLinecap="round"/>

                {/* Subtle smile lines */}
                <path d="M180 260 Q175 265 178 272" fill="none" stroke="#b89a7d" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
                <path d="M240 260 Q245 265 242 272" fill="none" stroke="#b89a7d" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="hidden lg:block">
          <div className="absolute top-[32%] left-[6%] z-20">
            <ProgressCard />
          </div>

          <div className="absolute top-[42%] left-[22%] z-20">
            <BalanceCard />
          </div>

          <div className="absolute top-[32%] right-[22%] z-20">
            <ProfileCard />
          </div>

          <div className="absolute top-[45%] right-[6%] z-20">
            <CalculatorCard />
          </div>
        </div>
      </div>
    </section>
  );
}
