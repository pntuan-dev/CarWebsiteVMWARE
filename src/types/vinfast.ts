export type CarSegment = 'all' | 'urban' | 'suv' | 'luxury' | 'commercial';

export interface IVinFastCar {
  id: string;
  name: string;
  slug: string;
  segment: CarSegment;
  segmentLabel: string;
  tagline: string;
  description: string;
  priceWithBattery: number; // VNĐ
  priceWithoutBattery: number; // VNĐ
  batteryRentMonthly?: number; // VNĐ / tháng
  rangePerCharge: string; // ví dụ: "215 km (NEDC)" hoặc "471 km (WLTP)"
  maxPower: string; // ví dụ: "43 mã lực", "300 kW"
  maxTorque: string; // ví dụ: "110 Nm", "620 Nm"
  topSpeed: string; // ví dụ: "100 km/h", "200 km/h"
  seats: number;
  airbags: number;
  fastChargingTime: string; // ví dụ: "36 phút (10% - 70%)"
  dimensions: string; // D x R x C (mm)
  wheelbase: string; // mm
  image: string;
  badge?: 'Mới' | 'Bán chạy' | 'Hot' | 'Ưu đãi đặc biệt';
  features: string[];
  depositUrl: string;
}

export interface IVinFastMotorbike {
  id: string;
  name: string;
  slug: string;
  price: number;
  rangePerCharge: string;
  topSpeed: string;
  batteryType: string;
  chargingTime: string;
  trunkCapacity: string;
  image: string;
  tagline: string;
  badge?: string;
}

export interface IBannerItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  imageDesktop: string;
  badge?: string;
}

export interface IEcosystemItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  actionText: string;
  actionLink: string;
}

export interface IPromotionItem {
  id: string;
  title: string;
  highlight: string;
  description: string;
  tag: string;
  validUntil: string;
}

export interface IVinFastData {
  banners: IBannerItem[];
  cars: IVinFastCar[];
  motorbikes: IVinFastMotorbike[];
  ecosystem: IEcosystemItem[];
  promotions: IPromotionItem[];
}
