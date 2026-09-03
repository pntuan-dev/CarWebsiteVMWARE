import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VinFast - Cùng Bạn Bứt Phá Mọi Giới Hạn | Website Chính Thức",
  description: "Khám phá các dòng ô tô điện VinFast VF 3, VF 5, VF 6, VF 7, VF 8, VF 9, xe máy điện thông minh và hệ thống trạm sạc V-GREEN lớn nhất Việt Nam.",
  keywords: ["VinFast", "ô tô điện", "xe điện", "VF3", "VF5", "VF6", "VF7", "VF8", "VF9", "xe máy điện", "V-GREEN"],
  icons: {
    icon: "/images/vinfast/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">{children}</body>
    </html>
  );
}
