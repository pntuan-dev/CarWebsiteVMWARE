import React from 'react';
import Image from 'next/image';
import { Sparkles, Calendar, ArrowRight, CheckCircle } from 'lucide-react';
import { IPromotionItem } from '@/types/vinfast';

interface PromotionBannerProps {
  promotions: IPromotionItem[];
}

export default function PromotionBanner({ promotions }: PromotionBannerProps) {
  return (
    <section id="promotions" className="py-20 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Hero Card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-8 sm:p-12 shadow-2xl mb-12">
          {/* Decorative Elements */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden md:block">
            <div className="relative w-full h-full">
              <Image
                src="/images/vinfast/ecosystem/mlttvn-icon.webp"
                alt="Mãnh liệt tinh thần Việt Nam"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chiến dịch Quốc gia</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Mãnh Liệt Tinh Thần Việt Nam - Vì Tương Lai Xanh
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed">
              VinFast đồng hành cùng hàng triệu gia đình Việt trên hành trình điện hóa phương tiện giao thông. Hỗ trợ vay mua xe ưu đãi lãi suất cố định, tặng điểm VinClub và miễn phí sạc pin tại trạm sạc V-GREEN trên toàn quốc.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#cars"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-bold text-sm shadow-md hover:bg-blue-50 transition-transform active:scale-95"
              >
                <span>Xem xe áp dụng ưu đãi</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="tel:1900232389"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold text-sm backdrop-blur-sm transition-colors"
              >
                <span>Tư vấn trả góp: 1900 23 23 89</span>
              </a>
            </div>
          </div>
        </div>

        {/* Promotion Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                    {promo.tag}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{promo.validUntil}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {promo.title}
                </h3>

                <p className="text-sm font-semibold text-blue-600 mb-2">
                  {promo.highlight}
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {promo.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Áp dụng toàn quốc</span>
                </span>

                <a
                  href="#cars"
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>Chi tiết</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
