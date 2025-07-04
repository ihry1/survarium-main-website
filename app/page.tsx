'use client';

import EconomySection from '@/components/EconomySection';
import BuildSection from '@/components/BuildSection';
import FantasyVideoFrame from '@/components/FantasyVideoFrame';
import HeroSection from '@/components/HeroSection';
import SurvivalSection from '@/components/SurvivalSection';
import CallToActionSection from '@/components/CallToActionSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <HeroSection />
      <FantasyVideoFrame src="https://survariumbsc.com/0420.mp4" />
      <EconomySection />
      <SurvivalSection />
      <BuildSection />
      <CallToActionSection />
    </div>
  );
}
