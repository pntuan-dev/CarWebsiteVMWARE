import React from 'react';
import Header from '@/components/vinfast/Header';
import HeroBanner from '@/components/vinfast/HeroBanner';
import CarShowcase from '@/components/vinfast/CarShowcase';
import PromotionBanner from '@/components/vinfast/PromotionBanner';
import MotorbikeSection from '@/components/vinfast/MotorbikeSection';
import EcosystemSection from '@/components/vinfast/EcosystemSection';
import Footer from '@/components/vinfast/Footer';
import { VinFastService } from '@/services/vinfast.service';

export default async function Home() {
  const [banners, cars, motorbikes, ecosystem, promotions] = await Promise.all([
    VinFastService.getBanners(),
    VinFastService.getCars(),
    VinFastService.getMotorbikes(),
    VinFastService.getEcosystem(),
    VinFastService.getPromotions(),
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Header Navigation */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* 1. Hero Carousel Banners */}
        <HeroBanner banners={banners} />

        {/* 2. Electric Cars Showcase with Segment Filters */}
        <CarShowcase cars={cars} />

        {/* 3. National Promotion & Green Transition Campaign */}
        <PromotionBanner promotions={promotions} />

        {/* 4. Smart Electric Motorbikes */}
        <MotorbikeSection motorbikes={motorbikes} />

        {/* 5. V-GREEN Charging Network & After-sales Services */}
        <EcosystemSection items={ecosystem} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
