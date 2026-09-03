'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from 'lucide-react';
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

  return (
    <section
      className="relative w-full h-[600px] sm:h-[680px] lg:h-[750px] overflow-hidden bg-slate-950 text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          } transition-transform duration-7000`}
        >
          <Image
            src={banner.imageDesktop}
            alt={banner.title}
            fill
            sizes="100vw"
            priority={index === 0}
            className="object-cover object-center"
          />
          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/50 to-transparent sm:w-2/3" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/30" />
        </div>
      ))}

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl pt-16">
          {currentBanner.badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/90 text-white text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-sm shadow-md shadow-blue-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{currentBanner.badge}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            {currentBanner.title}
          </h1>

          <p className="mt-3 text-lg sm:text-2xl font-medium text-blue-300">
            {currentBanner.subtitle}
          </p>

          <p className="mt-4 text-sm sm:text-base text-slate-200 line-clamp-3 leading-relaxed">
            {currentBanner.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={currentBanner.ctaLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/30 transition-all hover:scale-105 active:scale-95"
            >
              <span>{currentBanner.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {currentBanner.secondaryCtaText && (
              <a
                href={currentBanner.secondaryCtaLink || '#cars'}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full bg-white/20 hover:bg-white/30 text-white backdrop-blur-md border border-white/30 font-semibold text-sm transition-all hover:scale-105 active:scale-95"
              >
                {currentBanner.secondaryCtaText}
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all hover:scale-110 active:scale-95 hidden sm:flex"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all hover:scale-110 active:scale-95 hidden sm:flex"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Dots Indicator */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex items-center justify-center gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`transition-all rounded-full ${
              index === currentIndex
                ? 'w-8 h-2.5 bg-blue-500'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
