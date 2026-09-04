'use client';

import React from 'react';
import Image from 'next/image';
import { X, BatteryCharging, Gauge, Users, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { IVinFastCar } from '@/types/vinfast';

interface CarDetailModalProps {
  car: IVinFastCar | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CarDetailModal({ car, isOpen, onClose }: CarDetailModalProps) {
  if (!isOpen || !car) return null;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Modal */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700">
                {car.segmentLabel}
              </span>
              {car.badge && (
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-red-500 text-white">
                  {car.badge}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">{car.name}</h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Đóng"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Car Image Preview */}
          <div className="relative w-full h-56 sm:h-72 bg-gradient-to-b from-slate-50 to-slate-100 rounded-2xl overflow-hidden flex items-center justify-center">
            <Image
              src={car.imageUrl}
              alt={car.name}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className="object-contain p-4 transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Pricing Box */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-2xl bg-blue-50/60 border border-blue-100">
            <div>
              <p className="text-xs font-medium text-slate-500">Giá bán kèm pin</p>
              <p className="text-xl font-bold text-blue-700 mt-0.5">{formatCurrency(car.priceWithBattery)}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Giá bán thuê pin</p>
              <p className="text-xl font-bold text-slate-800 mt-0.5">{formatCurrency(car.priceWithoutBattery)}</p>
              {car.batteryRentMonthly && (
                <p className="text-xs text-slate-500 mt-0.5">
                  (Phí thuê pin: {formatCurrency(car.batteryRentMonthly)}/tháng)
                </p>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{car.description}</p>

          {/* Technical Specifications Grid */}
          <div>
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-600" />
              <span>Thông số kỹ thuật tiêu biểu</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                  <BatteryCharging className="w-4 h-4 text-emerald-600" />
                  <span>Quãng đường</span>
                </div>
                <p className="font-semibold text-slate-800 text-sm">{car.rangePerCharge}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                  <Gauge className="w-4 h-4 text-blue-600" />
                  <span>Công suất cực đại</span>
                </div>
                <p className="font-semibold text-slate-800 text-sm">{car.maxPower}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                  <Users className="w-4 h-4 text-purple-600" />
                  <span>Số chỗ ngồi</span>
                </div>
                <p className="font-semibold text-slate-800 text-sm">{car.seats} chỗ</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                  <Shield className="w-4 h-4 text-red-500" />
                  <span>Túi khí an toàn</span>
                </div>
                <p className="font-semibold text-slate-800 text-sm">{car.airbags} túi khí</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span>Sạc nhanh</span>
                </div>
                <p className="font-semibold text-slate-800 text-sm">{car.fastChargingTime}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                  <Gauge className="w-4 h-4 text-indigo-500" />
                  <span>Tốc độ tối đa</span>
                </div>
                <p className="font-semibold text-slate-800 text-sm">{car.topSpeed}</p>
              </div>
            </div>
          </div>

          {/* Key Features */}
          {car.features && car.features.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-3">Tính năng & Trang bị nổi bật</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {car.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Modal Actions */}
        <div className="sticky bottom-0 z-20 flex items-center justify-end gap-3 px-6 py-4 bg-slate-50 border-t border-slate-200">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-800 rounded-xl hover:bg-slate-200/60 transition-colors"
          >
            Đóng lại
          </button>
          <a
            href={car.depositUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
          >
            <span>Đặt cọc ngay</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
