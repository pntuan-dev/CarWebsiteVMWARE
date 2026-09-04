import {
  CarSegment,
  IBannerItem,
  IEcosystemItem,
  IPromotionItem,
  IVinFastCar,
  IVinFastData,
  IVinFastMotorbike,
  ApiListResponse,
  ApiResponse,
} from '@/types/vinfast';

const API_BASE =
  process.env.API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  'http://localhost:4000';

async function fetchFromApi<T>(endpoint: string): Promise<T[]> {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      // Revalidate sau mỗi 10 giây hoặc luôn lấy mới nhất
      next: { revalidate: 10 },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      console.error(`[VinFastService] API lỗi ${res.status}: ${endpoint}`);
      return [];
    }

    const result: ApiListResponse<T> = await res.json();
    return result.data || [];
  } catch (error) {
    console.error(`[VinFastService] Lỗi kết nối API ${endpoint}:`, error);
    return [];
  }
}

export class VinFastService {
  /**
   * Lấy toàn bộ dữ liệu trang chủ VinFast qua API
   */
  public static async getHomeData(): Promise<IVinFastData> {
    const [banners, cars, motorbikes, ecosystem, promotions] = await Promise.all([
      this.getBanners(),
      this.getCars(),
      this.getMotorbikes(),
      this.getEcosystem(),
      this.getPromotions(),
    ]);

    return {
      banners,
      cars,
      motorbikes,
      ecosystem,
      promotions,
    };
  }

  /**
   * Lấy danh sách banner hero slider
   */
  public static async getBanners(): Promise<IBannerItem[]> {
    return fetchFromApi<IBannerItem>('/api/banners');
  }

  /**
   * Lấy danh sách ô tô điện theo phân khúc
   */
  public static async getCars(segment: CarSegment = 'all'): Promise<IVinFastCar[]> {
    const query = segment !== 'all' ? `?segment=${segment}` : '';
    return fetchFromApi<IVinFastCar>(`/api/cars${query}`);
  }

  /**
   * Lấy thông tin chi tiết ô tô theo slug
   */
  public static async getCarBySlug(slug: string): Promise<IVinFastCar | undefined> {
    try {
      const res = await fetch(`${API_BASE}/api/cars?activeOnly=false`, {
        next: { revalidate: 10 },
      });
      if (!res.ok) return undefined;
      const result: ApiListResponse<IVinFastCar> = await res.json();
      return (result.data || []).find((car) => car.slug === slug);
    } catch (error) {
      console.error(`[VinFastService] Lỗi tìm xe theo slug ${slug}:`, error);
      return undefined;
    }
  }

  /**
   * Lấy danh sách xe máy điện
   */
  public static async getMotorbikes(): Promise<IVinFastMotorbike[]> {
    return fetchFromApi<IVinFastMotorbike>('/api/motorbikes');
  }

  /**
   * Lấy danh sách hệ sinh thái & trạm sạc
   */
  public static async getEcosystem(): Promise<IEcosystemItem[]> {
    return fetchFromApi<IEcosystemItem>('/api/ecosystem');
  }

  /**
   * Lấy danh sách chương trình ưu đãi
   */
  public static async getPromotions(): Promise<IPromotionItem[]> {
    return fetchFromApi<IPromotionItem>('/api/promotions');
  }
}

