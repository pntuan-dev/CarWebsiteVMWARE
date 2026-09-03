'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone, Car, Zap, Shield, Sparkles, ChevronRight } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Ô tô điện', href: '#cars', icon: Car },
    { label: 'Xe máy điện', href: '#motorbikes', icon: Zap },
    { label: 'Trạm sạc V-GREEN', href: '#ecosystem', icon: Zap },
    { label: 'Dịch vụ hậu mãi', href: '#services', icon: Shield },
    { label: 'Ưu đãi đặc biệt', href: '#promotions', icon: Sparkles },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 text-slate-800'
          : 'bg-gradient-to-b from-black/70 via-black/40 to-transparent py-4 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo VinFast */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative h-10 w-36 sm:h-11 sm:w-40 transition-transform group-hover:scale-105">
            <Image
              src="/images/vinfast/logo.png"
              alt="VinFast - Mãnh liệt tinh thần Việt Nam"
              fill
              sizes="(max-width: 640px) 150px, 160px"
              priority
              className={`object-contain transition-opacity duration-300 ${
                isScrolled ? '' : 'brightness-0 invert'
              }`}
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                isScrolled
                  ? 'text-slate-700 hover:text-blue-600 hover:bg-slate-100'
                  : 'text-white/90 hover:text-white hover:bg-white/15'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Hotline */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:1900232389"
            className={`flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
              isScrolled
                ? 'border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600'
                : 'border-white/40 text-white hover:border-white hover:bg-white/10'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-blue-500 animate-pulse" />
            <span>1900 23 23 89</span>
          </a>

          <a
            href="#cars"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/30 active:scale-95"
          >
            Đặt cọc ngay
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/20'
          }`}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-slate-900 border-t border-slate-100 shadow-xl px-4 pt-4 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-800 font-medium transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <span>{item.label}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:1900232389"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Tổng đài CSKH: 1900 23 23 89</span>
            </a>
            <a
              href="#cars"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-semibold text-center text-sm shadow-md hover:bg-blue-700"
            >
              Đặt cọc xe ô tô điện
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
