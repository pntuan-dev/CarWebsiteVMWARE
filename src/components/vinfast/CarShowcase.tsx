'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { BatteryCharging, Gauge, Users, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { CarSegment, IVinFastCar } from '@/types/vinfast';
import CarDetailModal from './CarDetailModal';

interface CarShowcaseProps {
  cars: IVinFastCar[];
}

export default function CarShowcase({ cars }: CarShowcaseProps) {
  const [activeTab, setActiveTab] = useState<CarSegment>('all');
  const [selectedCar, setSelectedCar] = useState<IVinFastCar | null>(null);

  const filterTabs: { key: CarSegment; label: string }[] = [
    { key: 'all', label: 'Tất cả dòng xe' },
    { key: 'urban', label: 'Đô thị thông minh (VF 2, VF 3, VF 5)' },
    { key: 'suv', label: 'SUV Thể thao (VF 6, VF 7)' },
    { key: 'luxury', label: 'Thương gia hạng sang (VF 8, VF 9)' },
    { key: 'commercial', label: 'Dịch vụ Xanh & Chở hàng' },
  ];

  const filteredCars = useMemo(() => {
    if (activeTab === 'all') return cars;
    return cars.filter((car) => car.segment === activeTab);
  }, [activeTab, cars]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <section id="cars" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Khai mở tương lai xanh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Danh Mục Ô Tô Điện VinFast
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Dải sản phẩm xe điện hoàn chỉnh từ phân khúc mini đến SUV hạng sang cỡ lớn, công nghệ thông minh, bảo hành tới 10 năm.
          </p>

          {/* Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 p-1.5 bg-slate-200/70 rounded-2xl max-w-3xl mx-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.key
                    ? 'bg-white text-blue-700 shadow-sm shadow-black/5'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.map((car) => (
            <div
              key={car.id}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Box */}
              <div className="relative w-full h-56 bg-gradient-to-b from-slate-50 to-slate-100/70 overflow-hidden flex items-center justify-center p-4">
                {car.badge && (
                  <span className="absolute top-4 left-4 z-10 text-[11px] font-bold px-2.5 py-1 rounded-full bg-blue-600 text-white shadow-sm">
                    {car.badge}
                  </span>
                )}
                <span className="absolute top-4 right-4 z-10 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-200/80 text-slate-700">
                  {car.segmentLabel}
                </span>

                <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1 line-clamp-1 italic">
                    &ldquo;{car.tagline}&rdquo;
                  </p>

                  {/* Pricing */}
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-baseline justify-between">
                    <div>
                      <p className="text-[11px] text-slate-400 uppercase font-medium">Giá từ (kèm pin)</p>
                      <p className="text-lg font-bold text-blue-600">{formatCurrency(car.priceWithBattery)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px] text-slate-400 uppercase font-medium">Thuê pin</p>
                      <p className="text-sm font-semibold text-slate-700">{formatCurrency(car.priceWithoutBattery)}</p>
                    </div>
                  </div>

                  {/* Quick Specs */}
                  <div className="mt-4 grid grid-cols-3 gap-2 py-3 px-2 bg-slate-50 rounded-xl text-center">
                    <div className="flex flex-col items-center">
                      <BatteryCharging className="w-4 h-4 text-emerald-600 mb-1" />
                      <span className="text-[10px] text-slate-500">Quãng đường</span>
                      <span className="text-xs font-bold text-slate-800">{car.rangePerCharge.split(' ')[0]} km</span>
                    </div>

                    <div className="flex flex-col items-center border-x border-slate-200">
                      <Gauge className="w-4 h-4 text-blue-600 mb-1" />
                      <span className="text-[10px] text-slate-500">Công suất</span>
                      <span className="text-xs font-bold text-slate-800">{car.maxPower.split(' ')[0]} hp</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <Users className="w-4 h-4 text-purple-600 mb-1" />
                      <span className="text-[10px] text-slate-500">Chỗ ngồi</span>
                      <span className="text-xs font-bold text-slate-800">{car.seats} chỗ</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedCar(car)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-blue-600 text-slate-700 hover:text-blue-600 text-xs font-semibold transition-all hover:bg-blue-50/50"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Xem thông số</span>
                  </button>

                  <a
                    href={car.depositUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-all hover:shadow-md hover:shadow-blue-500/20 active:scale-95"
                  >
                    <span>Đặt cọc ngay</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Car Detail Modal */}
      <CarDetailModal
        car={selectedCar}
        isOpen={!!selectedCar}
        onClose={() => setSelectedCar(null)}
      />
    </section>
  );
}
