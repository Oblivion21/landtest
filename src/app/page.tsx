import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8f4fc]">
      {/* Hero Section */}
      <section className="relative mx-4 lg:mx-12 mt-4">
        <div className="hero-container relative rounded-[40px] rounded-b-[180px] bg-gradient-to-b from-[#7ec8e8] via-[#a8daf0] to-[#d4eef8] overflow-hidden">
          {/* Clouds */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[8%] left-[5%] w-48 h-24 bg-white/70 rounded-full blur-2xl" />
            <div className="absolute top-[5%] left-[15%] w-32 h-16 bg-white/80 rounded-full blur-xl" />
            <div className="absolute top-[10%] right-[10%] w-56 h-28 bg-white/60 rounded-full blur-2xl" />
            <div className="absolute top-[6%] right-[20%] w-40 h-20 bg-white/70 rounded-full blur-xl" />
            <div className="absolute top-[25%] left-[0%] w-64 h-32 bg-white/50 rounded-full blur-3xl" />
            <div className="absolute top-[20%] right-[0%] w-60 h-30 bg-white/50 rounded-full blur-3xl" />
          </div>

          {/* Navigation */}
          <nav className="relative z-20 flex items-center justify-between px-6 py-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-lg text-[#0a1628]">VaultX</span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              <Link href="#" className="px-4 py-2 text-sm font-medium text-white bg-[#0a1628] rounded-full">Dashboard</Link>
              <Link href="#" className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">Invest</Link>
              <Link href="#" className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">Prices</Link>
              <Link href="#" className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">Help</Link>
              <Link href="#" className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">Blog</Link>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <Link href="#" className="text-sm text-gray-700 hover:text-gray-900">Log In</Link>
              <Link href="#" className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#0a1628] rounded-full">
                Get Started
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </nav>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-4 pt-8 pb-64 lg:pb-80">
            <h1 className="text-4xl lg:text-6xl font-bold text-[#0a1628] leading-tight">
              The rise <span className="text-[#0066ff]">of your savings</span>
              <br />begins here
            </h1>
            <p className="mt-6 text-gray-600 max-w-md mx-auto">
              A turnkey way to invest in crypto, designed with top global standards of capital management.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0a1628] text-white text-sm font-medium rounded-full">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Start in the Web Version
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0066ff] text-white text-sm font-medium rounded-full">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.017.017 0 00-.02-.02c-.08-.05-.13-.03-.19-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.74 3.98-1.73 6.64-2.87 7.97-3.44 3.79-1.58 4.58-1.86 5.09-1.87.11 0 .37.03.54.17.14.12.18.28.2.45-.01.06.01.24 0 .38z"/>
                </svg>
                Join via Telegram
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 mt-8">
              <span className="text-sm text-gray-600">Rated 4.9/5 by 2100+ customers</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="w-10 h-10 mx-auto bg-gradient-to-br from-blue-500/50 to-cyan-400/50 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Woman Image Placeholder */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
            <div className="w-[300px] lg:w-[420px] h-[350px] lg:h-[480px] bg-gradient-to-b from-[#5a9cad]/80 to-[#4a8a9a]/90 rounded-t-full overflow-hidden flex items-end justify-center">
              {/* Stylized portrait representation */}
              <svg viewBox="0 0 300 400" className="w-full h-full">
                <defs>
                  <linearGradient id="skin" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4a574"/>
                    <stop offset="100%" stopColor="#c49a6c"/>
                  </linearGradient>
                  <linearGradient id="hair" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2c1810"/>
                    <stop offset="100%" stopColor="#1a0f0a"/>
                  </linearGradient>
                  <linearGradient id="shirt" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#4a9cad"/>
                    <stop offset="100%" stopColor="#3a8494"/>
                  </linearGradient>
                </defs>
                {/* Hair back */}
                <g fill="url(#hair)">
                  <ellipse cx="150" cy="100" rx="85" ry="70"/>
                  <circle cx="70" cy="120" r="35"/>
                  <circle cx="230" cy="120" r="35"/>
                  <circle cx="55" cy="170" r="32"/>
                  <circle cx="245" cy="170" r="32"/>
                  <circle cx="50" cy="220" r="30"/>
                  <circle cx="250" cy="220" r="30"/>
                  <circle cx="60" cy="270" r="28"/>
                  <circle cx="240" cy="270" r="28"/>
                </g>
                {/* Face */}
                <ellipse cx="150" cy="180" rx="70" ry="85" fill="url(#skin)"/>
                {/* Neck */}
                <rect x="120" y="250" width="60" height="60" fill="url(#skin)"/>
                {/* Shoulders */}
                <path d="M70 310 Q100 290 150 300 Q200 290 230 310 L250 400 L50 400 Z" fill="url(#shirt)"/>
                {/* Hair front curls */}
                <g fill="url(#hair)">
                  <circle cx="90" cy="110" r="20"/>
                  <circle cx="210" cy="110" r="20"/>
                  <circle cx="110" cy="85" r="18"/>
                  <circle cx="190" cy="85" r="18"/>
                </g>
                {/* Glasses */}
                <g fill="none" stroke="#1e3a5f" strokeWidth="3">
                  <ellipse cx="120" cy="170" rx="30" ry="24"/>
                  <ellipse cx="180" cy="170" rx="30" ry="24"/>
                  <path d="M150 170 L150 170" strokeWidth="2"/>
                  <path d="M90 165 L60 155"/>
                  <path d="M210 165 L240 155"/>
                </g>
                {/* Eyes */}
                <ellipse cx="120" cy="170" rx="10" ry="8" fill="#fff"/>
                <ellipse cx="180" cy="170" rx="10" ry="8" fill="#fff"/>
                <circle cx="122" cy="170" r="5" fill="#4a3728"/>
                <circle cx="182" cy="170" r="5" fill="#4a3728"/>
                {/* Eyebrows */}
                <path d="M100 150 Q120 145 140 152" fill="none" stroke="url(#hair)" strokeWidth="3" strokeLinecap="round"/>
                <path d="M160 152 Q180 145 200 150" fill="none" stroke="url(#hair)" strokeWidth="3" strokeLinecap="round"/>
                {/* Nose */}
                <path d="M150 175 Q152 195 150 210" fill="none" stroke="#b8956e" strokeWidth="2"/>
                {/* Lips */}
                <path d="M130 235 Q150 245 170 235" fill="none" stroke="#c4877a" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="hidden lg:block">
            {/* Progress Card - Left */}
            <div className="absolute top-[35%] left-[5%] bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg w-[160px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500">Progress</span>
              </div>
              <p className="text-sm font-semibold text-gray-800">Track<br/>Your Progress</p>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-lg font-bold text-green-500">+59%</span>
                <span className="text-xs text-gray-400">growth</span>
              </div>
            </div>

            {/* Balance Card - Left Center */}
            <div className="absolute top-[50%] left-[18%] bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg w-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500">Crypto</span>
              </div>
              <p className="text-sm text-gray-600">Track your<br/>crypto journey<br/>effortlessly</p>
              <p className="text-xl font-bold text-gray-800 mt-2">$12,450.00 <span className="text-xs font-normal text-gray-400">Assets</span></p>
            </div>

            {/* Profile Card - Right Center */}
            <div className="absolute top-[35%] right-[18%] bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg w-[160px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">S</span>
                </div>
                <span className="text-xs text-gray-500">Profile</span>
              </div>
              <p className="text-sm font-medium text-gray-800">Hi, Sam</p>
              <p className="text-xs text-gray-500">Account Wallet</p>
              <p className="text-lg font-bold text-gray-800 mt-1">$5,921.20</p>
            </div>

            {/* Calculator Card - Right */}
            <div className="absolute top-[55%] right-[5%] bg-white/95 backdrop-blur rounded-2xl p-4 shadow-lg w-[140px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-400 to-red-500 rounded flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs text-gray-500">Calculator</span>
              </div>
              <div className="flex gap-1">
                <div className="w-6 h-6 bg-gray-100 rounded"></div>
                <div className="w-6 h-6 bg-gray-100 rounded"></div>
                <div className="w-6 h-6 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Section */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center relative">
          {/* Decorative icons */}
          <div className="absolute -left-16 top-0 opacity-20 hidden lg:block">
            <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div className="absolute -right-16 top-10 opacity-20 hidden lg:block">
            <svg className="w-6 h-6 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <div className="absolute -left-20 bottom-10 opacity-20 hidden lg:block">
            <svg className="w-10 h-10 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
            </svg>
          </div>
          <div className="absolute -right-20 bottom-0 opacity-20 hidden lg:block">
            <svg className="w-7 h-7 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-[#0a1628] leading-tight">
            A clear 🔑 entry to the the
            <br />
            complicated 🌐💰 world of
            <br />
            <span className="bg-gradient-to-r from-[#0066ff] to-[#00d4ff] bg-clip-text text-transparent">cryptocurrencies</span>
          </h2>
          <p className="mt-8 text-gray-600 max-w-md mx-auto">
            Mineral does not require special knowledge. It is easy to use and accessible to anyone who wants to increase their savings.
          </p>
          <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-[#0a1628] text-white text-sm font-medium rounded-full">
            Learn more
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Phone Section */}
      <section className="py-16 px-4">
        <div className="flex justify-center">
          <div className="relative w-[280px]">
            {/* Phone Frame */}
            <div className="bg-[#0a1628] rounded-[3rem] p-3">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Notch */}
                <div className="h-8 bg-gray-50 flex items-center justify-center">
                  <div className="w-20 h-5 bg-black rounded-full"></div>
                </div>
                {/* Content */}
                <div className="p-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="font-bold text-[#0a1628]">VaultX</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">VaultX&apos;35</p>
                    <p className="text-xs text-gray-400">Global Crypto Portfolio</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4">
                    <p className="text-xs text-gray-500">Current Balance</p>
                    <p className="text-3xl font-bold text-[#0a1628]">$1,234.00</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 py-2 bg-[#0066ff] text-white text-sm rounded-full font-medium">Indicate</button>
                    <button className="flex-1 py-2 bg-gray-100 text-gray-600 text-sm rounded-full font-medium">Description</button>
                  </div>
                  <div className="h-20 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl flex items-end justify-around px-2 pb-2">
                    {[40, 60, 45, 80, 55, 70, 90].map((h, i) => (
                      <div key={i} className="w-4 bg-gradient-to-t from-blue-400 to-cyan-400 rounded-t" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#e8f4fc] to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left - Calculator Display */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-blue-500 rounded flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm text-gray-500">Calculator</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0a1628] mb-8">
                See your growth <span className="bg-gradient-to-r from-[#0066ff] to-[#00d4ff] bg-clip-text text-transparent">potential</span>
              </h2>

              <div className="bg-white rounded-3xl shadow-xl p-6 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full">
                    <span className="text-green-600 font-bold">+67%</span>
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm text-gray-500">The average annual return of Mineral35 over the past 4 years</p>

                {/* Green Calculator Card */}
                <div className="bg-gradient-to-br from-[#0a4d3c] to-[#0d6b54] rounded-2xl p-5 text-white">
                  <p className="text-sm opacity-80 mb-4">Easily estimate your savings and returns in seconds with our intuitive crypto calculator.</p>
                  <div className="flex items-end justify-between">
                    <div className="flex gap-1">
                      {[60, 80, 50, 70, 90, 65, 85].map((h, i) => (
                        <div key={i} className="w-3 bg-green-400/60 rounded-t" style={{ height: `${h * 0.5}px` }} />
                      ))}
                    </div>
                    <button className="px-4 py-2 bg-white/20 rounded-full text-sm">Open Calculator →</button>
                  </div>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-xs text-gray-500">Your Contributions</span>
                    </div>
                    <div className="flex gap-1 items-end h-16">
                      {[30, 45, 55, 40, 60, 50, 70].map((h, i) => (
                        <div key={i} className="flex-1 bg-blue-500 rounded-t" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-xs text-gray-500">Investment Gains</span>
                    </div>
                    <div className="flex gap-1 items-end h-16">
                      {[40, 60, 80, 55, 75, 90, 95].map((h, i) => (
                        <div key={i} className="flex-1 bg-green-500 rounded-t" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Input Panel */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl shadow-xl p-6 space-y-6">
                <h3 className="font-semibold text-[#0a1628]">Investment Period</h3>
                <div className="flex gap-2 flex-wrap">
                  {['1 year', '2 years', '3 years', '4 years'].map((p, i) => (
                    <button key={p} className={`px-4 py-2 rounded-full text-sm ${i === 3 ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600'}`}>{p}</button>
                  ))}
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Average Annual in Mineral35</span>
                  <span className="font-semibold text-green-500">67%</span>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-500 block mb-2">Initial Deposit</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                      <input type="text" defaultValue="20000" className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500 block mb-2">Monthly Deposit</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                      <input type="text" defaultValue="0" className="w-full pl-8 pr-4 py-3 border border-gray-200 rounded-xl" />
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Projected Balance</p>
                  <p className="text-3xl font-bold text-[#0a1628]">$29,669</p>
                </div>
                <button className="w-full py-3 bg-[#0066ff] text-white font-medium rounded-full">Calculate</button>
                <p className="text-xs text-gray-400">The calculations shown in this tool are meant for illustrative purposes only. Past performance is no guarantee of future results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Landscape Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Landscape SVG */}
          <div className="h-[200px] lg:h-[280px] rounded-3xl overflow-hidden mb-12">
            <svg viewBox="0 0 1200 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e0f4ff"/>
                  <stop offset="100%" stopColor="#f0f9ff"/>
                </linearGradient>
                <linearGradient id="hill1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4ade80"/>
                  <stop offset="100%" stopColor="#16a34a"/>
                </linearGradient>
                <linearGradient id="hill2" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#86efac"/>
                  <stop offset="100%" stopColor="#22c55e"/>
                </linearGradient>
                <linearGradient id="water" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#67e8f9"/>
                  <stop offset="100%" stopColor="#06b6d4"/>
                </linearGradient>
              </defs>
              <rect fill="url(#sky)" width="1200" height="300"/>
              <path d="M0 200 Q200 140 400 180 Q600 220 800 170 Q1000 120 1200 160 L1200 300 L0 300 Z" fill="url(#hill2)" opacity="0.6"/>
              <path d="M0 230 Q150 180 350 210 Q550 250 750 200 Q950 150 1200 190 L1200 300 L0 300 Z" fill="url(#hill1)"/>
              <path d="M0 270 Q300 255 600 265 Q900 275 1200 260 L1200 300 L0 300 Z" fill="url(#water)" opacity="0.7"/>
            </svg>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span className="text-sm text-gray-500">How the index works</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-[#0a1628] max-w-2xl leading-tight mb-12">
            The best minds have been
            <br />
            <span className="bg-gradient-to-r from-[#0066ff] to-[#00d4ff] bg-clip-text text-transparent">seeking approaches</span> to capital
            <br />
            management for decades.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Dark Card */}
            <div className="bg-gradient-to-br from-[#0d4a5c] to-[#0a3d4d] rounded-3xl p-6 text-white min-h-[280px]">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="text-lg mb-6 leading-relaxed">
                Analyzing their <span className="text-cyan-300">experience</span> reveals the truth <span className="font-semibold">that the market itself provides the best growth for your savings.</span>
              </p>
              <button className="px-4 py-2 bg-[#0066ff] text-white text-sm rounded-full mb-6">Learn more →</button>
              <div className="flex gap-2">
                {['T', 'V', 'B', 'S', 'E', 'D'].map((l, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold ${['bg-blue-500', 'bg-cyan-400', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'][i]}`}>{l}</div>
                ))}
              </div>
            </div>

            {/* Light Card */}
            <div className="bg-gradient-to-br from-[#87ceeb]/30 to-[#e0f4ff] rounded-3xl p-6 shadow-lg min-h-[280px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
                <svg viewBox="0 0 200 300" className="w-full h-full">
                  <ellipse cx="100" cy="80" rx="50" ry="60" fill="#4a90a4"/>
                  <ellipse cx="100" cy="220" rx="70" ry="90" fill="#4a90a4"/>
                </svg>
              </div>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white/80 rounded-full text-xs text-gray-600 mb-6">Bundles</span>
                <p className="text-3xl font-bold text-[#0a1628]">$8,234.00</p>
                <p className="text-sm text-gray-500">2.35 <span className="text-green-500">↑</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Space Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0d1f35] to-[#061018]">
          {/* Stars */}
          {[...Array(60)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 bg-white rounded-full" style={{ left: `${(i * 17 + 23) % 100}%`, top: `${(i * 31 + 11) % 100}%`, opacity: 0.3 + (i % 5) * 0.15 }} />
          ))}
          {/* Light beam */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[300px] bg-gradient-to-t from-cyan-500/30 via-cyan-500/10 to-transparent rounded-t-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-[200px] bg-gradient-to-t from-white via-cyan-300/50 to-transparent" />
          {/* Star flare */}
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_30px_15px_rgba(255,255,255,0.9),0_0_80px_40px_rgba(0,180,255,0.5)]" />
        </div>
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
            Expansion
            <br />
            potential of the
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">cryptocurrency market</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Fast tech progress and rising attention from leading financial and governmental institutions show that we are only at the start of the path.
          </p>
          <button className="px-6 py-3 border border-white/30 text-white text-sm rounded-full hover:bg-white/10">
            Learn more →
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a1628] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold text-lg">VaultX</span>
            </Link>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Terms of Service</Link>
              <Link href="#" className="hover:text-white">Support</Link>
              <Link href="#" className="hover:text-white">Contact</Link>
            </nav>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.017.017 0 00-.02-.02c-.08-.05-.13-.03-.19-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.74 3.98-1.73 6.64-2.87 7.97-3.44 3.79-1.58 4.58-1.86 5.09-1.87.11 0 .37.03.54.17.14.12.18.28.2.45-.01.06.01.24 0 .38z"/></svg>
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 VaultX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
