'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Zap, Gauge, BatteryCharging } from 'lucide-react';
import { IBannerItem } from '@/types/vinfast';

interface HeroBannerProps {
  banners: IBannerItem[];
}

export default function HeroBanner({ banners }: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  }, [banners.length]);

  useEffect(() => {
    if (isPaused || banners.length <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, banners.length, nextSlide]);

  if (!banners || banners.length === 0) return null;

  const currentBanner = banners[currentIndex];

  const getSpecIcon = (index: number) => {
    switch (index) {
      case 0:
        return <BatteryCharging className="w-4 h-4 text-emerald-400" />;
      case 1:
        return <Zap className="w-4 h-4 text-blue-400" />;
      case 2:
        return <Gauge className="w-4 h-4 text-purple-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
  };

  return (
    <section
      className="relative w-full min-h-[660px] sm:min-h-[720px] lg:min-h-[780px] bg-gradient-to-b from-slate-950 via-[#0a1128] to-slate-950 text-white overflow-hidden flex flex-col justify-between pt-24 pb-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* High-tech Lighting & Spotlight Background Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

      {/* Main Showcase Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full py-4">
          
          {/* Left Column: Information & Pricing & Specs */}
          <div className="lg:col-span-6 space-y-5 animate-in fade-in slide-in-from-left-4 duration-500 key={currentBanner.id}">
            {/* Badge */}
            {currentBanner.badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-semibold backdrop-blur-md shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span>{currentBanner.badge}</span>
              </div>
            )}

            {/* Vehicle Title & Tagline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-none">
                {currentBanner.title}
              </h1>
              <p className="mt-2 text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-white bg-clip-text text-transparent">
                {currentBanner.subtitle}
              </p>
            </div>

            {/* Price Highlight */}
            {currentBanner.price && (
              <div className="inline-block py-1 px-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Giá bán niêm yết: </span>
                <span className="text-xl sm:text-2xl font-black text-amber-400 ml-1">{currentBanner.price}</span>
              </div>
            )}

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              {currentBanner.description}
            </p>

            {/* Quick Specs Cards */}
            {currentBanner.specs && currentBanner.specs.length > 0 && (
              <div className="grid grid-cols-3 gap-3 max-w-lg pt-1">
                {currentBanner.specs.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col justify-center"
                  >
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-1">
                      {getSpecIcon(sIdx)}
                      <span className="truncate">{spec.label}</span>
                    </div>
                    <p className="text-sm sm:text-base font-bold text-white truncate">{spec.value}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={currentBanner.ctaLink}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>{currentBanner.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {currentBanner.secondaryCtaText && (
                <a
                  href={currentBanner.secondaryCtaLink || '#cars'}
                  target={currentBanner.secondaryCtaLink?.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 font-semibold text-sm transition-all hover:scale-105 active:scale-95"
                >
                  {currentBanner.secondaryCtaText}
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Hero Car Image with Studio Floor & Drop Shadow */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center">
            {/* Ambient Platform Glow under Car */}
            <div className="relative w-full h-64 sm:h-80 lg:h-[440px] flex items-center justify-center">
              <div className="absolute bottom-6 w-3/4 h-8 bg-blue-500/25 blur-2xl rounded-full transform scale-y-50" />
              <div className="absolute bottom-2 w-4/5 h-12 bg-black/60 blur-xl rounded-full transform scale-y-50" />

              {/* Vehicle Image with Smooth Transitions */}
              <div className="relative w-full h-full transform transition-all duration-700 ease-out hover:scale-105">
                <Image
                  key={currentBanner.carImage}
                  src={currentBanner.carImage}
                  alt={currentBanner.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.7)] animate-in zoom-in-95 duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Controls: Vehicle Selector & Nav Controls */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3 border-t border-white/10">
          
          {/* Vehicle Quick Switcher Tabs */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0 scrollbar-none">
            {banners.map((item, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40 scale-105'
                      : 'bg-white/10 hover:bg-white/20 text-slate-300'
                  }`}
                >
                  <span>{item.title.replace('VinFast ', '')}</span>
                </button>
              );
            })}
          </div>

          {/* Slider Prev / Next Arrows & Counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">
              0{currentIndex + 1} <span className="text-slate-600">/</span> 0{banners.length}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prevSlide}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors active:scale-95"
                aria-label="Previous Car"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors active:scale-95"
                aria-label="Next Car"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
