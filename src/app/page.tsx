import {
  HeroSection,
  CryptoSection,
  PhoneSection,
  GrowthSection,
  LandscapeSection,
  SpaceBanner,
  Footer,
} from '@/components/marketing';

export default function Home() {
  return (
    <main className="min-h-screen bg-background tech-pattern">
      {/* Hero Section with Nav, CTAs, and Floating Cards */}
      <HeroSection />

      {/* Crypto Entry Section */}
      <CryptoSection />

      {/* Phone Mockup Section */}
      <PhoneSection />

      {/* Growth Potential Calculator Section */}
      <GrowthSection />

      {/* Landscape & Feature Cards Section */}
      <LandscapeSection />

      {/* Dark Space Banner */}
      <SpaceBanner />

      {/* Footer */}
      <Footer />
    </main>
  );
}
