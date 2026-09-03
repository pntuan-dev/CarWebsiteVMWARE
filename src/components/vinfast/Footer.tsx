import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, Globe, Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer: Logo & Quick Contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative h-10 w-44">
              <Image
                src="/images/vinfast/logo-footer.webp"
                alt="VinFast Footer Logo"
                fill
                sizes="176px"
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              VinFast - Thành viên của Tập đoàn Vingroup, nhà sản xuất ô tô và xe máy điện thông minh tiên phong thúc đẩy cuộc cách mạng di chuyển xanh toàn cầu.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Khu kinh tế Đình Vũ - Cát Hải, đảo Vũ Yên, phường Đông Hải 2, quận Hải An, thành phố Hải Phòng, Việt Nam</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Hotline: <strong className="text-white">1900 23 23 89</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Email: <strong className="text-white">cskh@vinfastauto.com</strong></span>
              </div>
            </div>
          </div>

          {/* Col 1: Ô tô điện */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Ô tô điện</h4>
            <ul className="space-y-2.5">
              <li><Link href="#cars" className="hover:text-white transition-colors">VinFast VF 3</Link></li>
              <li><Link href="#cars" className="hover:text-white transition-colors">VinFast VF 5 Plus</Link></li>
              <li><Link href="#cars" className="hover:text-white transition-colors">VinFast VF 6</Link></li>
              <li><Link href="#cars" className="hover:text-white transition-colors">VinFast VF 7</Link></li>
              <li><Link href="#cars" className="hover:text-white transition-colors">VinFast VF 8</Link></li>
              <li><Link href="#cars" className="hover:text-white transition-colors">VinFast VF 9</Link></li>
              <li><Link href="#cars" className="hover:text-white transition-colors">VinFast MPV 7 & Limo</Link></li>
            </ul>
          </div>

          {/* Col 2: Xe máy điện */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Xe máy điện</h4>
            <ul className="space-y-2.5">
              <li><Link href="#motorbikes" className="hover:text-white transition-colors">VinFast Feliz II</Link></li>
              <li><Link href="#motorbikes" className="hover:text-white transition-colors">VinFast Evo 200</Link></li>
              <li><Link href="#motorbikes" className="hover:text-white transition-colors">VinFast Amio S</Link></li>
              <li><Link href="#motorbikes" className="hover:text-white transition-colors">VinFast Flazz Max</Link></li>
              <li><Link href="#motorbikes" className="hover:text-white transition-colors">VinFast Viper</Link></li>
              <li><Link href="#motorbikes" className="hover:text-white transition-colors">VinFast DrgnFly</Link></li>
            </ul>
          </div>

          {/* Col 3: Dịch vụ & Hệ sinh thái */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Hạ tầng & Dịch vụ</h4>
            <ul className="space-y-2.5">
              <li><Link href="#ecosystem" className="hover:text-white transition-colors">Trạm sạc V-GREEN</Link></li>
              <li><Link href="#ecosystem" className="hover:text-white transition-colors">Bộ sạc treo tường 11kW</Link></li>
              <li><Link href="#ecosystem" className="hover:text-white transition-colors">Chính sách bảo hành 10 năm</Link></li>
              <li><Link href="#ecosystem" className="hover:text-white transition-colors">Cứu hộ 24/7 & Mobile Service</Link></li>
              <li><Link href="#promotions" className="hover:text-white transition-colors">Thu cũ xe xăng đổi xe điện</Link></li>
              <li><Link href="#promotions" className="hover:text-white transition-colors">Chương trình ưu đãi lãi suất 0%</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer: Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <span>© 2026 VinFast Auto. Bản quyền thuộc về Công ty TNHH Kinh doanh Thương mại và Dịch vụ VinFast.</span>
            <div className="flex items-center gap-3">
              <Link href="#" className="hover:text-slate-300 transition-colors">Chính sách bảo mật</Link>
              <span>•</span>
              <Link href="#" className="hover:text-slate-300 transition-colors">Điều khoản dịch vụ</Link>
            </div>
          </div>

          {/* BCT Logo */}
          <div className="relative h-10 w-28 shrink-0">
            <Image
              src="/images/vinfast/bct.svg"
              alt="Đã thông báo Bộ Công Thương"
              fill
              sizes="112px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
