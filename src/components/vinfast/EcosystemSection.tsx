import React from 'react';
import Image from 'next/image';
import { Zap, Home, ShieldCheck, RefreshCw, ArrowRight } from 'lucide-react';
import { IEcosystemItem } from '@/types/vinfast';

interface EcosystemSectionProps {
  items: IEcosystemItem[];
}

export default function EcosystemSection({ items }: EcosystemSectionProps) {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Home':
        return <Home className="w-5 h-5 text-blue-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-emerald-500" />;
      case 'RefreshCw':
        return <RefreshCw className="w-5 h-5 text-purple-500" />;
      default:
        return <Zap className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="ecosystem" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 uppercase tracking-wider">
            Hệ sinh thái toàn diện
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
            Hạ Tầng Trạm Sạc & Dịch Vụ Hậu Mãi Số 1
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            VinFast kiến tạo mạng lưới sạc điện V-GREEN phủ khắp mọi miền đất nước cùng chính sách bảo hành, cứu hộ chuẩn quốc tế.
          </p>
        </div>

        {/* Ecosystem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-800/80 hover:bg-slate-800 rounded-3xl p-6 border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Preview */}
                <div className="relative w-full h-40 bg-slate-950/60 rounded-2xl overflow-hidden mb-6 flex items-center justify-center p-3">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-contain transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Icon & Title */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="p-2 rounded-xl bg-slate-700/50 border border-slate-600/40">
                    {getIcon(item.iconName)}
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-3">
                  {item.description}
                </p>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-slate-700/50">
                <a
                  href={item.actionLink}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>{item.actionText}</span>
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
