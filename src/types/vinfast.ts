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
  imageUrl: string; // MinIO URL hoặc CDN
  badge?: string;
  features: string[];
  depositUrl: string;
  isActive?: boolean;
  sortOrder?: number;
  createdAt?: string;
  updatedAt?: string;
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
  imageUrl: string; // MinIO URL hoặc CDN
  tagline: string;
  badge?: string;
  isActive?: boolean;
  sortOrder?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IBannerSpec {
  label: string;
  value: string;
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
  carImageUrl: string; // MinIO URL ảnh xe hiển thị trực tiếp
  badge?: string;
  price?: string; // Giá niêm yết
  specs?: IBannerSpec[]; // Các thông số vàng
  isActive?: boolean;
  sortOrder?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IEcosystemItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string; // MinIO URL hoặc CDN
  actionText: string;
  actionLink: string;
  isActive?: boolean;
  sortOrder?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IPromotionItem {
  id: string;
  title: string;
  highlight: string;
  description: string;
  tag: string;
  validUntil: string;
  isActive?: boolean;
  sortOrder?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface IVinFastData {
  banners: IBannerItem[];
  cars: IVinFastCar[];
  motorbikes: IVinFastMotorbike[];
  ecosystem: IEcosystemItem[];
  promotions: IPromotionItem[];
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface ApiListResponse<T> {
  data: T[];
  total: number;
  message?: string;
}
