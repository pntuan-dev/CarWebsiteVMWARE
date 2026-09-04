import React from 'react';
import Image from 'next/image';
import { BatteryCharging, Gauge, ShoppingBag, ArrowRight, Zap, Sparkles } from 'lucide-react';
import { IVinFastMotorbike } from '@/types/vinfast';

interface MotorbikeSectionProps {
  motorbikes: IVinFastMotorbike[];
}

export default function MotorbikeSection({ motorbikes }: MotorbikeSectionProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  return (
    <section id="motorbikes" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Kỷ nguyên xe 2 bánh xanh</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Xe Máy Điện Thông Minh VinFast
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Công nghệ pin LFP chống cháy nổ hàng đầu, quãng đường vượt trội lên tới 205 km/lần sạc, kháng nước chuẩn IP67 thách thức mọi ngập lụt.
          </p>
        </div>

        {/* Motorbike Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motorbikes.map((bike) => (
            <div
              key={bike.id}
              className="group bg-slate-50/70 hover:bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Bike Image */}
              <div className="relative w-full h-56 bg-gradient-to-b from-slate-100/80 to-transparent flex items-center justify-center p-4">
                {bike.badge && (
                  <span className="absolute top-4 left-4 z-10 text-[11px] font-bold px-2.5 py-1 rounded-full bg-emerald-600 text-white shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{bike.badge}</span>
                  </span>
                )}
                <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={bike.imageUrl}
                    alt={bike.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Bike Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {bike.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 line-clamp-1 italic">
                  {bike.tagline}
                </p>

                {/* Price */}
                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-baseline justify-between">
                  <span className="text-xs text-slate-500 font-medium">Giá bán niêm yết</span>
                  <span className="text-lg font-bold text-emerald-600">{formatCurrency(bike.price)}</span>
                </div>

                {/* Specs */}
                <div className="mt-4 grid grid-cols-3 gap-2 py-2.5 px-2 bg-white rounded-xl border border-slate-100 text-center shadow-xs">
                  <div className="flex flex-col items-center">
                    <BatteryCharging className="w-3.5 h-3.5 text-emerald-600 mb-1" />
                    <span className="text-[10px] text-slate-400">Quãng đường</span>
                    <span className="text-xs font-bold text-slate-800">{bike.rangePerCharge.split('/')[0]}</span>
                  </div>

                  <div className="flex flex-col items-center border-x border-slate-100">
                    <Gauge className="w-3.5 h-3.5 text-blue-600 mb-1" />
                    <span className="text-[10px] text-slate-400">Vận tốc max</span>
                    <span className="text-xs font-bold text-slate-800">{bike.topSpeed}</span>
                  </div>

                  <div className="flex flex-col items-center">
                    <ShoppingBag className="w-3.5 h-3.5 text-purple-600 mb-1" />
                    <span className="text-[10px] text-slate-400">Cốp xe</span>
                    <span className="text-xs font-bold text-slate-800">{bike.trunkCapacity}</span>
                  </div>
                </div>

                {/* Battery Info Pill */}
                <div className="mt-3 text-[11px] text-slate-600 bg-slate-200/50 py-1.5 px-3 rounded-lg text-center font-medium">
                  {bike.batteryType} • Sạc {bike.chargingTime}
                </div>

                {/* CTA */}
                <a
                  href="https://shop.vinfastauto.com/vn_vi/xe-may-dien-vinfast.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white text-xs font-semibold transition-colors duration-200"
                >
                  <span>Đặt mua ngay</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
